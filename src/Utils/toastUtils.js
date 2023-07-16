import { toast } from "react-toastify";

export const showSuccessToast = (message, duration) => {
  toast.success(message, {
    position: "top-center",
    autoClose: duration ? duration : 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const showErrorToast = (message, duration) => {
  toast.error(message, {
    position: "top-center",
    autoClose: duration ? duration : 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};