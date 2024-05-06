import * as S from "./Breadcrumb.styled";

import { Breadcrumb as AntBreadcrumb } from "antd";
import { Link } from "react-router-dom";
import RightArrow from "@assets/icons/right_arrow.png";

import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

interface IBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export default function Breadcrumb({ items }: IBreadcrumbProps) {
  const itemRender = (route: BreadcrumbItemType) => {
    if (route.path) return <Link to={`/${route.path}`}>{route.title}</Link>;
    return <span>{route.title}</span>;
  };
  return (
    <AntBreadcrumb
      separator={<S.SeperatorIcon src={RightArrow} />}
      itemRender={itemRender}
      items={items}
    />
  );
}
