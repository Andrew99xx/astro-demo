import { useCallback } from "react";

export const useMediaUrl = () => {
  // Ensure the environment variable is correctly loaded

  const mediaUrlBase = `${import.meta.env.PUBLIC_MEDIA_URL}`;
  console.log(mediaUrlBase, "mediaUrlBase");
  if (!mediaUrlBase) {
    console.error("MEDIA_URL is not defined in your environment variables.");
  }

  const getMediaUrl = (headerBannerImageUrl: string): string => {
    if (!headerBannerImageUrl || !headerBannerImageUrl.includes("wp-content")) {
      console.warn("Invalid media URL:", headerBannerImageUrl);
      return headerBannerImageUrl;
    }

    return (
      mediaUrlBase + "wp-content" + headerBannerImageUrl.split("wp-content")[1]
    );
  };

  return { getMediaUrl };
};

export default useMediaUrl;
