import { cn } from "@/lib/utils";
import Image from "next/image";
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
        <Image
          src={imageSrc}
          alt="Skeleton image"
          width={128}
          height={128}
          className="w-full h-auto rounded-t-md mb-2"
        />
      )}
      {text && <span className="text-center text-muted">{text}</span>}
    </div>
  );
}

export { Skeleton };
