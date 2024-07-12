import { stagger, useAnimate } from "framer-motion";

export default function NewQuoteButton({
  generateNewQuote,
}: {
  generateNewQuote: () => void;
}) {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([[".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }]]);
    generateNewQuote();
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Next
        </span>
      </button>
    </div>
  );
}