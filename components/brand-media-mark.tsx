import Image from "next/image";

export function BrandMediaMark({ className = "" }: { className?: string }) {
  return (
    <span className={`ge-media-brand-mark${className ? ` ${className}` : ""}`} aria-hidden="true">
      <Image
        src="/assets/images/logo-light.png"
        alt=""
        width={180}
        height={44}
        sizes="(max-width: 768px) 112px, 154px"
      />
    </span>
  );
}
