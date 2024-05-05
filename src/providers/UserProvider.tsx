import { getCurrentUser } from "@store/auth";
import { AppDispatch } from "@store/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface IUserProviderProps {
  children: JSX.Element;
}
export default function UserProvider({ children }: IUserProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return children;
}
