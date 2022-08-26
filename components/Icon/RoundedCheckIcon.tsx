import * as React from "react";
import { IconProps } from "../lib/interface";

export const RoundedCheckIcon = ({ size = 18, color = "green" }: IconProps): JSX.Element => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0C7.16364 0 0 7.08506 0 15.8245C0 24.5639 7.16364 31.649 16 31.649C24.8364 31.649 32 24.5639 32 15.8245C32 7.08506 24.8364 0 16 0ZM22.9353 13.1487C23.063 13.0043 23.1602 12.8362 23.2212 12.6541C23.2822 12.472 23.3058 12.2797 23.2906 12.0885C23.2753 11.8972 23.2216 11.7109 23.1325 11.5406C23.0434 11.3702 22.9207 11.2191 22.7717 11.0963C22.6227 10.9735 22.4504 10.8814 22.2649 10.8255C22.0794 10.7695 21.8844 10.7508 21.6915 10.7705C21.4985 10.7901 21.3115 10.8478 21.1414 10.94C20.9714 11.0321 20.8216 11.1571 20.7011 11.3073L14.4465 18.729L11.2102 15.5267C10.9359 15.2647 10.5684 15.1197 10.1871 15.1229C9.80568 15.1262 9.44086 15.2775 9.17117 15.5442C8.90149 15.811 8.74852 16.1718 8.7452 16.549C8.74189 16.9262 8.8885 17.2896 9.15345 17.5609L13.5171 21.8767C13.66 22.0179 13.8311 22.1282 14.0195 22.2004C14.2079 22.2727 14.4095 22.3053 14.6113 22.2962C14.8131 22.2871 15.0109 22.2366 15.1919 22.1478C15.3729 22.0589 15.5332 21.9338 15.6625 21.7803L22.9353 13.1487Z"
          fill={color}
        />
      </svg>
    </>
  );
};
