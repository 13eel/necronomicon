import { type CSSProperties } from "react";

export interface Role {
  label: string;
  iconSrc: string;
  desc: string;
  size?: number;
  evil?: boolean;
}

export type Roles = Readonly<Record<string, Role>>;

export interface UIComponent {
  className?: string;
  style?: CSSProperties;
}
