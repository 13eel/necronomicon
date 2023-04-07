import Image from "next/image";

interface TokenProps {
  label: string;
  icon: string;
  size?: number;
}

const Token = ({ label, icon, size = 110 }: TokenProps) => {
  return (
    <div className="relative flex aspect-square w-[10.5rem] items-center justify-center rounded-full border-[5px] border-solid border-stone-800 bg-token-image bg-token-size bg-center font-token">
      <div className="absolute -mt-2 aspect-square w-11/12">
        <Image src={`/images/${icon}.webp`} alt="Role icon" fill />
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
          fontSize={`${size}%`}
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
