import React from "react";

export const ErrorMessage = (props) => {
  const { msg, bgColor = "#ffea00" } = props;
  const styleMsg = {
    backgroundColor: bgColor,
    padding: "1rem",
    color: "#fff",
    borderRadius: "0.625rem",
    fontWeight: "bold",
  };
  return <section style={styleMsg}>{msg}</section>;
};
