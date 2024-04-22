import { Input } from "antd";
import styled from "styled-components";

export const PageHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--s-4);
`;

export const SearchInput = styled(Input)`
  width: 200px;
  background-color: var(--c-white-5);
  border-radius: var(--br-2);
  border: 2px solid var(--c-white-4) !important;
  padding: var(--s-2);
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 var(--s-1);
`;
