import * as React from "react";
import { SVGProps } from "react";

const PageDesign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={1446}
    // height={624}
    viewBox="0 0 1446 624"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1446 0H0v624l1446-281.704V0Z"
      fill="url(#pg-design-a)"
      fillOpacity={0.2}
    />
    <defs>
      <linearGradient
        id="pg-design-a"
        x1={723}
        y1={0}
        x2={723}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2C94C" />
        <stop offset={1} stopColor="#F2994A" />
      </linearGradient>
    </defs>
  </svg>
);

export default PageDesign;
