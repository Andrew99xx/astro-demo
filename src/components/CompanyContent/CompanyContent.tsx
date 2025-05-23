import React, { useEffect, useState } from "react";
import useMediaUrl from "../../hooks/useMediaUrl";

const CompanyContent = ({
  data,
  className,
  altText,
}: {
  data: any;
  className?: string;
  altText?: string;
}) => {
  const { getMediaUrl } = useMediaUrl();
  const [modifiedHtml, setmodifiedHtml] = useState("");

  useEffect(() => {
    if (data) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      doc.querySelectorAll("img").forEach((img) => {
        const originalSrc = img.getAttribute("src");
        const originalAlt = img.getAttribute("alt") || { altText };
        if (originalSrc) {
          img.setAttribute("src", getMediaUrl(originalSrc));
        }
        if (originalAlt) {
          img.setAttribute("alt", altText);
        }
      });
      setmodifiedHtml(doc.body.innerHTML);
    }
  }, [data]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: modifiedHtml,
      }}
    />
  );
};

export default CompanyContent;
