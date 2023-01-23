import Image from "next/image";

interface RoleProps {
  label: string;
  desc: string;
  evil?: boolean;
  iconSrc: string;
}
const Role = ({ label, desc, iconSrc, evil = false }: RoleProps) => {
  return (
    <div className="flex">
      <Image
        src={`/images/${iconSrc}.webp`}
        width={90}
        height={50}
        alt=""
        className="-mt-3"
      />
      <p className="text-sm leading-none">
        <h4
          className={`mb-1 text-base font-bold capitalize ${
            evil ? "text-red-600" : "text-sky-600"
          }`}
        >
          {label}
        </h4>
        {desc}
      </p>
    </div>
  );
};

export default Role;
