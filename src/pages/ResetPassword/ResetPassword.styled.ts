import Typo from "@components/Typo/Typo";
import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { Input } from "@components/formComponents";
import Button from "@components/Button/Button";

export const ResetPassword = styled.div`
  max-width: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-6);
`;

export const Title = styled(Typo)``;

export const InnerTitle = styled(Typo)`
  margin-bottom: var(--s-3);
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--c-white-4);
`;

export const InputsContainer = styled.div`
  margin: var(--s-5) 0;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  padding: var(--s-5) var(--s-8);
  margin: var(--s-1);
  box-shadow: var(--box-shadow);
  border-radius: var(--br-2);
`;

export const FormLabel = styled(Typo)``;

export const FormInput = styled(Input)`
  margin: var(--s-2) 0;
`;

export const ConfirmBtn = styled(Button)`
  width: 100%;
  margin: var(--s-5) 0;
`;
