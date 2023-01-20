const Token = () => {
  return (
    <div className="h-28 w-28 rounded-full border-4 border-solid border-black bg-token-image bg-token-size bg-center font-token">
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
            Cuoco
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Token;
