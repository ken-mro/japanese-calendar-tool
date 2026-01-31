import Image from "next/image";

export default function Icon({
  src,
  alt,
  title,
  size = 48,
}: {
  src: string;
  alt: string;
  title?: string;
  size?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={size}
      height={size}
      className={`object-contain`}
      style={{ width: size, height: size }}
    />
  );
}
