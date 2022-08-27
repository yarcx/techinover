import React, { CSSProperties } from "react";
import toast, { Renderable, ToastPosition } from "react-hot-toast";
import { RoundedCheckIcon, WarningIcon } from "../Icon";

type ToastOption = { position: ToastPosition; style: CSSProperties; icon: Renderable };

export const useSnackbar = () => {
  const showSuccessSnackbar = (message: string, options?: ToastOption) => {
    toast.success(message, {
      position: options?.position || "bottom-center",
      style: { color: "#FFFFFF", backgroundColor: "#1B9B65" },
      icon: <RoundedCheckIcon color="#FFFFFF" />,
      duration: 4000,
    });
  };
  const showErrorSnackbar = (message: string, options?: ToastOption) => {
    toast.error(message, {
      position: options?.position || "bottom-center",
      style: { color: "white", backgroundColor: "red" },
      icon: <WarningIcon color="#FFFFFF" />,
      duration: 4000,
    });
  };

  return { showSuccessSnackbar, showErrorSnackbar };
};
