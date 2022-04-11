import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const CbBreadcrumb = () => {
  const handleAreaTypePop = (e) => {
    e.preventDefault();
    <Alert severity="info">
    clicked area type population
  </Alert>
  };

  const handleHouseholdEnergy = (e) => {
    e.preventDefault();
  };

  const handleTransportation = (e) => {
    e.preventDefault();
  };

  const handleResults = (e) => {
    e.preventDefault();
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      sx={{ fontSize: 14 }}
      // href="/"
      onClick={handleAreaTypePop}
    >
      Area type and population
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      sx={{ fontSize: 14 }}
      // href="/getting-started/installation/"
      onClick={handleHouseholdEnergy}
    >
      Household energy
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      sx={{ fontSize: 14 }}
      // href="/getting-started/installation/"
      onClick={handleTransportation}
    >
      Transportation
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      sx={{ fontSize: 14 }}
      // href="/getting-started/installation/"
      onClick={handleResults}
    >
      Result
    </Link>,
   /*  <Typography key="4" color="#003399" sx={{ fontSize: 14 }}>
      Result
    </Typography>, */
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
