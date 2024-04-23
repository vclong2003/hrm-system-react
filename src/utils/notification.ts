import { toast } from "react-toastify";

/**
 * Displays an error notification.
 * @param message - The error message to display.
 */
const notifyError = (message: string | string[]) => {
  if (Array.isArray(message)) {
    toast.error(message.join(", "));
  } else {
    toast.error(message);
  }
  return;
};

/**
 * Displays a success notification.
 * @param message - The success message to display.
 */
const notifySuccess = (message: string) => {
  toast.success(message);
  return;
};

/**
 * Displays a warning notification.
 * @param message - The warning message to display.
 */
const notifyWarning = (message: string) => {
  toast.warning(message);
  return;
};

/**
 * Displays an information notification.
 * @param message - The information message to display.
 */
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
