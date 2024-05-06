import { toast } from "react-toastify";

const notifyError = (message: string | string[]) => {
  if (Array.isArray(message)) {
    toast.error(message.join(", "));
  } else {
    toast.error(message);
  }
  return;
};

const notifySuccess = (message: string) => {
  toast.success(message);
  return;
};

const notifyWarning = (message: string) => {
  toast.warning(message);
  return;
};

const notifyInfo = (message: string) => {
  toast.info(message);
  return;
};

export default {
  notifyError,
  notifySuccess,
  notifyWarning,
  notifyInfo,
};
