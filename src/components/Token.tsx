import Image from "next/image";

interface TokenProps {
  label: string;
  iconSrc: string;
}
const Token = ({ label, iconSrc }: TokenProps) => {
  return (
    <div className="relative flex aspect-square w-52 items-center justify-center rounded-full border-[3px] border-solid border-black bg-token-image bg-token-size bg-center font-token">
      <div className="absolute -mt-2 aspect-square w-11/12">
        <Image src={iconSrc} alt="Role icon" fill />
      </div>
      <svg viewBox="0 0 150 150" className="h-full w-full text-xl uppercase">
        <path
          fill="transparent"
          id="curve"
          d="M 13 75 C 13 160, 138 160, 138 75"
        />
        <text
          x="66.6%"
          textAnchor="middle"
          fontSize="110%"
          className="fill-black stroke-white stroke-2 font-token tracking-widest"
          style={{ paintOrder: "stroke" }}
        >
          <textPath xlinkHref="#curve" textAnchor="middle">
            {label}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Token;
