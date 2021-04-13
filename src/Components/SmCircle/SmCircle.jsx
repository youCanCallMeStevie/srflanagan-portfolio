import React from "react";
import {IconWrapper, PageWrapper} from "./SmCircle.elements"

function SmCircle({xAxis}) {
  return (
    <PageWrapper>
      <IconWrapper>
    <svg width="900" height="900">
      <circle  cx={xAxis} cy="220" r="20%" ></circle>
    </svg>
    </IconWrapper>
    </PageWrapper>
  );
}

export default SmCircle;