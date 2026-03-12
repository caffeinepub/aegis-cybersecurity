import { useMutation } from "@tanstack/react-query";
import { createActorWithConfig } from "../config";
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
      // Use cached actor if available, otherwise create a fresh anonymous one
      const resolvedActor = actor ?? (await createActorWithConfig());
      await resolvedActor.submitContactForm(
        data.name,
        data.startupName,
        data.websiteUrl,
        data.email,
        data.message,
      );
    },
  });
}
