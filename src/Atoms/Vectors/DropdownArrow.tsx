import * as React from "react";
import { SVGProps } from "react";

const DropdownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={21}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.564 10.128a.932.932 0 0 0 .554-.224l9.2-8.064a.9.9 0 0 0 .306-.622.877.877 0 0 0-.236-.65.922.922 0 0 0-.64-.297.947.947 0 0 0-.667.232L10.5 8.028 1.918.503A.929.929 0 0 0 1.25.27a.944.944 0 0 0-.64.296.895.895 0 0 0-.236.65.881.881 0 0 0 .306.623l9.2 8.064a.927.927 0 0 0 .683.224Z"
      fill="#000"
    />
  </svg>
);

export default DropdownArrow;
