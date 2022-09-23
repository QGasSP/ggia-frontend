 import React, { useEffect } from 'react';
 import { Formik, Form } from "formik";
 import urlPrefix from '../../Config';
 import axios from 'axios';
 import { localdatasetInitialValues } from './initialValuesLocaldataset';
 import {Grid, Button, TextField, Divider, Container, Alert, Box, Typography } from '@mui/material'
 import '../../css/localdataset.css'
 import { TimeToLeave, DirectionsBus, Subway, Tram, Train, BusinessOutlined } from '@mui/icons-material';
 import { makeStyles } from '@material-ui/styles';
 import BackToTop from'./BackToTopButton'  

 export const CreateLocaldataset = () => {
  const [error, setError] = React.useState()
  const [showvalues, setShowvalues] = React.useState()
  const [showTransport, setShowTransport] = React.useState(false)
  const [showTram, setShowTram] = React.useState(false)

  const submitNewEntry = async (values, initialValues) => {
    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    
    try {
        await axios.post(urlPrefix + "/api/v1/create/local-dataset", values, headers);
        setShowvalues(values)
           // eslint-disable-next-line no-console
        console.log(showvalues, "values", headers,"head", initialValues);      
      } catch (e) {
      if (axios.isAxiosError(e)) {
        // eslint-disable-next-line no-console
        console.error(e.response?.data || "Unrecognized axios error");
        setError(e.response?.data.error || "Unrecognized axios error");
      } else {
        // eslint-disable-next-line no-console
        console.error("Unknown error", e);
        setError("Unknown error");
      } 
    }
  };


    const useTheme = makeStyles({
      customTextField: {
        width: "12%",
        "& input::placeholder": {
          fontSize: "14px",
        },
        "& input::defaultValue": {
          color: "#D3D3D3"
        },
        "& label": {
          marginBottom: "33%",
          marginRight: "10%",
          fontSize:"17px",
          color:"black",
          "&.Mui-focused": {
            marginBottom: "33%",
            marginRight: "10%"
          }
        }
      }
    })

const classes = useTheme();

const handleShowTransportValues = () => {
  setShowTransport(prev => !prev)
}

const handleShowTrams = () => {
  setShowTram(prev => !prev)
}

  return (
    <Container maxWidth="xl">

     <div className='heading' id='back-to-top-anchor'>
        <h2>Create local dataset</h2>
    </div>
    <Box m={6}>
      <Alert severity='info'>
        <Typography variant="body1">
        Create local dataset shows country specific data as default. This is the data that is used by back end to calculate different modules in GGIA.
        <br/>
        You are able to modify this data either through indivudual sections: Energy, Transport, Land-use change and Buildings or you can edit the data as whole.
        <br/>
        Do not forget to save the data you entered and make sure to double check the data before submitting.
        </Typography>
      </Alert>
    </Box>

      <div id="links-to-modules">
        <a href='#energy-localdataset'>Energy</a>
        <a href='#transport-localdataset'>Transport</a>
        <a href='#luc-localdataset'>Land-use change</a>
        <a href='#buildings-localdataset'>Buildings</a>
      </div>

     <Formik
      enableReinitialize
      initialValues={localdatasetInitialValues}
      onSubmit={submitNewEntry}
      validate={ values => {
        

        const errors = {};
        const requiredError = "Field is required";

        if(!values.dataset_name){
          errors.dataset_name = requiredError
        }

        return errors;
      }}
    >
      {({ isValid, dirty, initialValues }) => {
        return (
          <Form className="create-localdataset">

          <h5>Dataset name</h5>
           
            <TextField
              placeholder="Enter name"
              label="Dataset name"
              name="dataset_name"
              defaultValue={initialValues['local-dataset']['dataset_name']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Expected annual change of population % (decades)
            </h5>
            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_population--2021-30"
              defaultValue= {initialValues['local-dataset']['annual_change_population--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_population--2031-40"
              defaultValue= {initialValues['local-dataset']['annual_change_population--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            
            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_population--2041-50"
              defaultValue= {initialValues['local-dataset']['annual_change_population--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
          <Divider sx={{m: 3}}/>

            <h4 id='energy-localdataset'>
              Energy
            </h4>

            <h5>Grid electricity emission factor (kgCO2e/kWh)</h5>
            
            <TextField
              label="GE emission factor"
              placeholder="kgCO2e/kWh"
              name="grid_electricity_emission_factor"
              defaultValue= {initialValues['local-dataset']['grid_electricity_emission_factor']}
              sx={{ m: 2, width: "12%" }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Annual change of grid electricity efficiency % (decades)</h5>
              
              <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_grid_electricity_ef--2021-30"
              defaultValue= {initialValues['local-dataset']['annual_change_grid_electricity_ef--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

              <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_grid_electricity_ef--2031-40"
              defaultValue= {initialValues['local-dataset']['annual_change_grid_electricity_ef--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_grid_electricity_ef--2041-50"
              defaultValue= {initialValues['local-dataset']['annual_change_grid_electricity_ef--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>District heating emission factor</h5>

            <TextField
              label="gCO2/kWh"
              placeholder="gCO2/kWh"
              name="district_heating_emission_factor"
              defaultValue= {initialValues['local-dataset']['district_heating_emission_factor']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Annual change of district electricity efficiency (decades)</h5>
              
              <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_district_electricity_ef--2021-30"
              defaultValue= {initialValues['local-dataset']['annual_change_district_electricity_ef--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

              <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_district_electricity_ef--2031-40"
              defaultValue= {initialValues['local-dataset']['annual_change_district_electricity_ef--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_district_electricity_ef--2041-50"
              defaultValue= {initialValues['local-dataset']['annual_change_district_electricity_ef--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
          <Divider sx={{m: 3}}/>
            <h4 id='transport-localdataset'>Transport: bus {" "}
              <DirectionsBus/>
            </h4>
            <h5>Passenger km per capita bus</h5>

            <TextField
              label="Pkm/(capita, a)"
              placeholder="pkm/(capita, a)"
              name="passenger-km_per_capita_bus"
              defaultValue={initialValues['local-dataset']['passenger-km_per_capita_bus']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate bus</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="Passengers/ vehicle"
              name="occupancy_rate_bus"
              defaultValue={initialValues['local-dataset']['occupancy_rate_bus']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            
          
          <br/>

            <h5>Annual change bus</h5>

            <TextField
              label="2020-30"
              placeholder="%"
              name="annual_change_bus--2020-30"
              defaultValue={initialValues['local-dataset']['annual_change_bus--2020-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2030-40"
              placeholder="%"
              name="annual_change_bus--2030-40"
              defaultValue={initialValues['local-dataset']['annual_change_bus--2030-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2040-50"
              placeholder="%"
              name="annual_change_bus--2040-50"
              defaultValue={initialValues['local-dataset']['annual_change_bus--2040-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <br/>

            <h5>Propulsion share % bus</h5>

            <TextField
              label="Petrol"
              placeholder="%"
              name="propulsion_share_bus--petrol"
              defaultValue={initialValues['local-dataset']['propulsion_share_bus--petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lpg"
              placeholder="%"
              name="propulsion_share_bus--lpg"
              defaultValue={initialValues['local-dataset']['propulsion_share_bus--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="%"
              name="propulsion_share_bus--diesel"
              defaultValue={initialValues['local-dataset']['propulsion_share_bus--diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Cng"
              placeholder="%"
              name="propulsion_share_bus--cng"
              defaultValue={initialValues['local-dataset']['propulsion_share_bus--cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Electricity"
              placeholder="%"
              name="propulsion_share_bus--electricity"
              defaultValue={initialValues['local-dataset']['propulsion_share_bus--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Control factor, bus</h5>
            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_bus--metropolitan"
              defaultValue={initialValues['local-dataset']['cf_bus--metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_bus--city"
              defaultValue={initialValues['local-dataset']['cf_bus--city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="cf_bus--suburban"
              defaultValue={initialValues['local-dataset']['cf_bus--suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="cf_bus--town"
              defaultValue={initialValues['local-dataset']['cf_bus--town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="cf_bus--rural"
              defaultValue={initialValues['local-dataset']['cf_bus--rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Fuel shares of street driving bus (gCO2e/vkm)</h5>

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus--petrol"
              defaultValue={initialValues['local-dataset']['ef_street_driving_bus--petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus--lpg"
               defaultValue={initialValues['local-dataset']['ef_street_driving_bus--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus--diesel"
               defaultValue={initialValues['local-dataset']['ef_street_driving_bus--diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus--cng"
              defaultValue={initialValues['local-dataset']['ef_street_driving_bus--cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="kWh/vkm"
              name="electricity_consumption_street_driving_bus--electricity"
              defaultValue={initialValues['local-dataset']['electricity_consumption_street_driving_bus--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Fuel shares road driving bus (gCO2e/vkm)</h5>

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus--petrol"
              defaultValue={initialValues['local-dataset']['ef_road_driving_bus--petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus--lpg"
              defaultValue={initialValues['local-dataset']['ef_road_driving_bus--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus--diesel"
              defaultValue={initialValues['local-dataset']['ef_road_driving_bus--diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus--cng"
              defaultValue={initialValues['local-dataset']['ef_road_driving_bus--cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="kWh/vkm"
              name="electricity_consumption_road_driving_bus--electricity"
              defaultValue={initialValues['local-dataset']['electricity_consumption_road_driving_bus--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Projected share % of electric buses every 5 years</h5>

            <TextField
              label="2020"
              placeholder="%"
              name="share_of_electric_buses--2020"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2020']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2025"
              placeholder="%"
              name="share_of_electric_buses--2025"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2025']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2030"
              placeholder="%"
              name="share_of_electric_buses--2030"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2030']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2035"
              placeholder="%"
              name="share_of_electric_buses--2035"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2035']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2040"
              placeholder="%"
              name="share_of_electric_buses--2040"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2040']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2045"
              placeholder="%"
              name="share_of_electric_buses--2045"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2045']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2050"
              placeholder="%"
              name="share_of_electric_buses--2050"
              defaultValue={initialValues['local-dataset']['share_of_electric_buses--2050']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Share % of road driving buses according to area</h5>

            <TextField
              label="Metropolitan center"
              placeholder="%"
              name="share_road_driving_buses--metropolitan_center"
              defaultValue={initialValues['local-dataset']['share_road_driving_buses--metropolitan_center']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Urban"
              placeholder="%"
              name="share_road_driving_buses--urban"
              defaultValue={initialValues['local-dataset']['share_road_driving_buses--urban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="share_road_driving_buses--suburban"
              defaultValue={initialValues['local-dataset']['share_road_driving_buses--suburban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="share_road_driving_buses--town"
              defaultValue={initialValues['local-dataset']['share_road_driving_buses--town']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="share_road_driving_buses--rural"
              defaultValue={initialValues['local-dataset']['share_road_driving_buses--rural']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <Divider  sx={{m: 3}}/>
            <h4>
              Transport: Car
              <TimeToLeave/>
            </h4>
            
            <h5>Passenger car km per capita</h5>

            <TextField
              label="pkm/(capita, a)"
              placeholder="pkm/(capita, a)"
              name="passenger-km_per_capita_car"
              defaultValue={initialValues['local-dataset']['passenger-km_per_capita_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate car</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="Passengers/ vehicle"
              name="occupancy_rate_car"
              defaultValue={initialValues['local-dataset']['occupancy_rate_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
          
            <h5>Annual change car (decades)</h5>

            <TextField
              label="2021-31"
              placeholder="%"
              name="annual_change_car--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_car--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-41"
              placeholder="%"
              name="annual_change_car--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_car--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_car--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_car--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          
          <br/>

            <h5>Ef car (gCO2e/vkm)</h5>

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_diesel_car"
              defaultValue={initialValues['local-dataset']['ef_diesel_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_petrol_car"
              defaultValue={initialValues['local-dataset']['ef_petrol_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Propulsion share % car</h5>

            <TextField
              label="Lpg"
              placeholder="%"
              name="propulsion_share_car--lpg"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cpg"
              placeholder="Cpg"
              name="propulsion_share_car--cpg"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--cpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Ngv"
              placeholder="Ngv"
              name="propulsion_share_car--ngv"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--ngv']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="%"
              name="propulsion_share_car--petrol"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-petrol"
              placeholder="%"
              name="propulsion_share_car--hybrid_electric-petrol"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--hybrid_electric-petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol phev"
              placeholder="%"
              name="propulsion_share_car--petrol_phev"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--petrol_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="%"
              name="propulsion_share_car--diesel"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-diesel"
              placeholder="%"
              name="propulsion_share_car--hybrid_electric-diesel"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--hybrid_electric-diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel phev"
              placeholder="%"
              name="propulsion_share_car--diesel_phev"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--diesel_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hydrogen fuel cell"
              placeholder="%"
              name="propulsion_share_car--hydrogen_fuel-cell"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--hydrogen_fuel-cell']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="%"
              name="propulsion_share_car--bioethanol"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Biodiesel"
              placeholder="%"
              name="propulsion_share_car--biodiesel"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bi-fiel"
              placeholder="%"
              name="propulsion_share_car--bi-fuel"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--bi-fuel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Other"
              placeholder="%"
              name="propulsion_share_car--other"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--other']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bev"
              placeholder="%"
              name="propulsion_share_car--bev"
              defaultValue={initialValues['local-dataset']['propulsion_share_car--bev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          
          <br/>

            <h5>Ef street driving car (gCO2e/vkm)</h5>

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--lpg"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--cpg"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--cpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Ngv"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--ngv"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--ngv']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--petrol"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-petrol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--hybrid_electric-petrol"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--hybrid_electric-petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol phev"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--petrol_phev"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--petrol_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--diesel"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-diesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--hybrid_electric-diesel"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--hybrid_electric-diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel phev"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--diesel_phev"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--diesel_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hydrogen fuel cell"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--hydrogen_fuel-cell"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--hydrogen_fuel-cell']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--bioethanol"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--biodiesel"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bi-fiel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--bi-fuel"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--bi-fuel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Other"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car--other"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--other']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bev"
              placeholder="KWh/vkm"
              name="ef_street_driving_car--bev"
              defaultValue={initialValues['local-dataset']['ef_street_driving_car--bev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Ef road driving car (gCO2e/vkm)</h5>

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--lpg"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--cpg"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--cpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Ngv"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--ngv"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--ngv']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--petrol"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-petrol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--hybrid_electric-petrol"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--hybrid_electric-petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol phev"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--petrol_phev"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--petrol_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--diesel"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-diesel"
              placeholder="HgCO2e/vkm"
              name="ef_road_driving_car--hybrid_electric-diesel"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--hybrid_electric-diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel phev"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--diesel_phev"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hydrogen fuel cell"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--hydrogen_fuel-cell"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--hydrogen_fuel-cell']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--bioethanol"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--biodiesel"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bi-fiel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--bi-fuel"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--bi-fuel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Other"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car--other"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--other']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bev"
              placeholder="KWh/vkm"
              name="ef_road_driving_car--bev"
              defaultValue={initialValues['local-dataset']['ef_road_driving_car--bev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
            <h5>Control factor, car</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_car--metropolitan"
              defaultValue={initialValues['local-dataset']['cf_car--metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_car--city"
              defaultValue={initialValues['local-dataset']['cf_car--city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_car--suburban"
              defaultValue={initialValues['local-dataset']['cf_car--suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_car--town"
              defaultValue={initialValues['local-dataset']['cf_car--town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_car--rural"
              defaultValue={initialValues['local-dataset']['cf_car--rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
            
            <h5>Share %: road driving car</h5>

            <TextField
              label="Metropolitan center"
              placeholder="%"
              name="share_road_driving_car--metropolitan_center"
              defaultValue={initialValues['local-dataset']['share_road_driving_car--metropolitan_center']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Urban"
              placeholder="%"
              name="cf_carshare_road_driving_car--urban"
              defaultValue={initialValues['local-dataset']['share_road_driving_car--urban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="cf_carshare_road_driving_car--suburban"
              defaultValue={initialValues['local-dataset']['share_road_driving_car--suburban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="cf_carshare_road_driving_car--town"
              defaultValue={initialValues['local-dataset']['share_road_driving_car--town']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="cf_carshare_road_driving_car--rural"
              defaultValue={initialValues['local-dataset']['share_road_driving_car--rural']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
            <Divider sx={{m: 2}}/>
            <h4>
              Transport: Metro
              <Subway/>
            </h4>

            <h5>Passenger km per capita, metro</h5>

            <TextField
              label="Pkm/(capita, a)"
              placeholder="pkm/(capita, a)"
              name="passenger-km_per_capita_metro"
              defaultValue={initialValues['local-dataset']['passenger-km_per_capita_metro']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Occupancy rate, metro</h5>

            <TextField
              label="Occupancy rate"
              placeholder="passengers/ vehicle"
              name="occupancy_rate_metro"
              defaultValue={initialValues['local-dataset']['occupancy_rate_metro']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Electricity consumption metro</h5>

            <TextField
              label="kWh /vkm"
              placeholder="kWh /vkm"
              name="electricity_consumption_metro"
              defaultValue={initialValues['local-dataset']['electricity_consumption_metro']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change metro (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_metro--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_metro--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_metro--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_metro--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_metro--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_metro--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
            <h5>Metro (million pkm/a)</h5>

            {initialValues['local-dataset']['metro--1'] !== "-" &&
            <TextField
              label="Metro 1"
              placeholder="Metro 1"
              name="metro--1"
              defaultValue={initialValues['local-dataset']['metro--1']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

            {initialValues['local-dataset']['metro--2'] !== "-" &&
            <TextField
              label="Metro 2"
              placeholder="Metro 2"
              name="metro--2"
              defaultValue={initialValues['local-dataset']['metro--2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

           {initialValues['local-dataset']['metro--3'] !== "-" &&
            <TextField
              label="Metro 3"
              placeholder="Metro 3"
              name="metro--3"
              defaultValue={initialValues['local-dataset']['metro--3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }


          {initialValues['local-dataset']['metro--4'] !== "-" &&
            <TextField
              label="Metro 4"
              placeholder="Metro 4"
              name="metro--4"
              defaultValue={initialValues['local-dataset']['metro--4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['metro--5'] !== "-" &&
            <TextField
              label="Metro 5"
              placeholder="Metro 5"
              name="metro--5"
              defaultValue={initialValues['local-dataset']['metro--5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

           {initialValues['local-dataset']['metro--6'] !== "-" &&
            <TextField
              label="Metro 6"
              placeholder="Metro 6"
              name="metro--6"
              defaultValue={initialValues['local-dataset']['metro--6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

           {initialValues['local-dataset']['metro--7'] !== "-" &&
            <TextField
              label="Metro 7"
              placeholder="Metro 7"
              name="metro--7"
              defaultValue={initialValues['local-dataset']['metro--7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}

            />
            }
          <br/>

            <h5>Transport activity (pkm/a)</h5>

          {initialValues['local-dataset']['transport_activity_metro--pkm/a'] !== 0 &&
            <TextField
              label="1. metro pkm/a"
              placeholder="1. metro pkm/a"
              name="transport_activity_metro--pkm/a"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--pkm/a']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local-dataset']['transport_activity_metro--metro_2'] !== 0 &&
             <TextField
              label="2. metro pkm/a"
              placeholder="2. metro pkm/a"
              name="transport_activity_metro--metro_2"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--metro_2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local-dataset']['transport_activity_metro--metro_3'] !== 0 &&
            <TextField
              label="3. metro pkm/a"
              placeholder="3. metro pkm/a"
              name="transport_activity_metro--metro_3"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--metro_3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local-dataset']['transport_activity_metro--metro_4'] !== 0 &&
            <TextField
              label="4. metro pkm/a"
              placeholder="4. metro pkm/a"
              name="transport_activity_metro--metro_4"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--metro_4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local-dataset']['transport_activity_metro--metro_5'] !== 0 &&
            <TextField
              label="5. metro pkm/a"
              placeholder="5. metro pkm/a"
              name="transport_activity_metro--metro_5"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--metro_5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['transport_activity_metro--metro_6'] !== 0 &&
            <TextField
              label="6. metro pkm/a"
              placeholder="6. metro pkm/a"
              name="transport_activity_metro--metro_6"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--metro_6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['transport_activity_metro--metro_7'] !== 0 &&
            <TextField
              label="7. metro pkm/a"
              placeholder="7. metro pkm/a"
              name="transport_activity_metro--metro_7"
              defaultValue={initialValues['local-dataset']['transport_activity_metro--metro_7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

            <Divider sx={{m: 2}}/>
            <h4>
              Transport: Tram
              <Tram/>
            </h4>

          <br/>

            <h5>Passenger km per capita</h5>

            <TextField
              label="Pkm/ (capita, a)"
              placeholder="pkm/ (capita, a)"
              name="passenger-km_per_capita_tram"
              defaultValue={initialValues['local-dataset']['passenger-km_per_capita_tram']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="passengers/ vehicle"
              name="occupancy_rate_tram"
              defaultValue={initialValues['local-dataset']['occupancy_rate_tram']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Electricity consumption</h5>

            <TextField
              label="kWh/vkm"
              placeholder="kWh/vkm"
              name="electricity_consumption_tram"
              defaultValue={initialValues['local-dataset']['electricity_consumption_tram']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual chnage %, tram (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_tram--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_tram--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_tram--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_tram--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_tram--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_tram--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Trams each</h5>

          {initialValues['local-dataset']['tram--1'] !== "-" &&
            <TextField
              label="Tram 1"
              placeholder="Tram 1"
              name="tram--1"
              defaultValue={initialValues['local-dataset']['tram--1']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--2'] !== "-" &&
            <TextField
              label="Tram 2"
              placeholder="Tram 2"
              name="tram--2"
              defaultValue={initialValues['local-dataset']['tram--2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--3'] !== "-" &&
            <TextField
              label="Tram 3"
              placeholder="Tram 3"
              name="tram--3"
              defaultValue={initialValues['local-dataset']['tram--3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--4'] !== "-" &&
            <TextField
              label="Tram 4"
              placeholder="Tram 4"
              name="tram--4"
              defaultValue={initialValues['local-dataset']['tram--4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--5'] !== "-" &&
            <TextField
              label="Tram 5"
              placeholder="Tram 5"
              name="tram--5"
              defaultValue={initialValues['local-dataset']['tram--5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--6'] !== "-" &&
            <TextField
              label="Tram 6"
              placeholder="Tram 6"
              name="tram--6"
              defaultValue={initialValues['local-dataset']['tram--6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--7'] !== "-" &&
            <TextField
              label="Tram 7"
              placeholder="Tram 7"
              name="tram--7"
              defaultValue={initialValues['local-dataset']['tram--7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--8'] !== "-" &&
            <TextField
              label="Tram 8"
              placeholder="Tram 8"
              name="tram--8"
              defaultValue={initialValues['local-dataset']['tram--8']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--9'] !== "-" &&
            <TextField
              label="Tram 9"
              placeholder="Tram 9"
              name="tram--9"
              defaultValue={initialValues['local-dataset']['tram--9']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--10'] !== "-" &&
            <TextField
              label="Tram 10"
              placeholder="Tram 10"
              name="tram--10"
              defaultValue={initialValues['local-dataset']['tram--10']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--11'] !== "-" &&
            <TextField
              label="Tram 11"
              placeholder="Tram 11"
              name="tram--11"
              defaultValue={initialValues['local-dataset']['tram--11']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--12'] !== "-" &&
            <TextField
              label="Tram 12"
              placeholder="Tram 12"
              name="tram--12"
              defaultValue={initialValues['local-dataset']['tram--12']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--13'] !== "-" &&
            <TextField
              label="Tram 13"
              placeholder="Tram 13"
              name="tram--13"
              defaultValue={initialValues['local-dataset']['tram--13']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--14'] !== "-" &&
            <TextField
              label="Tram 14"
              placeholder="Tram 14"
              name="tram--14"
              defaultValue={initialValues['local-dataset']['tram--14']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--15'] !== "-" &&
            <TextField
              label="Tram 15"
              placeholder="Tram 15"
              name="tram--15"
              defaultValue={initialValues['local-dataset']['tram--15']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--16'] !== "-" &&
            <TextField
              label="Tram 16"
              placeholder="Tram 16"
              name="tram--16"
              defaultValue={initialValues['local-dataset']['tram--16']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--17'] !== "-" &&
            <TextField
              label="Tram 17"
              placeholder="Tram 17"
              name="tram--17"
              defaultValue={initialValues['local-dataset']['tram--17']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--18'] !== "-" &&
            <TextField
              label="Tram 18"
              placeholder="Tram 18"
              name="tram--18"
              defaultValue={initialValues['local-dataset']['tram--18']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--19'] !== "-" &&
            <TextField
              label="Tram 19"
              placeholder="Tram 19"
              name="tram--19"
              defaultValue={initialValues['local-dataset']['tram--19']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--20'] !== "-" &&
            <TextField
              label="Tram 20"
              placeholder="Tram 20"
              name="tram--20"
              defaultValue={initialValues['local-dataset']['tram--20']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--21'] !== "-" &&
            <TextField
              label="Tram 21"
              placeholder="Tram 21"
              name="tram--21"
              defaultValue={initialValues['local-dataset']['tram--21']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--22'] !== "-" &&
            <TextField
              label="Tram 22"
              placeholder="Tram 22"
              name="tram--22"
              defaultValue={initialValues['local-dataset']['tram--22']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--23'] !== "-" &&
            <TextField
              label="Tram 23"
              placeholder="Tram 23"
              name="tram--23"
              defaultValue={initialValues['local-dataset']['tram--23']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--24'] !== "-" &&
            <TextField
              label="Tram 24"
              placeholder="Tram 24"
              name="tram--24"
              defaultValue={initialValues['local-dataset']['tram--24']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--25'] !== "-" &&
            <TextField
              label="Tram 25"
              placeholder="Tram 25"
              name="tram--25"
              defaultValue={initialValues['local-dataset']['tram--25']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--26'] !== "-" &&
            <TextField
              label="Tram 26"
              placeholder="Tram 26"
              name="tram--26"
              defaultValue={initialValues['local-dataset']['tram--26']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--27'] !== "-" &&
            <TextField
              label="Tram 27"
              placeholder="Tram 27"
              name="tram--27"
              defaultValue={initialValues['local-dataset']['tram--27']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--28'] !== "-" &&
            <TextField
              label="Tram 28"
              placeholder="Tram 28"
              name="tram--28"
              defaultValue={initialValues['local-dataset']['tram--28']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--29'] !== "-" &&
            <TextField
              label="Tram 29"
              placeholder="Tram 29"
              name="tram--29"
              defaultValue={initialValues['local-dataset']['tram--29']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--30'] !== "-" &&
            <TextField
              label="Tram 30"
              placeholder="Tram 30"
              name="tram--30"
              defaultValue={initialValues['local-dataset']['tram--30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--31'] !== "-" &&
            <TextField
              label="Tram 31"
              placeholder="Tram 31"
              name="tram--31"
              defaultValue={initialValues['local-dataset']['tram--31']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--32'] !== "-" &&
            <TextField
              label="Tram 32"
              placeholder="Tram 32"
              name="tram--32"
              defaultValue={initialValues['local-dataset']['tram--32']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--33'] !== "-" &&
            <TextField
              label="Tram 33"
              placeholder="Tram 33"
              name="tram--33"
              defaultValue={initialValues['local-dataset']['tram--33']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--34'] !== "-" &&
            <TextField
              label="Tram 34"
              placeholder="Tram 34"
              name="tram--34"
              defaultValue={initialValues['local-dataset']['tram--34']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--35'] !== "-" &&
            <TextField
              label="Tram 35"
              placeholder="Tram 35"
              name="tram--35"
              defaultValue={initialValues['local-dataset']['tram--35']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--36'] !== "-" &&
            <TextField
              label="Tram 36"
              placeholder="Tram 36"
              name="tram--36"
              defaultValue={initialValues['local-dataset']['tram--36']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--37'] !== "-" &&
            <TextField
              label="Tram 37"
              placeholder="Tram 37"
              name="tram--37"
              defaultValue={initialValues['local-dataset']['tram--37']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--38'] !== "-" &&
            <TextField
              label="Tram 38"
              placeholder="Tram 38"
              name="tram--38"
              defaultValue={initialValues['local-dataset']['tram--38']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--39'] !== "-" &&
            <TextField
              label="Tram 39"
              placeholder="Tram 39"
              name="tram--39"
              defaultValue={initialValues['local-dataset']['tram--39']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--40'] !== "-" &&
            <TextField
              label="Tram 40"
              placeholder="Tram 40"
              name="tram--40"
              defaultValue={initialValues['local-dataset']['tram--40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--41'] !== "-" &&
            <TextField
              label="Tram 41"
              placeholder="Tram 41"
              name="tram--41"
              defaultValue={initialValues['local-dataset']['tram--41']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--42'] !== "-" &&
            <TextField
              label="Tram 42"
              placeholder="Tram 42"
              name="tram--42"
              defaultValue={initialValues['local-dataset']['tram--42']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--43'] !== "-" &&
            <TextField
              label="Tram 43"
              placeholder="Tram 43"
              name="tram--43"
              defaultValue={initialValues['local-dataset']['tram--43']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--44'] !== "-" &&
            <TextField
              label="Tram 44"
              placeholder="Tram 44"
              name="tram--44"
              defaultValue={initialValues['local-dataset']['tram--44']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--45'] !== "-" &&
            <TextField
              label="Tram 45"
              placeholder="Tram 45"
              name="tram--45"
              defaultValue={initialValues['local-dataset']['tram--45']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--46'] !== "-" &&
            <TextField
              label="Tram 46"
              placeholder="Tram 46"
              name="tram--46"
              defaultValue={initialValues['local-dataset']['tram--46']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--47'] !== "-" &&
            <TextField
              label="Tram 47"
              placeholder="Tram 47"
              name="tram--47"
              defaultValue={initialValues['local-dataset']['tram--47']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--48'] !== "-" &&
            <TextField
              label="Tram 48"
              placeholder="Tram 48"
              name="tram--48"
              defaultValue={initialValues['local-dataset']['tram--48']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--49'] !== "-" &&
            <TextField
              label="Tram 49"
              placeholder="Tram 49"
              name="tram--49"
              defaultValue={initialValues['local-dataset']['tram--49']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--50'] !== "-" &&
            <TextField
              label="Tram 50"
              placeholder="Tram 50"
              name="tram--50"
              defaultValue={initialValues['local-dataset']['tram--50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--51'] !== "-" &&
            <TextField
              label="Tram 51"
              placeholder="Tram 51"
              name="tram--51"
              defaultValue={initialValues['local-dataset']['tram--51']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--52'] !== "-" &&
            <TextField
              label="Tram 52"
              placeholder="Tram 52"
              name="tram--52"
              defaultValue={initialValues['local-dataset']['tram--52']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--53'] !== "-" &&
            <TextField
              label="Tram 53"
              placeholder="Tram 53"
              name="tram--53"
              defaultValue={initialValues['local-dataset']['tram--53']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--54'] !== "-" &&
            <TextField
              label="Tram 54"
              placeholder="Tram 54"
              name="tram--54"
              defaultValue={initialValues['local-dataset']['tram--54']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--55'] !== "-" &&
            <TextField
              label="Tram 55"
              placeholder="Tram 55"
              name="tram--55"
              defaultValue={initialValues['local-dataset']['tram--55']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--56'] !== "-" &&
            <TextField
              label="Tram 56"
              placeholder="Tram 56"
              name="tram--56"
              defaultValue={initialValues['local-dataset']['tram--56']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--57'] !== "-" &&
            <TextField
              label="Tram 57"
              placeholder="Tram 57"
              name="tram--57"
              defaultValue={initialValues['local-dataset']['tram--57']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local-dataset']['tram--58'] !== "-" &&
            <TextField
              label="Tram 58"
              placeholder="Tram 58"
              name="tram--58"
              defaultValue={initialValues['local-dataset']['tram--58']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

            

            <h5>Tram transport activity</h5>

            <button type="button" onClick={handleShowTransportValues}>click</button>
            
            {initialValues['local-dataset']['transport_activity_tram--tram_1'] !== 0 &&

              <TextField
                label="Trans. activity: Tram 1"
                placeholder="million pkm/a Tram 1"
                name="transport_activity_tram--tram_1"
                sx={{ m:2 }}
                defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_1']}
                InputLabelProps={{ shrink: true }}
                classes={{ root: classes.customTextField }}
              />

            }
            {initialValues['local-dataset']['transport_activity_tram--tram_2'] !== 0 &&
             <TextField
              label="Trans. activity: Tram 2"
              placeholder="million pkm/a Tram 2"
              name="transport_activity_tram--tram_2"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />}

          {initialValues['local-dataset']['transport_activity_tram--tram_3'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 3"
              placeholder="million pkm/a Tram 3"
              name="transport_activity_tram--tram_3"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_4'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 4"
              placeholder="million pkm/a Tram 4"
              name="transport_activity_tram--tram_4"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_5'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 5"
              placeholder="million pkm/a Tram 5"
              name="transport_activity_tram--tram_5"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_6'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 6"
              placeholder="million pkm/a Tram 6"
              name="transport_activity_tram--tram_6"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_7'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 7"
              placeholder="million pkm/a Tram 7"
              name="transport_activity_tram--tram_7"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_8'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 8"
              placeholder="million pkm/a Tram 8"
              name="transport_activity_tram--tram_8"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_8']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_9'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 9"
              placeholder="million pkm/a Tram 9"
              name="transport_activity_tram--tram_9"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_9']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_10'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 10"
              placeholder="million pkm/a Tram 10"
              name="transport_activity_tram--tram_10"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_10']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_11'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 11"
              placeholder="million pkm/a Tram 11"
              name="transport_activity_tram--tram_11"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_11']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_12'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 12"
              placeholder="million pkm/a Tram 12"
              name="transport_activity_tram--tram_12"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_12']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_13'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 13"
              placeholder="million pkm/a Tram 13"
              name="transport_activity_tram--tram_13"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_13']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_14'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 14"
              placeholder="million pkm/a Tram 14"
              name="transport_activity_tram--tram_14"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_14']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_15'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 15"
              placeholder="million pkm/a Tram 15"
              name="transport_activity_tram--tram_15"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_15']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_16'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 16"
              placeholder="million pkm/a Tram 16"
              name="transport_activity_tram--tram_16"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_16']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_17'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 17"
              placeholder="million pkm/a Tram 17"
              name="transport_activity_tram--tram_17"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_17']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_18'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 18"
              placeholder="million pkm/a Tram 18"
              name="transport_activity_tram--tram_18"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_18']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_19'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 19"
              placeholder="million pkm/a Tram 19"
              name="transport_activity_tram--tram_19"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_19']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_20'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 20"
              placeholder="million pkm/a Tram 20"
              name="transport_activity_tram--tram_20"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_20']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_21'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 21"
              placeholder="million pkm/a Tram 21"
              name="transport_activity_tram--tram_21"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_21']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_22'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 22"
              placeholder="million pkm/a Tram 22"
              name="transport_activity_tram--tram_22"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_22']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_23'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 23"
              placeholder="million pkm/a Tram 23"
              name="transport_activity_tram--tram_23"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_23']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_24'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 24"
              placeholder="million pkm/a Tram 24"
              name="transport_activity_tram--tram_24"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_24']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_25'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 25"
              placeholder="million pkm/a Tram 25"
              name="transport_activity_tram--tram_25"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_25']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_26'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 26"
              placeholder="million pkm/a Tram 26"
              name="transport_activity_tram--tram_26"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_26']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_27'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 27"
              placeholder="million pkm/a Tram 27"
              name="transport_activity_tram--tram_27"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_27']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_28'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 28"
              placeholder="million pkm/a Tram 28"
              name="transport_activity_tram--tram_28"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_28']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_29'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 29"
              placeholder="million pkm/a Tram 29"
              name="transport_activity_tram--tram_29"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_29']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_30'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 30"
              placeholder="million pkm/a Tram 30"
              name="transport_activity_tram--tram_30"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_31'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 31"
              placeholder="million pkm/a Tram 31"
              name="transport_activity_tram--tram_31"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_31']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_32'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 32"
              placeholder="million pkm/a Tram 32"
              name="transport_activity_tram--tram_32"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_32']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_33'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 33"
              placeholder="million pkm/a Tram 33"
              name="transport_activity_tram--tram_33"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_33']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_34'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 34"
              placeholder="million pkm/a Tram "
              name="transport_activity_tram--tram_34"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_34']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_35'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 35"
              placeholder="million pkm/a Tram 35"
              name="transport_activity_tram--tram_35"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_35']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_36'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 36"
              placeholder="million pkm/a Tram 36"
              name="transport_activity_tram--tram_36"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_36']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_37'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 37"
              placeholder="million pkm/a Tram 37"
              name="transport_activity_tram--tram_37"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_37']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_38'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 38"
              placeholder="million pkm/a Tram 38"
              name="transport_activity_tram--tram_38"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_38']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_39'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 39"
              placeholder="million pkm/a Tram 39"
              name="transport_activity_tram--tram_"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_39']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_40'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 40"
              placeholder="million pkm/a Tram 40"
              name="transport_activity_tram--tram_40"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_41'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 41"
              placeholder="million pkm/a Tram 41"
              name="transport_activity_tram--tram_41"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_41']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_42'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 42"
              placeholder="million pkm/a Tram 42"
              name="transport_activity_tram--tram_42"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_42']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_43'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 43"
              placeholder="million pkm/a Tram 43"
              name="transport_activity_tram--tram_43"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_43']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_44'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 44"
              placeholder="million pkm/a Tram 44"
              name="transport_activity_tram--tram_44"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_44']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_45'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 45"
              placeholder="million pkm/a Tram 45"
              name="transport_activity_tram--tram_45"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_45']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_46'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 46"
              placeholder="million pkm/a Tram 46"
              name="transport_activity_tram--tram_46"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_46']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_47'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 47"
              placeholder="million pkm/a Tram 47"
              name="transport_activity_tram--tram_47"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_47']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_48'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 48"
              placeholder="million pkm/a Tram 48"
              name="transport_activity_tram--tram_48"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_48']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_49'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 49"
              placeholder="million pkm/a Tram 49"
              name="transport_activity_tram--tram_49"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_49']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_50'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 50"
              placeholder="million pkm/a Tram 50"
              name="transport_activity_tram--tram_50"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_51'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 51"
              placeholder="million pkm/a Tram 51"
              name="transport_activity_tram--tram_51"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_51']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_52'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 52"
              placeholder="million pkm/a Tram 52"
              name="transport_activity_tram--tram_52"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_52']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_53'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 53"
              placeholder="million pkm/a Tram 53"
              name="transport_activity_tram--tram_53"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_53']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_54'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 54"
              placeholder="million pkm/a Tram 54"
              name="transport_activity_tram--tram_54"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_54']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_55'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 55"
              placeholder="million pkm/a Tram 55"
              name="transport_activity_tram--tram_55"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_55']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_56'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 56"
              placeholder="million pkm/a Tram 56"
              name="transport_activity_tram--tram_56"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_56']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_57'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 57"
              placeholder="million pkm/a Tram 57"
              name="transport_activity_tram--tram_57"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_57']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local-dataset']['transport_activity_tram--tram_58'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 58"
              placeholder="million pkm/a Tram 58"
              name="transport_activity_tram--tram_58"
              defaultValue={initialValues['local-dataset']['transport_activity_tram--tram_58']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          

          <Divider sx={{m: 2}}/>
            <h4>
              Transport: Train
              <Train/>
            </h4>

            <h5>Train passenger km per capita</h5>

            <TextField
              label="Passenger km/ capita"
              placeholder="pkm/ capita"
              name="passenger-km_per_capita_train"
              defaultValue={initialValues['local-dataset']['passenger-km_per_capita_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="passengers/ vehicle"
              name="occupancy_rate_train"
              defaultValue={initialValues['local-dataset']['occupancy_rate_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef diesel train (gCO2e/train-km)</h5>

            <TextField
              label="Ef diesel train"
              placeholder="gCO2e/train-km"
              name="ef_diesel_train"
              defaultValue={initialValues['local-dataset']['ef_diesel_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Energy consumption electric train (kWh/train-km)</h5>

            <TextField
              label="Energy consumption"
              placeholder="kWh/train-km"
              name="energy_consumption_electric_train"
              defaultValue={initialValues['local-dataset']['energy_consumption_electric_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Share of electric engines %</h5>

            <TextField
              label="Electric engines"
              placeholder="%"
              name="share_of_electric_engines"
              defaultValue={initialValues['local-dataset']['share_of_electric_engines']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change %, passenger train (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_passenger_train--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_passenger_train--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_passenger_train--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_passenger_train--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_passenger_train--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_passenger_train--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Control factor, passenger train</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_passenger_train--metropolitan"
              defaultValue={initialValues['local-dataset']['cf_passenger_train--metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_passenger_train--city"
              defaultValue={initialValues['local-dataset']['cf_passenger_train--city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_passenger_train--suburban"
              defaultValue={initialValues['local-dataset']['cf_passenger_train--suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_passenger_train--town"
              defaultValue={initialValues['local-dataset']['cf_passenger_train--town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_passenger_train--rural"
              defaultValue={initialValues['local-dataset']['cf_passenger_train--rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          
          <Divider sx={{m:2}}/>

          <h4>Transport: Rail freight</h4>

            <h5>Vehicle km per capita, rail freight</h5>

            <TextField
              label="Vehicle km/capita"
              placeholder="vehicle-km/(capita, a)"
              name="vehicle-km_per_capita_rail_freight"
              defaultValue={initialValues['local-dataset']['vehicle-km_per_capita_rail_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef diesel (gCo2e/vkm), rail freight</h5>

            <TextField
              label="Diesel rail freight"
              placeholder="gCo2e/vkm"
              name="ef_diesel_rail_freight"
              defaultValue={initialValues['local-dataset']['ef_diesel_rail_freigh']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Energy consumption (kWh/vkm), electric rail freight</h5>

            <TextField
              label="Energy consmption"
              placeholder="kWh/vkm"
              name="energy_consumption_electric_rail_freight"
              defaultValue={initialValues['local-dataset']['energy_consumption_electric_rail_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change rail freight (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_rail_freight--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_rail_freight--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_rail_freight--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_rail_freight--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_rail_freight--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_rail_freight--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Correction factor, rail freight</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_rail_freight--metropolitan"
              defaultValue={initialValues['local-dataset']['cf_rail_freight--metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_rail_freight--city"
              defaultValue={initialValues['local-dataset']['cf_rail_freight--city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_rail_freight--suburban"
              defaultValue={initialValues['local-dataset']['cf_rail_freight--suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_rail_freight--town"
              defaultValue={initialValues['local-dataset']['cf_rail_freight--town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_rail_freight--rural"
              defaultValue={initialValues['local-dataset']['cf_rail_freight--rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Average load (tonnes), rail freight</h5>

            <TextField
              label="Average load"
              placeholder="Tonnes"
              name="average_load_rail_freight"
              defaultValue={initialValues['local-dataset']['average_load_rail_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <Divider sx={{m:2}}/>

            <h4>Transport: Road freight</h4>

            <h5>Vehicle km per capita, road freight</h5>

            <TextField
              label="vehicle-km/(capita, a)"
              placeholder="vehicle-km/(capita, a)"
              name="vehicle-km_per_capita_road_freight"
              defaultValue={initialValues['local-dataset']['vehicle-km_per_capita_road_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Road transport emission factor (gCO22/vkm)</h5>

            <TextField
              label="Emission factor"
              placeholder="gCO22/vkm"
              name="road_transport_emission_factor"
              defaultValue={initialValues['local-dataset']['road_transport_emission_factor']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change %, road freight (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_road_freight--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_road_freight--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_road_freight--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_road_freight--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_road_freight--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_road_freight--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Control factor, road freight</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_road_freight--metropolitan"
              defaultValue={initialValues['local-dataset']['cf_road_freight--metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_road_freight--city"
              defaultValue={initialValues['local-dataset']['cf_road_freight--city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_road_freight--suburban"
              defaultValue={initialValues['local-dataset']['cf_road_freight--suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_road_freight--town"
              defaultValue={initialValues['local-dataset']['cf_road_freight--town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_road_freight--rural"
              defaultValue={initialValues['local-dataset']['cf_road_freight--rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Propulsion share %, road freight</h5>

             <TextField
              label="Petrol including hybrids"
              placeholder="%"
              name="propulsion_share_road_freight--petrol_including_hybrids"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--petrol_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Lpg"
              placeholder="%"
              name="propulsion_share_road_freight--lpg"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel including hybrids"
              placeholder="%"
              name="propulsion_share_road_freight--diesel_including_hybrids"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--diesel_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Natural gas"
              placeholder="%"
              name="propulsion_share_road_freight--natural_gas"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--natural_gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="%"
              name="propulsion_share_road_freight--electricity"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Alternative energy"
              placeholder="%"
              name="propulsion_share_road_freight--alternative_energy"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--alternative_energy']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="%"
              name="propulsion_share_road_freight--bioethanol"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Biodiesel"
              placeholder="%"
              name="propulsion_share_road_freight--biodiesel"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="%"
              name="propulsion_share_road_freight--cng"
              defaultValue={initialValues['local-dataset']['propulsion_share_road_freight--cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef street driving, road freight (gCO2e/vkm)</h5>

            <TextField
              label="Petrol including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--petrol_including_hybrids"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--petrol_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--lpg"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--diesel_including_hybrids"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--diesel_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Natural gas"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--natural_gas"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--natural_gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--electricity"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Alternative energy"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--alternative_energy"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--alternative_energy']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--bioethanol"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--biodiesel"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight--cng"
              defaultValue={initialValues['local-dataset']['ef_street_driving_road_freight--cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef road driving, road freight (gCO2e/vkm)</h5>

            <TextField
              label="Petrol including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--petrol_including_hybrids"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--petrol_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--lpg"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--diesel_including_hybrids"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--diesel_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Natural gas"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--natural_gas"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--natural_gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--electricity"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Alternative energy"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--alternative_energy"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--alternative_energy']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--bioethanol"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--biodiesel"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight--cng"
              defaultValue={initialValues['local-dataset']['ef_road_driving_road_freight--cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Share %: road driving road fright</h5>

            <TextField
              label="Metropolitan center"
              placeholder="%"
              name="share_road_driving_road_freight--metropolitan_center"
              defaultValue={initialValues['local-dataset']['share_road_driving_road_freight--metropolitan_center']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Urban"
              placeholder="%"
              name="share_road_driving_road_freight--urban"
              defaultValue={initialValues['local-dataset']['share_road_driving_road_freight--urban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="share_road_driving_road_freight--suburban"
              defaultValue={initialValues['local-dataset']['share_road_driving_road_freight--suburban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="share_road_driving_road_freight--town"
              defaultValue={initialValues['local-dataset']['share_road_driving_road_freight--town']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="share_road_driving_road_freight--rural"
              defaultValue={initialValues['local-dataset']['share_road_driving_road_freight--rural']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Average load (tonnes), road freight</h5>

            <TextField
              label="Average load"
              placeholder="Tonnes"
              name="average_load_road_freight"
              defaultValue={initialValues['local-dataset']['average_load_road_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <Divider sx={{m:2}}/>

            <h4>
              Transport: Inland waterways
            </h4>

            <h5>Vehicle km per capita, waterways transport</h5>

            <TextField
              label="Vehicle km/ capita"
              placeholder="vehicle-km/(capita, a)"
              name="vehicle-km_per_capita_waterways_transport"
              defaultValue={initialValues['local-dataset']['vehicle-km_per_capita_waterways_transport']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef inland waterways (gCO2e/vkm)</h5>

            <TextField
              label="Ef inland waterways"
              placeholder="gCO2e/vkm"
              name="ef_inland_waterways"
              defaultValue={initialValues['local-dataset']['ef_inland_waterways']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change %, inland waterways (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_waterways_transport--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_waterways_transport--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_waterways_transport--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_waterways_transport--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_waterways_transport--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_waterways_transport--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Correction factor waterways transport</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_waterways_transport--metropolitan"
              defaultValue={initialValues['local-dataset']['cf_waterways_transport--metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_waterways_transport--city"
              defaultValue={initialValues['local-dataset']['cf_waterways_transport--city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_waterways_transport--suburban"
              defaultValue={initialValues['local-dataset']['cf_waterways_transport--suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_waterways_transport--town"
              defaultValue={initialValues['local-dataset']['cf_waterways_transport--town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_waterways_transport--rural"
              defaultValue={initialValues['local-dataset']['cf_waterways_transport--rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Average load, inland waterways</h5>

            <TextField
              label="Average load"
              placeholder="Tonnes"
              name="average_load_inland_waterways"
              defaultValue={initialValues['local-dataset']['average_load_inland_waterways']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Country land area</h5>

            <TextField
              label="Country land area"
              placeholder="Radius"
              name="country_land_area"
              defaultValue={initialValues['local-dataset']['country_land_area']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Factor inclusion</h5>

            <TextField
              label="Factor inclusion"
              placeholder="Factor inclusion"
              name="factor_inclusion"
              defaultValue={initialValues['local-dataset']['factor_inclusion']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change vehicle efficincy (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_vehicle_efficiency--2021-30"
              defaultValue={initialValues['local-dataset']['annual_change_vehicle_efficiency--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_vehicle_efficiency--2031-40"
              defaultValue={initialValues['local-dataset']['annual_change_vehicle_efficiency--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_vehicle_efficiency--2041-50"
              defaultValue={initialValues['local-dataset']['annual_change_vehicle_efficiency--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <Divider sx={{m:2}}/>

            <h4 id='luc-localdataset'>Land use change (LUC): Baseline</h4>

            <h5>LUC baseline: Forestland</h5>

             <TextField
              label="LUC Forestland"
              placeholder="tCO2e/a"
              name="land_use_baseline_forestland"
              defaultValue={initialValues['local-dataset']['land_use_baseline_forestland']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Forestland, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_forestland_annual_change--2021-30"
              defaultValue={initialValues['local-dataset']['land_use_baseline_forestland_annual_change--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_forestland_annual_change--2031-40"
              defaultValue={initialValues['local-dataset']['land_use_baseline_forestland_annual_change--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_forestland_annual_change--2041-50"
              defaultValue={initialValues['local-dataset']['land_use_baseline_forestland_annual_change--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Cropland</h5>

             <TextField
              label="LUC Cropland"
              placeholder="tCO2e/a"
              name="land_use_baseline_cropland"
              defaultValue={initialValues['local-dataset']['land_use_baseline_cropland']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Cropland, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_cropland_annual_change--2021-30"
              defaultValue={initialValues['local-dataset']['land_use_baseline_cropland_annual_change--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_cropland_annual_change--2031-40"
              defaultValue={initialValues['local-dataset']['land_use_baseline_cropland_annual_change--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_cropland_annual_change--2041-50"
              defaultValue={initialValues['local-dataset']['land_use_baseline_cropland_annual_change--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>LUC baseline: Grassland</h5>

             <TextField
              label="LUC Grassland"
              placeholder="tCO2e/a"
              name="land_use_baseline_grassland"
              defaultValue={initialValues['local-dataset']['land_use_baseline_grassland']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Grassland, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_grassland_annual_change--2021-30"
              defaultValue={initialValues['local-dataset']['land_use_baseline_grassland_annual_change--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_grassland_annual_change--2031-40"
              defaultValue={initialValues['local-dataset']['land_use_baseline_grassland_annual_change--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_grassland_annual_change--2041-50"
              defaultValue={initialValues['local-dataset']['land_use_baseline_grassland_annual_change--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Wetlands</h5>

             <TextField
              label="LUC Wetlands"
              placeholder="tCO2e/a"
              name="land_use_baseline_wetlands"
              defaultValue={initialValues['local-dataset']['land_use_baseline_wetlands']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Wetlands, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_wetlands_annual_change--2021-30"
              defaultValue={initialValues['local-dataset']['land_use_baseline_wetlands_annual_change--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_wetlands_annual_change--2031-40"
              defaultValue={initialValues['local-dataset']['land_use_baseline_wetlands_annual_change--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_wetlands_annual_change--2041-50"
              defaultValue={initialValues['local-dataset']['land_use_baseline_wetlands_annual_change--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Settlements</h5>

             <TextField
              label="LUC Settlements"
              placeholder="tCO2e/a"
              name="land_use_baseline_settlements"
              defaultValue={initialValues['local-dataset']['land_use_baseline_settlements']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Settlements, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_settlements_annual_change--2021-30"
              defaultValue={initialValues['local-dataset']['land_use_baseline_settlements_annual_change--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_settlements_annual_change--2031-40"
              defaultValue={initialValues['local-dataset']['land_use_baseline_settlements_annual_change--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_settlements_annual_change--2041-50"
              defaultValue={initialValues['local-dataset']['land_use_baseline_settlements_annual_change--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Other land</h5>

             <TextField
              label="LUC Other land"
              placeholder="tCO2e/a"
              name="land_use_baseline_other_land"
              defaultValue={initialValues['local-dataset']['land_use_baseline_other_land']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Other land, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_other_land_annual_change--2021-30"
              defaultValue={initialValues['local-dataset']['land_use_baseline_other_land_annual_change--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_other_land_annual_change--2031-40"
              defaultValue={initialValues['local-dataset']['land_use_baseline_other_land_annual_change--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_other_land_annual_change--2041-50"
              defaultValue={initialValues['local-dataset']['land_use_baseline_other_land_annual_change--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <Divider sx={{m:2}}/>

            <h4>LUC: Carbon stock change factors (t C/ha yr)</h4>

            <h5>Cropland to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_forestland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_forestland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_forestland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_forestland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_forestland--dead_wood"
              defaultValue={initialValues['local-dataset']['cropland_to_forestland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_forestland--litter"
              defaultValue={initialValues['local-dataset']['cropland_to_forestland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_forestland--mineral_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_forestland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_forestland--organic_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_forestland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Grassland to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_forestland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_forestland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_forestland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_forestland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_forestland--dead_wood"
              defaultValue={initialValues['local-dataset']['grassland_to_forestland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_forestland--litter"
              defaultValue={initialValues['local-dataset']['grassland_to_forestland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_forestland--mineral_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_forestland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_forestland--organic_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_forestland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Wetland to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_forestland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_forestland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_forestland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_forestland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_forestland--dead_wood"
              defaultValue={initialValues['local-dataset']['wetland_to_forestland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_forestland--litter"
              defaultValue={initialValues['local-dataset']['wetland_to_forestland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_forestland--mineral_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_forestland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_forestland--organic_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_forestland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlement to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_forestland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_forestland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_forestland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_forestland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_forestland--dead_wood"
              defaultValue={initialValues['local-dataset']['settlement_to_forestland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_forestland--litter"
              defaultValue={initialValues['local-dataset']['settlement_to_forestland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_forestland--mineral_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_forestland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_forestland--organic_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_forestland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Other land to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_forestland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_forestland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_forestland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_forestland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_forestland--dead_wood"
              defaultValue={initialValues['local-dataset']['otherland_to_forestland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_forestland--litter"
              defaultValue={initialValues['local-dataset']['otherland_to_forestland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_forestland--mineral_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_forestland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_forestland--organic_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_forestland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_cropland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_cropland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_cropland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_cropland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_cropland--dead_wood"
              defaultValue={initialValues['local-dataset']['forestland_to_cropland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_cropland--litter"
              defaultValue={initialValues['local-dataset']['forestland_to_cropland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_cropland--mineral_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_cropland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_cropland--organic_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_cropland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Grassland to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_cropland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_cropland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_cropland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_cropland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_cropland--dead_wood"
              defaultValue={initialValues['local-dataset']['grassland_to_cropland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_cropland--litter"
              defaultValue={initialValues['local-dataset']['grassland_to_cropland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_cropland--mineral_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_cropland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_cropland--organic_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_cropland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Wetland to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_cropland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_cropland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_cropland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_cropland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_cropland--dead_wood"
              defaultValue={initialValues['local-dataset']['wetland_to_cropland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_cropland--litter"
              defaultValue={initialValues['local-dataset']['wetland_to_cropland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_cropland--mineral_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_cropland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_cropland--organic_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_cropland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlement to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_cropland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_cropland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_cropland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_cropland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_cropland--dead_wood"
              defaultValue={initialValues['local-dataset']['settlement_to_cropland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_cropland--litter"
              defaultValue={initialValues['local-dataset']['settlement_to_cropland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_cropland--mineral_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_cropland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_cropland--organic_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_cropland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Other land to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_cropland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_cropland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_cropland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_cropland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_cropland--dead_wood"
              defaultValue={initialValues['local-dataset']['otherland_to_cropland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_cropland--litter"
              defaultValue={initialValues['local-dataset']['otherland_to_cropland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_cropland--mineral_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_cropland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_cropland--organic_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_cropland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_grassland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_grassland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_grassland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_grassland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_grassland--dead_wood"
              defaultValue={initialValues['local-dataset']['forestland_to_grassland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_grassland--litter"
              defaultValue={initialValues['local-dataset']['forestland_to_grassland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_grassland--mineral_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_grassland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_grassland--organic_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_grassland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_grassland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_grassland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_grassland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_grassland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_grassland--dead_wood"
              defaultValue={initialValues['local-dataset']['cropland_to_grassland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_grassland--litter"
              defaultValue={initialValues['local-dataset']['cropland_to_grassland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_grassland--mineral_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_grassland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_grassland--organic_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_grassland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Wetland to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_grassland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_grassland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_grassland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_grassland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_grassland--dead_wood"
              defaultValue={initialValues['local-dataset']['wetland_to_grassland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_grassland--litter"
              defaultValue={initialValues['local-dataset']['wetland_to_grassland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_grassland--mineral_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_grassland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_grassland--organic_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_grassland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlement to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_grassland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_grassland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_grassland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_grassland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_grassland--dead_wood"
              defaultValue={initialValues['local-dataset']['settlement_to_grassland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_grassland--litter"
              defaultValue={initialValues['local-dataset']['settlement_to_grassland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_grassland--mineral_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_grassland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_grassland--organic_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_grassland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Other land to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_grassland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_grassland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_grassland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_grassland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_grassland--dead_wood"
              defaultValue={initialValues['local-dataset']['otherland_to_grassland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_grassland--litter"
              defaultValue={initialValues['local-dataset']['otherland_to_grassland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_grassland--mineral_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_grassland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_grassland--organic_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_grassland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Land to peat extraction (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="land_to_peat_extraction--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['land_to_peat_extraction--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="land_to_peat_extraction--belowground_biomass"
              defaultValue={initialValues['local-dataset']['land_to_peat_extraction--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="land_to_peat_extraction--dead_wood"
              defaultValue={initialValues['local-dataset']['land_to_peat_extraction--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="land_to_peat_extraction--litter"
              defaultValue={initialValues['local-dataset']['land_to_peat_extraction--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="land_to_peat_extraction--mineral_soil"
              defaultValue={initialValues['local-dataset']['land_to_peat_extraction--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="land_to_peat_extraction--organic_soil"
              defaultValue={initialValues['local-dataset']['land_to_peat_extraction--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Peatland restoration (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="peatland_restoration--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['peatland_restoration--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="peatland_restoration--belowground_biomass"
              defaultValue={initialValues['local-dataset']['peatland_restoration--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="peatland_restoration--dead_wood"
              defaultValue={initialValues['local-dataset']['peatland_restoration--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="peatland_restoration--litter"
              defaultValue={initialValues['local-dataset']['peatland_restoration--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="peatland_restoration--mineral_soil"
              defaultValue={initialValues['local-dataset']['peatland_restoration--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="peatland_restoration--organic_soil"
              defaultValue={initialValues['local-dataset']['peatland_restoration--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to other wetland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_other_wetland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_other_wetland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_other_wetland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_other_wetland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_other_wetland--dead_wood"
              defaultValue={initialValues['local-dataset']['forestland_to_other_wetland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_other_wetland--litter"
              defaultValue={initialValues['local-dataset']['forestland_to_other_wetland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_other_wetland--mineral_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_other_wetland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_other_wetland--organic_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_other_wetland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland to other wetland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_other_wetland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_other_wetland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_other_wetland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_other_wetland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_other_wetland--dead_wood"
              defaultValue={initialValues['local-dataset']['cropland_to_other_wetland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_other_wetland--litter"
              defaultValue={initialValues['local-dataset']['cropland_to_other_wetland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_other_wetland--mineral_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_other_wetland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_other_wetland--organic_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_other_wetland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Grassland to other wetland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_other_wetland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_other_wetland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_other_wetland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_other_wetland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_other_wetland--dead_wood"
              defaultValue={initialValues['local-dataset']['grassland_to_other_wetland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_other_wetland--litter"
              defaultValue={initialValues['local-dataset']['grassland_to_other_wetland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_other_wetland--mineral_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_other_wetland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_other_wetland--organic_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_other_wetland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_settlement--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_settlement--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_settlement--belowground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_settlement--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_settlement--dead_wood"
              defaultValue={initialValues['local-dataset']['forestland_to_settlement--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_settlement--litter"
              defaultValue={initialValues['local-dataset']['forestland_to_settlement--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_settlement--mineral_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_settlement--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_settlement--organic_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_settlement--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_settlement--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_settlement--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_settlement--belowground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_settlement--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_settlement--dead_wood"
              defaultValue={initialValues['local-dataset']['cropland_to_settlement--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_settlement--litter"
              defaultValue={initialValues['local-dataset']['cropland_to_settlement--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_settlement--mineral_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_settlement--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_settlement--organic_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_settlement--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Grassland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_settlement--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_settlement--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_settlement--belowground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_settlement--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_settlement--dead_wood"
              defaultValue={initialValues['local-dataset']['grassland_to_settlement--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_settlement--litter"
              defaultValue={initialValues['local-dataset']['grassland_to_settlement--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_settlement--mineral_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_settlement--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_settlement--organic_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_settlement--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Wetland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_settlement--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_settlement--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_settlement--belowground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_settlement--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_settlement--dead_wood"
              defaultValue={initialValues['local-dataset']['wetland_to_settlement--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_settlement--litter"
              defaultValue={initialValues['local-dataset']['wetland_to_settlement--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_settlement--mineral_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_settlement--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_settlement--organic_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_settlement--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Other land to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_settlement--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_settlement--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_settlement--belowground_biomass"
              defaultValue={initialValues['local-dataset']['otherland_to_settlement--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_settlement--dead_wood"
              defaultValue={initialValues['local-dataset']['otherland_to_settlement--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_settlement--litter"
              defaultValue={initialValues['local-dataset']['otherland_to_settlement--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_settlement--mineral_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_settlement--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_settlement--organic_soil"
              defaultValue={initialValues['local-dataset']['otherland_to_settlement--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Forestland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_otherland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_otherland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_otherland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_to_otherland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_otherland--dead_wood"
              defaultValue={initialValues['local-dataset']['forestland_to_otherland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_otherland--litter"
              defaultValue={initialValues['local-dataset']['forestland_to_otherland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_otherland--mineral_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_otherland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_otherland--organic_soil"
              defaultValue={initialValues['local-dataset']['forestland_to_otherland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Cropland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_otherland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_otherland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_otherland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_to_otherland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_otherland--dead_wood"
              defaultValue={initialValues['local-dataset']['cropland_to_otherland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_otherland--litter"
              defaultValue={initialValues['local-dataset']['cropland_to_otherland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_otherland--mineral_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_otherland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_otherland--organic_soil"
              defaultValue={initialValues['local-dataset']['cropland_to_otherland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Grassland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_otherland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_otherland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_otherland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_to_otherland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_otherland--dead_wood"
              defaultValue={initialValues['local-dataset']['grassland_to_otherland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_otherland--litter"
              defaultValue={initialValues['local-dataset']['grassland_to_otherland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_otherland--mineral_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_otherland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_otherland--organic_soil"
              defaultValue={initialValues['local-dataset']['grassland_to_otherland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Wetland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_otherland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_otherland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_otherland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_to_otherland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_otherland--dead_wood"
              defaultValue={initialValues['local-dataset']['wetland_to_otherland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_otherland--litter"
              defaultValue={initialValues['local-dataset']['wetland_to_otherland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_otherland--mineral_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_otherland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_otherland--organic_soil"
              defaultValue={initialValues['local-dataset']['wetland_to_otherland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Settlement to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_otherland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_otherland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_otherland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_to_otherland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_otherland--dead_wood"
              defaultValue={initialValues['local-dataset']['settlement_to_otherland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_otherland--litter"
              defaultValue={initialValues['local-dataset']['settlement_to_otherland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_otherland--mineral_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_otherland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_otherland--organic_soil"
              defaultValue={initialValues['local-dataset']['settlement_to_otherland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <Divider sx={{m:2}}/>

            <h4>LUC: Remainings of different types of lands</h4>

             <h5>Forest land remaining forest land</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_remaining_forestland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_remaining_forestland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_remaining_forestland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['forestland_remaining_forestland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_remaining_forestland--dead_wood"
              defaultValue={initialValues['local-dataset']['forestland_remaining_forestland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_remaining_forestland--litter"
              defaultValue={initialValues['local-dataset']['forestland_remaining_forestland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_remaining_forestland--mineral_soil"
              defaultValue={initialValues['local-dataset']['forestland_remaining_forestland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_remaining_forestland--organic_soil"
              defaultValue={initialValues['local-dataset']['forestland_remaining_forestland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland remaining cropland</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_remaining_cropland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_remaining_cropland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_remaining_cropland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['cropland_remaining_cropland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_remaining_cropland--dead_wood"
              defaultValue={initialValues['local-dataset']['cropland_remaining_cropland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_remaining_cropland--litter"
              defaultValue={initialValues['local-dataset']['cropland_remaining_cropland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_remaining_cropland--mineral_soil"
              defaultValue={initialValues['local-dataset']['cropland_remaining_cropland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_remaining_cropland--organic_soil"
              defaultValue={initialValues['local-dataset']['cropland_remaining_cropland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Grassland remaining grassland</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_remaining_grassland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_remaining_grassland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_remaining_grassland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['grassland_remaining_grassland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_remaining_grassland--dead_wood"
              defaultValue={initialValues['local-dataset']['grassland_remaining_grassland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_remaining_grassland--litter"
              defaultValue={initialValues['local-dataset']['grassland_remaining_grassland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_remaining_grassland--mineral_soil"
              defaultValue={initialValues['local-dataset']['grassland_remaining_grassland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_remaining_grassland--organic_soil"
              defaultValue={initialValues['local-dataset']['grassland_remaining_grassland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Peat extraction remaining peat extraction</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="peat_extraction_remaining_peat_extraction--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['peat_extraction_remaining_peat_extraction--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="peat_extraction_remaining_peat_extraction--belowground_biomass"
              defaultValue={initialValues['local-dataset']['peat_extraction_remaining_peat_extraction--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="peat_extraction_remaining_peat_extraction--dead_wood"
              defaultValue={initialValues['local-dataset']['peat_extraction_remaining_peat_extraction--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="peat_extraction_remaining_peat_extraction--litter"
              defaultValue={initialValues['local-dataset']['peat_extraction_remaining_peat_extraction--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="peat_extraction_remaining_peat_extraction--mineral_soil"
              defaultValue={initialValues['local-dataset']['peat_extraction_remaining_peat_extraction--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="peat_extraction_remaining_peat_extraction--organic_soil"
              defaultValue={initialValues['local-dataset']['peat_extraction_remaining_peat_extraction--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Wetlands remaining wetlands</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_remaining_wetland--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_remaining_wetland--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_remaining_wetland--belowground_biomass"
              defaultValue={initialValues['local-dataset']['wetland_remaining_wetland--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_remaining_wetland--dead_wood"
              defaultValue={initialValues['local-dataset']['wetland_remaining_wetland--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_remaining_wetland--litter"
              defaultValue={initialValues['local-dataset']['wetland_remaining_wetland--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_remaining_wetland--mineral_soil"
              defaultValue={initialValues['local-dataset']['wetland_remaining_wetland--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_remaining_wetland--organic_soil"
              defaultValue={initialValues['local-dataset']['wetland_remaining_wetland--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlements remaining settlements</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_remaining_settlement--aboveground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_remaining_settlement--aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_remaining_settlement--belowground_biomass"
              defaultValue={initialValues['local-dataset']['settlement_remaining_settlement--belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_remaining_settlement--dead_wood"
              defaultValue={initialValues['local-dataset']['settlement_remaining_settlement--dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_remaining_settlement--litter"
              defaultValue={initialValues['local-dataset']['settlement_remaining_settlement--litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_remaining_settlement--mineral_soil"
              defaultValue={initialValues['local-dataset']['settlement_remaining_settlement--mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_remaining_settlement--organic_soil"
              defaultValue={initialValues['local-dataset']['settlement_remaining_settlement--organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <Divider sx={{m:2}}/>

            <h4 id='buildings-localdataset'>
              Buildings
              <BusinessOutlined/>
            </h4>

            <h5>Emission factor for energy carrier</h5>

            <TextField
              label="Gas"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--gas"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--oil"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--coal"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--peat"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--wood"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewables"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--renewable"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="District heating"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier--district_heating"
              defaultValue={initialValues['local-dataset']['emission_factor_for_energy_carrier--district_heating']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual demolition rate of residential buildings (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_demolition_rate_of_residential_buildings--2021-30"
              defaultValue={initialValues['local-dataset']['annual_demolition_rate_of_residential_buildings--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_demolition_rate_of_residential_buildings--2031-40"
              defaultValue={initialValues['local-dataset']['annual_demolition_rate_of_residential_buildings--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_demolition_rate_of_residential_buildings--2041-50"
              defaultValue={initialValues['local-dataset']['annual_demolition_rate_of_residential_buildings--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual demolition rate of commercial buildings (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_demolition_of_commercial_buildings--2021-30"
              defaultValue={initialValues['local-dataset']['annual_demolition_of_commercial_buildings--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_demolition_of_commercial_buildings--2031-40"
              defaultValue={initialValues['local-dataset']['annual_demolition_of_commercial_buildings--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_demolition_of_commercial_buildings--2041-50"
              defaultValue={initialValues['local-dataset']['annual_demolition_of_commercial_buildings--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class appartments (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a-class_apartments--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_apartments--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a-class_apartments--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_apartments--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a-class_apartments--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_apartments--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class appartments (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b-class_apartments--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_apartments--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b-class_apartments--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_apartments--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b-class_apartments--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_apartments--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class terraced units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a-class_terraced_units--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_terraced_units--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a-class_terraced_units--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_terraced_units--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a-class_terraced_units--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_terraced_units--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class terraced units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b-class_terraced_units--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_terraced_units--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b-class_terraced_units--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_terraced_units--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b-class_terraced_units--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_terraced_units--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class semi detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a-class_semi-detached_units--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_semi-detached_units--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a-class_semi-detached_units--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_semi-detached_units--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a-class_semi-detached_units--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_semi-detached_units--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class semi detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b-class_semi-detached_units--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_semi-detached_units--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b-class_semi-detached_units--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_semi-detached_units--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b-class_semi-detached_units--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_semi-detached_units--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a-class_detached_units--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_detached_units--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a-class_detached_units--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_detached_units--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a-class_detached_units--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_a-class_detached_units--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b-class_detached_units--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_detached_units--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b-class_detached_units--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_detached_units--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b-class_detached_units--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_b-class_detached_units--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of commercial buildings (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_commercial_buildings--2021-30"
              defaultValue={initialValues['local-dataset']['annual_increase_commercial_buildings--2021-30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_commercial_buildings--2031-40"
              defaultValue={initialValues['local-dataset']['annual_increase_commercial_buildings--2031-40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_commercial_buildings--2041-50"
              defaultValue={initialValues['local-dataset']['annual_increase_commercial_buildings--2041-50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Floor area per residential unit (m2)</h5>

            <TextField
              label="Average m2"
              placeholder="Average m2"
              name="floor_area_per_residential_unit--average"
              defaultValue={initialValues['local-dataset']['floor_area_per_residential_unit--average']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Appartment m2"
              placeholder=""
              name="floor_area_per_residential_unit--apartment"
              defaultValue={initialValues['local-dataset']['floor_area_per_residential_unit--apartment']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Terraced appartment"
              placeholder=""
              name="floor_area_per_residential_unit--terraced"
              defaultValue={initialValues['local-dataset']['floor_area_per_residential_unit--terraced']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Semi-detached"
              placeholder=""
              name="floor_area_per_residential_unit--semi-detached"
              defaultValue={initialValues['local-dataset']['floor_area_per_residential_unit--semi-detached']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Detached"
              placeholder=""
              name="floor_area_per_residential_unit--detached"
              defaultValue={initialValues['local-dataset']['floor_area_per_residential_unit--detached']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <Divider sx={{m:2}}/>

            <h4>Buildings: Energy use</h4>

            <h5>Average total energy use of all residential buildings</h5>

            <TextField
              label="All residential"
              placeholder="kWh/dwelling"
              name="average_total_energy_use--all_residential"
              defaultValue={initialValues['local-dataset']['average_total_energy_use--all_residential']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

           <Divider sx={{m:2}}/>

            <h4>Buildings: End use of energy residential buildings</h4>
            
            <TextField
              label="Space heating"
              placeholder="%"
              name="end_use_of_energy_residential_buildings--space_heating"
              defaultValue={initialValues['local-dataset']['end_use_of_energy_residential_buildings--space_heating']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Water heating"
              placeholder="%"
              name="end_use_of_energy_residential_buildings--water_heating"
              defaultValue= {initialValues['local-dataset']['end_use_of_energy_residential_buildings--water_heating']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lights &amp; appliences"
              placeholder="%"
              name="end_use_of_energy_residential_buildings--lights_&amp;_appliances"
              defaultValue= {initialValues['local-dataset']['end_use_of_energy_residential_buildings--lights_&_appliances']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Pumps &amp; fans"
              placeholder="%"
              name="end_use_of_energy_residential_buildings--pumps_&amp;_fans"
              defaultValue= {initialValues['local-dataset']['end_use_of_energy_residential_buildings--pumps_&_fans']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['a-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['a-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['a-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--electricity"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--gas"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--oil"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--coal"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--peat"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--wood"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--renewable"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['a-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['b-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['b-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['b-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--electricity"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--gas"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--oil"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--coal"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--peat"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--wood"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--renewable"
               defaultValue= {initialValues['local-dataset']['b-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['b-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['c-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['c-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['c-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--electricity"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--gas"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--oil"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--coal"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--peat"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--wood"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--renewable"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['c-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['d-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['d-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['d-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--electricity"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--gas"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--oil"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--coal"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--peat"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--wood"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--renewable"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['d-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['e-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['e-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['e-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--electricity"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--gas"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--oil"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--coal"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--peat"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--wood"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--renewable"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['e-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['f-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['f-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['f-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--electricity"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--gas"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--oil"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--coal"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--peat"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--wood"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--renewable"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['f-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--electricity"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--gas"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--oil"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--coal"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--peat"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--wood"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--renewable"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g-rated_apartment--heat"
              defaultValue= {initialValues['local-dataset']['g-rated_apartment--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--gas"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--oil"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--coal"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--peat"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--wood"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g-rated_terraced--heat"
              defaultValue= {initialValues['local-dataset']['g-rated_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g-rated_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['g-rated_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--electricity"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--gas"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--oil"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--coal"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--peat"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--wood"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--renewable"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g-rated_detached--heat"
              defaultValue= {initialValues['local-dataset']['g-rated_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing appartments</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_apartments--electricity"
              defaultValue= {initialValues['local-dataset']['existing_apartments--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_apartments--gas"
              defaultValue= {initialValues['local-dataset']['existing_apartments--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_apartments--oil"
              defaultValue= {initialValues['local-dataset']['existing_apartments--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_apartments--coal"
              defaultValue= {initialValues['local-dataset']['existing_apartments--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_apartments--peat"
              defaultValue= {initialValues['local-dataset']['existing_apartments--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_apartments-wood"
              defaultValue= {initialValues['local-dataset']['existing_apartments--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_apartments--renewable"
              defaultValue= {initialValues['local-dataset']['existing_apartments--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_apartments--heat"
              defaultValue= {initialValues['local-dataset']['existing_apartments--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_terraced--electricity"
              defaultValue= {initialValues['local-dataset']['existing_terraced--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_terraced--gas"
              defaultValue= {initialValues['local-dataset']['existing_terraced--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_terraced--oil"
              defaultValue= {initialValues['local-dataset']['existing_terraced--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_terraced--coal"
              defaultValue= {initialValues['local-dataset']['existing_terraced--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_terraced--peat"
              defaultValue= {initialValues['local-dataset']['existing_terraced--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_terraced--wood"
              defaultValue= {initialValues['local-dataset']['existing_terraced--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_terraced--renewable"
              defaultValue= {initialValues['local-dataset']['existing_terraced--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_terraced--heat"
              defaultValue= {initialValues['local-dataset']['existing_terraced--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--electricity"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--gas"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--oil"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--coal"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--peat"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--wood"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--renewable"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_semi-detached--heat"
              defaultValue= {initialValues['local-dataset']['existing_semi-detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_detached--electricity"
              defaultValue= {initialValues['local-dataset']['existing_detached--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_detached--gas"
              defaultValue= {initialValues['local-dataset']['existing_detached--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_detached--oil"
              defaultValue= {initialValues['local-dataset']['existing_detached--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_detached-coal"
              defaultValue= {initialValues['local-dataset']['existing_detached--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_detached--peat"
              defaultValue= {initialValues['local-dataset']['existing_detached--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_detached-wood"
              defaultValue= {initialValues['local-dataset']['existing_detached--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_detached--renewable"
              defaultValue= {initialValues['local-dataset']['existing_detached--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_detached--heat"
              defaultValue= {initialValues['local-dataset']['existing_detached--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Retail</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--electricity"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--gas"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--oil"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--coal"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--peat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--wood"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--renewable"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail--heat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_retail--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Health</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--electricity"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--gas"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--oil"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--coal"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--peat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--wood"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--renewable"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health--heat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_health--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Hospitality</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--electricity"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--gas"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--oil"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--coal"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--peat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--wood"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--renewable"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality--heat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_hospitality--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Offices</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--electricity"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--gas"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--oil"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--coal"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--peat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--wood"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--renewable"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices--heat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_offices--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Industrial</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--electricity"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--gas"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--oil"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--coal"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--peat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--wood"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--renewable"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial--heat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_industrial--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Warehouses</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--electricity"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--gas"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--oil"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--coal"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--peat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--wood"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--renewable"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses--heat"
              defaultValue= {initialValues['local-dataset']['ec_exiting_building_warehouses--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>New building: Retail</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail--electricity"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail--gas"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail--oil"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail-coal"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retails--peat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail--wood"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail--renewable"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail--heat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_retail--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>New building: Health</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--electricity"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--gas"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--oil"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health-coal"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--peat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--wood"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--renewable"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health--heat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_health--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>New building: Hospitality</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--electricity"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--gas"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--oil"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality-coal"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--peat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--wood"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--renewable"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality--heat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_hospitality--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>New building: Offices</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices--electricity"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices--gas"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices--oil"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices-coal"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices-peat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices--wood"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices--renewable"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices--heat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_offices--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>New building: Industrial</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial--electricity"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial--gas"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial--oil"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial-coal"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial-peat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial--wood"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial--renewable"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial--heat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_industrial--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <h5>New building: Warehouses</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses--electricity"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses--gas"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses--oil"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses-coal"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses-peat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses--wood"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses--renewable"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses--heat"
              defaultValue= {initialValues['local-dataset']['ec_new_building_warehouses--heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            /> 


              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!dirty || !isValid}
                >
                  Submit
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ top: "95%",
                        right: "30px",
                        position: "fixed" }}
                  // disabled={!dirty || !isValid}
                >
                  Save
                </Button>

                <BackToTop />
              </Grid>
          </Form>
        );
      }}
    </Formik>
    </Container>
  )
 };