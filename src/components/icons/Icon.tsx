import Image from "next/image";

export default function Icon({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={48}
      height={48}
      className="w-12 h-12 object-contain"
    />
  );
}
