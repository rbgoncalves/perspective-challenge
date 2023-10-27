import Image from "next/image";

export const Header = () => (
  <>
    <Image width={56} height={56} className="m-4" src="/logo.png" alt="Image" />
    <h1 className="text-2xl font-semibold">Mobile Funnel Preview</h1>
  </>
);
