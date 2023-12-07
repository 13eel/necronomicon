/* eslint-disable @next/next/no-img-element */
interface RoleProps {
  label: string;
  description: string;
  evil?: boolean;
  icon: string;
}
const Role = ({ label, description, icon, evil = false }: RoleProps) => {
  return (
    <div className="flex">
      <img src={`/images/${icon}.webp`} className="-my-3 w-[80px]" alt="" />
      <p className="font-sans text-sm leading-none">
        <h4
          className={`pt-2 font-serif font-bold capitalize ${
            evil ? "text-red-600" : "text-sky-600"
          }`}
        >
          {label}
        </h4>
        <span
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-black"
        ></span>
      </p>
    </div>
  );
};

export default Role;
