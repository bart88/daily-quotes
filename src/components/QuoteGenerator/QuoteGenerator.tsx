import { useContext, useMemo, useState } from "react";
import React from "react";
import { Quote } from "../../models/quote";
import JSConfetti from "js-confetti";
import quotes_json from "../../assets/quotes.json";

type PreviousQuotes = {
  index: number;
  timestamp: string;
};

/**
 * Randomly pick a index (that is not the current index)
 * @param currentIndex
 * @returns
 */
const generateIndex = (currentIndex: number) => {
  const randomIndex = Math.floor(Math.random() * quotes_json.length);
  if (randomIndex !== currentIndex) {
    return randomIndex;
  }
  // recursively call until we get a non matching index
  return generateIndex(currentIndex);
};

/**
 * Write the current index and the history into localStorage
 * @param newIndex
 * @param previouslyShownQuotes
 */
const writeQuoteStateToStorage = (
  newIndex: number,
  previouslyShownQuotes: PreviousQuotes[]
) => {
  localStorage.setItem(
    "daily-quotes-currentQuoteIndex",
    JSON.stringify(newIndex)
  );
  localStorage.setItem(
    "daily-quotes-previouslyShownQuotes",
    JSON.stringify([...previouslyShownQuotes])
  );
};

const QuoteGeneratorContext = React.createContext<{
  currentQuote: Quote;
  setCurrentQuote: React.Dispatch<React.SetStateAction<Quote>>;
  generateNewQuote: () => void;
  previouslyShownQuotes: { index: number; timestamp: string }[];
}>({
  currentQuote: { author: "", text: "" },
  setCurrentQuote: () => {},
  generateNewQuote: () => {},
  previouslyShownQuotes: [],
});

export const QuoteGeneratorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [index, setIndex] = useState<number>(() => {
    const savedIndex = localStorage.getItem("daily-quotes-currentQuoteIndex");
    return savedIndex ? parseInt(JSON.parse(savedIndex)) : generateIndex(0);
  });

  const [currentQuote, setCurrentQuote] = useState<Quote>(() => {
    return quotes_json[index];
  });

  const [previouslyShownQuotes, setPreviouslyShownQuotes] = useState<
    PreviousQuotes[]
  >(() => {
    const savedQuotes = localStorage.getItem(
      "daily-quotes-previouslyShownQuotes"
    );
    return savedQuotes ? JSON.parse(savedQuotes) : [];
  });

  const jsConfetti = useMemo(() => new JSConfetti(), []);

  const generateNewQuote = () => {
    jsConfetti.addConfetti();

    const newIndex = generateIndex(index);
    const newQuote = quotes_json[newIndex];
    setIndex(newIndex);
    setCurrentQuote(newQuote);
    setPreviouslyShownQuotes((prev) => [
      ...prev,
      { index: newIndex, timestamp: new Date().toISOString() },
    ]);
    // Write the changes to local storage
    writeQuoteStateToStorage(newIndex, previouslyShownQuotes);
  };

  return (
    <QuoteGeneratorContext.Provider
      value={{
        currentQuote,
        setCurrentQuote,
        generateNewQuote,
        previouslyShownQuotes,
      }}
    >
      {children}
    </QuoteGeneratorContext.Provider>
  );
};

export function useQuoteGenerator() {
  const context = useContext(QuoteGeneratorContext);

  if (context === undefined) {
    throw new Error(
      "useQuoteGenerator must be used within a QuoteGeneratorProvider"
    );
  }

  return context;
}
