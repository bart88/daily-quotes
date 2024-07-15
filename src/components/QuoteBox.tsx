import { ReactNode, useMemo, useState } from "react";
import { Quote } from "../models/quote";
import quotes_json from "../assets/quotes.json";
import JSConfetti from "js-confetti";

function generateIndex(currentIndex: number) {
  const randomIndex = Math.floor(Math.random() * quotes_json.length);
  if (randomIndex !== currentIndex) {
    return randomIndex;
  }
  // recall
  return generateIndex(currentIndex);
}

function pickQuote(currentIndex: number): Quote {
  const index = generateIndex(currentIndex);
  const quote = quotes_json[index];
  return quote;
}

type QuoteBoxProps = {
  children: (props: QuoteBoxRenderProps) => ReactNode;
};

type QuoteBoxRenderProps = {
  index: number;
  quote: Quote;
  generateNewQuote: () => void;
};

export default function QuoteBox({ children }: QuoteBoxProps) {
  // Create inital state
  const [index, setIndex] = useState(generateIndex(0));
  const [quote, setQuote] = useState<Quote>(pickQuote(index));

  const jsConfetti = useMemo(() => new JSConfetti(), []);

  const generateNewQuote = () => {
    jsConfetti?.addConfetti();

    const newIndex = generateIndex(index);
    const newQuote = pickQuote(newIndex);
    setIndex(newIndex);
    setQuote(newQuote);
  };

  return (
    <div className="flex flex-col items-center m-6">
      <div className="mx-0 max-w-xl rounded-2xl bg-white p-6 drop-shadow-2xl border border-gray-300">
        {typeof children === "function" &&
          children({ index, quote, generateNewQuote })}
      </div>
    </div>
  );
}
