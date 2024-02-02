import { Link, useRouteError } from "react-router-dom";
import { ReactComponent as Img404 } from "../assets/images/404.svg";
import { Box, Button, Typography } from "@mui/material";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      alignContent={"center"}
      flexDirection={"column"}
      gap={2}
      height="100%"
    >
      <Img404 height="400" width="400" />
      <Typography fontSize={20} fontWeight={"bold"}>
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Button variant={"contained"} href={"/"}>
        Come to Home
      </Button>
    </Box>
  );
}
