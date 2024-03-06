import { env } from "../env";

export const Test = () => {
  console.log("aca~'~~",env.TOKEN_IMAGE_ROOT);
  return <img src={``} />;
};
