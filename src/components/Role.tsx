/* eslint-disable @next/next/no-img-element */
interface RoleProps {
  label: string;
  desc: string;
  evil?: boolean;
  iconSrc: string;
}
const Role = ({ label, desc, iconSrc, evil = false }: RoleProps) => {
  return (
    <div className="flex">
      <img src={`/images/${iconSrc}.webp`} className="-my-3 w-[80px]" alt="" />
      <p className="font-sans text-sm leading-none">
        <h4
          className={`pt-2 font-serif font-bold capitalize ${
            evil ? "text-red-600" : "text-sky-600"
          }`}
        >
          {label}
        </h4>
        <span dangerouslySetInnerHTML={{ __html: desc }}></span>
      </p>
    </div>
  );
};

export default Role;
