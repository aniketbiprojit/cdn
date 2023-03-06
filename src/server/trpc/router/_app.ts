import { router } from "../trpc";
import { authRouter } from "./auth";
import { publicRouter } from "./example";

export const appRouter = router({
  publicRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
