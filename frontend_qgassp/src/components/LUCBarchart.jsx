import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { LineLegend } from "./LineLegend";
import { Button } from "./Button";
// import { LandUseChangeTableForm } from "./LandUseChangeTableForm";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

/**
 * LUC barchart
 * @return {}
 */
 const [nextView, setNextView] = useState(false);

 export const LUCBarchart = ({
    user,
    onLogin,
    onLogout,
    onCreateAccount,
    landUseChangeResponse
  }) => {
       return (<h1>Hey</h1>);
  };

  LUCBarchart.propTypes = {
    landUseChangeResponse: PropTypes.object.isRequired,
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired
  };
  
  LUCBarchart.defaultProps = {
    user: null,
  };