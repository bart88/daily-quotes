import { getDayNotice } from "../utilities/notice";

export default function Header() {
  const notice = getDayNotice();
  return (
    <div className="flex justify-center flex-col items-center p-4 space-y-2">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
        Quotes of love and inspiration for the{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-red-400 dark:decoration-red-600">
          one I love
        </span>
      </h1>
      <p className="text-lg font-normal text-gray-50 lg:text-xl dark:text-gray-400">
        {notice}
      </p>
    </div>
  );
}
