import * as react from 'react';
import { ButtonHTMLAttributes } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

declare const variants: (props?: ({
    intent?: "default" | "info" | "success" | "warning" | "error" | null | undefined;
    density?: "default" | "comfortable" | "compact" | null | undefined;
    disabled?: boolean | null | undefined;
    link?: boolean | null | undefined;
    invisible?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<VariantProps<typeof variants>, "disabled"> {
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

export { Button };
