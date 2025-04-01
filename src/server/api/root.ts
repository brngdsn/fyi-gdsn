import { postRouter } from "./routers/post/post.procedure";
import { stripeRouter } from "./routers/stripe/stripe.procedure";
import { userRouter } from "./routers/user/user.procedure";
import { chatRouter } from "./routers/chat";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  user: userRouter,
  post: postRouter,
  stripe: stripeRouter,
  chat: chatRouter,
});

export type AppRouter = typeof appRouter;
