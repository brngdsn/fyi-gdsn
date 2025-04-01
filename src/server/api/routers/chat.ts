import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const chatRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(z.object({ message: z.string() }))
    .mutation(async ({ input }) => {
      // TODO: Replace with actual AI integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      return {
        role: "assistant",
        content: "I understand you're interested in working together. Let me help you with that. What specific aspects of your project would you like to discuss?",
      };
    }),
}); 