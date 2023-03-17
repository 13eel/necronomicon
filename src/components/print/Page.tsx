import type { ReactNode } from "react";

interface PageProps {
  children?: ReactNode;
  className?: string;
}

const Page = ({ children, className = "" }: PageProps) => {
  return (
    <div
      className={`${className} h-[29.7cm] w-[21cm] break-after-page overflow-hidden bg-white `}
    >
      {children}
    </div>
  );
};

export default Page;
