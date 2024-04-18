import Button from "@components/Button/Button";
import Typo from "@components/Typo/Typo";
import { Input } from "@components/formComponents";
import { Link } from "react-router-dom";
import { Form as FormikForm } from "formik";
import styled from "styled-components";

export const ForgotPassword = styled.div`
  max-width: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-6);
`;

export const Title = styled(Typo)`
  color: var(--c-black);
`;
export const Form = styled(FormikForm)`
  background-color: var(--c-white);
  padding: var(--s-6);
  padding-bottom: var(--s-8);
  box-shadow: var(--box-shadow);
  border-radius: var(--br-3);
  width: 100%;
`;

export const InputLabel = styled(Typo)`
  margin-bottom: var(--s-1);
`;

export const FormInput = styled(Input)`
  margin-bottom: var(--s-3);
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  margin: var(--s-3) 0;
`;

export const BackToLoginContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const BackToLoginLink = styled(Link)`
  text-decoration: none;
  font-family: var(--ff-regular);
  font-size: var(--fs-body2);
  color: var(--c-blue);
  margin: 0;
`;
