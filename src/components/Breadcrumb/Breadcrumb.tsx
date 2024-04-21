import * as S from "./Breadcrumb.styled";
import RightArrow from "@assets/icons/right_arrow.png";

import { Breadcrumb as AntBreadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

interface IBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export default function Breadcrumb({ items }: IBreadcrumbProps) {
  return (
    <AntBreadcrumb
      separator={<S.SeperatorIcon src={RightArrow} />}
      items={items}
    />
  );
}
