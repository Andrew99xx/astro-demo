"use client"

import React from "react";
import { Button, type ButtonProps } from "../../components/ui/button";

export default function AstroButton({ children, ...props }: ButtonProps) {
  return <Button {...props}>{children}</Button>;
}
