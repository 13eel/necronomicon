import { cva, type VariantProps } from "class-variance-authority";
import { type ChangeEvent, type ComponentProps } from "react";
import { type UIComponent } from "~/types";

const variants = cva(["range"], { variants: {}, defaultVariants: {} });

interface Props
  extends UIComponent,
    Omit<ComponentProps<"input">, "onChange">,
    VariantProps<typeof variants> {
  label?: string;
  onChange?: (value: number) => void;
}

const Range = ({ className, style, label, onChange, ...props }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(parseInt(e.target.value));
  };

  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <input
        type="range"
        className={variants({ className })}
        style={style}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Range;
