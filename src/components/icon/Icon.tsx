import React from "react";
import iconsSprite from "../../assets/images/icon-sprites.svg";
import {theme} from "../../styles/Theme";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
};

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox={props.viewBox || "0 0 24 24"}
      fill={props.fill || "none"}
      stroke={props.stroke || theme.colors.Neutral60}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
