import { PropsWithChildren } from "react";

export default function QuoteBox({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center m-6">
      <div className="mx-0 max-w-xl rounded-2xl bg-white p-6 drop-shadow-2xl border border-gray-300">
        {children}
      </div>
    </div>
  );
}
