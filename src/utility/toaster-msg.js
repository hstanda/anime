import { toast } from "react-toastify";

export const successMsg = (msg) => {
  toast.success(msg, { position: "top-right", autoClose: 5000 });
};

export const errorMsg = (msg) => {
  toast.error(msg, { position: "top-right", autoClose: 5000 });
};
