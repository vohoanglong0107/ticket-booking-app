import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
