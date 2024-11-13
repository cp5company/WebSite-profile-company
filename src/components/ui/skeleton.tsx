import { cn } from "@/lib/utils";

function Skeleton({
  className,
  imageSrc, // Accept image source as a prop
  text, // Accept text as a prop
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  imageSrc?: string;
  text?: string;
}) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted flex flex-col items-center",
        className
      )}
      {...props}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Skeleton image"
          className="w-full h-auto rounded-t-md mb-2"
        />
      )}
      {text && <span className="text-center text-muted">{text}</span>}
    </div>
  );
}

export { Skeleton };
