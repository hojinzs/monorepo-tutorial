import { Box } from "@mui/material";
import Sample from "components/lib/Sample";
import { helloWorld } from "common-libs/lib/helloworld";

export default function Home() {
  return (
    <Box>
      <Sample />
      <Box>{helloWorld()}</Box>
    </Box>
  );
}
