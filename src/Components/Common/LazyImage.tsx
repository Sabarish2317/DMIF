import  { Suspense } from "react";

const Img = ({ src, alt, className }: any) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

const LazyImage = (props: any) => {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse bg-gray-200 w-full h-full rounded-xl" />
      }
    >
      <Img {...props} />
    </Suspense>
  );
};

export default LazyImage;
