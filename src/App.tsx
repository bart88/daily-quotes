import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import { NewQuoteButton } from "./components/NewQuoteButton";
import Quote from "./components/Quote";
import QuoteBox from "./components/QuoteBox";
import "./index.css";
import { QuoteGeneratorProvider } from "./components/QuoteGenerator/QuoteGenerator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-y-auto">
        <Header />
        <QuoteGeneratorProvider>
          <QuoteBox>
            <>
              <Quote />
              <NewQuoteButton />
            </>
          </QuoteBox>
        </QuoteGeneratorProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
