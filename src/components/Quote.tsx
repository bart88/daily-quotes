import { Quote as QuoteType } from "../models/quote";
import { QuoteSvg } from "./QuoteSvg";

export default function Quote({ text, author }: QuoteType) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <QuoteSvg />
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              {text}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                {author}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
