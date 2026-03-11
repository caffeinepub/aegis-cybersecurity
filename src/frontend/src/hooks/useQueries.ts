import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      startupName: string;
      websiteUrl: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactForm(
        data.name,
        data.startupName,
        data.websiteUrl,
        data.email,
        data.message,
      );
    },
  });
}
