import "react-toastify/dist/ReactToastify.css"; // Css for toast notification

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface INotificationProviderProps {
  children: ReactNode;
}
export default function NotificationProvider({
  children,
}: INotificationProviderProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {children}
    </>
  );
}
