/* eslint-disable @next/next/no-img-element */
interface RoleProps {
  label: string;
  description: string;
  evil?: boolean;
  icon: string;
}
const Role = ({ label, description, icon, evil = false }: RoleProps) => {
  return (
    <div className="flex items-start">
      <img
        src={`/images/${icon}.webp`}
        className="-my-3 w-[80px] self-end"
        alt=""
      />
      <div className="font-sans">
        <h4
          className={`font-serif text-sm font-bold capitalize ${
            evil ? "text-red-600" : "text-sky-600"
          }`}
        >
          {label}
        </h4>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-[13px] leading-none text-black"
        ></p>
      </div>
    </div>
  );
};

export default Role;
