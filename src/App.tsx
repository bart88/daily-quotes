import Header from "./components/Header";
import NewQuoteButton from "./components/NewQuoteButton";
import Quote from "./components/Quote";
import QuoteBox from "./components/QuoteBox";
import "./index.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-y-auto">
      <Header />
      <QuoteBox>
        {({ quote, generateNewQuote }) => (
          <>
            <Quote {...quote} />
            <NewQuoteButton generateNewQuote={generateNewQuote} />
          </>
        )}
      </QuoteBox>
    </div>
  );
}

export default App;
