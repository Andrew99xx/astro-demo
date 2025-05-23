import React from "react";
import useMediaUrl from "../../hooks/useMediaUrl";

export const CloudfrontImg: React.FC<{
  class?: string;
  className?: string;
  alt: string;
  style?: React.CSSProperties;
  src: string;
  height?: number;
  width?: number;
  fetchpriority?: "high" | "auto" | "low";
  loading?: "eager" | "lazy";
}> = ({ src, ...rest }) => {
  const { getMediaUrl } = useMediaUrl();
  return <img src={getMediaUrl(src)} {...rest} width={rest.width} height={rest.height} />;
};

export const CloudfrontVideo: React.FC<
  React.VideoHTMLAttributes<HTMLVideoElement> & {
    className?: string;
    alt: string;
    src: string;
    ref?: React.Ref<HTMLVideoElement>;
  }
> = ({ src, ...rest }) => {
  const { getMediaUrl } = useMediaUrl();
  return <video src={getMediaUrl(src)} {...rest} />;
};
