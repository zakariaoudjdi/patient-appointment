import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function useNavigateMutation(mutationFn, options = {}, navigateTo) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn,
    ...options,
    onSuccess: (...args) => {
      if (options.onSuccess) {
        options.onSuccess(...args);
      }
      if (navigateTo) {
        navigate(navigateTo);
      }
    },
  });
}
