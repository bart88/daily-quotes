type AuthorImageProps = {
  url: string;
  authorName: string;
  isUpdating: boolean;
};

export const AuthorImage = ({
  url,
  authorName,
  isUpdating,
}: AuthorImageProps) => {
  console.log("is updating ", isUpdating);
  return (
    <>
      {url && !isUpdating ? (
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src={url}
          alt={`Picture of ${authorName}`}
        />
      ) : (
        <div className="animate-pulse">
          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-500" />
        </div>
      )}
    </>
  );
};
