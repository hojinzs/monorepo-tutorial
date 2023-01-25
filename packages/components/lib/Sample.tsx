import React from "react";
import { Box } from "@mui/material";

export interface SampleProps {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
}

const Sample: React.FC<SampleProps> = ({ text, text1, text2 }) => {
  return <Box>{text ? text : "Sample Component!!"}</Box>;
};

export default Sample;
