import type { ReactNode } from "react";

interface PageProps {
  children?: ReactNode;
  className?: string;
}

const Page = ({ children, className = "" }: PageProps) => {
  return (
    <div
      className={`${className} h-[29.7cm] w-[21cm] bg-white shadow shadow-black`}
    >
      {children}
    </div>
  );
};

export default Page;
