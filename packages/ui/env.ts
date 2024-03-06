import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TOKEN_IMAGE_ROOT: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    TOKEN_IMAGE_ROOT: process.env.TOKEN_IMAGE_ROOT,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
