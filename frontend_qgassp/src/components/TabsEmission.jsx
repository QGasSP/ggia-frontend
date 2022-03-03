import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router";

/**
 * Tabs for the different emission types
 * @return {}
 */

export const TabsEmission = () => {
  const [value, setValue] = useState("transport");
  // const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: "#003399",
        dark: "#101742",
      },
    },
  });

  const handleChange = (event, value) => {};

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor={theme.dark}
        indicatorColor={theme.secondary}
        aria-label="emission types"
      >
        <Tab value="start" label="Start" />
        <Tab value="transport" label="Transport" />
        <Tab value="land_use" label="Land-use" />
        <Tab value="buildings" label="Buildings" />
        <Tab value="consumption_based" label="Consumption-based" />
        <Tab value="local-data set" label="Create a local data-set" />
        <Tab value="local-data set" label="user guide" />
      </Tabs>
    </Box>
  );
};
