import Typo from "@components/Typo/Typo";
import styled from "styled-components";

export const BenefitsSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
`;

export const AvailableList = styled.div`
  width: 100%;
  padding: var(--s-3);
  background-color: var(--c-white-2);
  border-radius: var(--br-1);
  gap: var(--s-2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: calc(var(--s-3) + var(--fs-body2) + var(--s-3));
`;

export const AvailableItem = styled(Typo)`
  background-color: var(--c-gray-3);
  color: var(--c-gray);
  border-radius: var(--br-1);
  cursor: pointer;
  padding: var(--s-1) var(--s-2);
`;

export const SelectedList = styled.div`
  width: 100%;
  padding: var(--s-3);
  background-color: var(--c-white-1);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--s-2);
  border-radius: var(--br-1);
  min-height: calc(var(--s-3) + var(--fs-body2) + var(--s-3));
`;

export const SelectedItem = styled(Typo)`
  background-color: var(--c-white);
  color: var(--c-blue);
  border-radius: var(--br-1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-1);
  padding: var(--s-1) var(--s-2);
  cursor: pointer;
`;

export const RemoveIcon = styled.img`
  width: 14px;
  height: 14px;
`;
