
import React, { useEffect, useState } from "react";

type NoSSRProps = {
  children: React.ReactNode;
};

const NoSSR: React.FC<NoSSRProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

export default NoSSR;
