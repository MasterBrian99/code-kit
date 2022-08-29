import { Box } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const DefaultLayout = () => {
  return (
    <Navigation>
      <Box ml={"19rem"}>
        <Outlet />
      </Box>
    </Navigation>
  );
};

export default DefaultLayout;
