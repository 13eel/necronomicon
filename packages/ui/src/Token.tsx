import { type Character } from "@acme/characters";

import { env } from "../env";

const bg = env.TOKEN_IMAGE_ROOT + `/token.webp`;

export const Token = ({ ...character }: Character) => {
  const imgURL = env.TOKEN_IMAGE_ROOT + `/tb/baron.webp`;
  return <><img src={bg} />
 <img src={imgURL}/> 
  </>;
};
