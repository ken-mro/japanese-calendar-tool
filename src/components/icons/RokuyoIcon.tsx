import React from "react";
import { type Rokuyo } from "@/lib/calculations";
import Icon from "./Icon";

interface RokuyoIconProps {
  rokuyo: Rokuyo;
  size?: number;
}

export const RokuyoIcon: React.FC<RokuyoIconProps> = ({ rokuyo, size }) => {
  return (
    <Icon
      src={`/images/rokuyo/${rokuyo.reading}.svg`}
      alt={rokuyo.name}
      size={size}
    />
  );
};
