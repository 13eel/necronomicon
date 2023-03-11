interface Role {
  label: string;
  iconSrc: string;
  desc: string;
  size?: number;
  evil?: boolean;
}

type Roles = Readonly<Record<string, Role>>;
