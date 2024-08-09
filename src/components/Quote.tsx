import { useEffect, useState } from "react";
import { useQuoteGenerator } from "./QuoteGenerator/QuoteGenerator";
import { QuoteSvg } from "./QuoteSvg";
import { usePageContentServiceGetPageSummaryByTitle } from "../openapi/queries";
import { summary } from "../openapi/requests";
import { AuthorImage } from "./AuthorImage/AuthorImage";

export default function Quote() {
  const { currentQuote } = useQuoteGenerator();

  const data = usePageContentServiceGetPageSummaryByTitle({
    title: currentQuote.author,
  });

  const [authorExtract, setAuthorExtract] = useState<string>("");
  const [authorThumbnail, setAuthorThumbnail] = useState<string>("");

  console.log(data.isFetching);

  useEffect(() => {
    if (data && data.isFetched) {
      const { extract, thumbnail } = data.data as summary;
      setAuthorExtract(extract);
      if (thumbnail) {
        setAuthorThumbnail(thumbnail.source);
      }
    }
  }, [data]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        {currentQuote && (
          <figure className="max-w-screen-md mx-auto">
            <QuoteSvg />
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                {currentQuote.text}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <AuthorImage
                url={authorThumbnail}
                authorName={currentQuote.author}
                isUpdating={data.isFetching}
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700 space-x-3">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  {currentQuote.author}
                </div>
              </div>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
