import React from "react";
import { Link } from "react-router-dom";

type StyledLinkProps = {
  to: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const StyledLink: React.FC<StyledLinkProps> = ({ to, children, style }) => {
  return (
    <Link
      to={to}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
        ...style,
      }}
      onMouseOver={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => ((e.target as HTMLElement).style.backgroundColor = "#007bff")}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
