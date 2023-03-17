import { cva, type VariantProps } from "class-variance-authority";
import { type PropsWithChildren } from "react";
import { type UIComponent } from "~/types";

const variants = cva(["tab tab-lifted"], {
  variants: {
    active: {
      true: "tab-active",
    },
  },
});

interface Props
  extends PropsWithChildren<UIComponent>,
    VariantProps<typeof variants> {
  onClick?: () => void;
}

const Tab = ({ children, className, active, onClick }: Props) => {
  return (
    <button
      type="button"
      className={variants({ className, active })}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default Tab;
