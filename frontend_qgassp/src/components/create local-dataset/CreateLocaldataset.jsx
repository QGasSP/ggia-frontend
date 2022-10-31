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
        await axios.post(urlPrefix + "/api/v1/create/local_dataset", values, headers);
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
              defaultValue={initialValues['local_dataset']['dataset_name']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

          <h5>Dataset description</h5>
           
           <TextField
             placeholder="Enter description"
             label="Dataset description"
             name="dataset_description"
             defaultValue={initialValues['local_dataset']['dataset_description']}
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
              name="annual_change_population__2021_30"
              defaultValue= {initialValues['local_dataset']['annual_change_population__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_population__2031_40"
              defaultValue= {initialValues['local_dataset']['annual_change_population__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            
            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_population__2041_50"
              defaultValue= {initialValues['local_dataset']['annual_change_population__2041_50']}
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
              defaultValue= {initialValues['local_dataset']['grid_electricity_emission_factor']}
              sx={{ m: 2, width: "12%" }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Annual change of grid electricity efficiency % (decades)</h5>
              
              <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_grid_electricity_ef__2021_30"
              defaultValue= {initialValues['local_dataset']['annual_change_grid_electricity_ef__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

              <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_grid_electricity_ef__2031_40"
              defaultValue= {initialValues['local_dataset']['annual_change_grid_electricity_ef__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_grid_electricity_ef__2041_50"
              defaultValue= {initialValues['local_dataset']['annual_change_grid_electricity_ef__2041_50']}
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
              defaultValue= {initialValues['local_dataset']['district_heating_emission_factor']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Annual change of district electricity efficiency (decades)</h5>
              
              <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_district_electricity_ef__2021_30"
              defaultValue= {initialValues['local_dataset']['annual_change_district_electricity_ef__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

              <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_district_electricity_ef__2031_40"
              defaultValue= {initialValues['local_dataset']['annual_change_district_electricity_ef__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_district_electricity_ef__2041_50"
              defaultValue= {initialValues['local_dataset']['annual_change_district_electricity_ef__2041_50']}
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
              name="passenger_km_per_capita_bus"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_bus']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate bus</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="Passengers/ vehicle"
              name="occupancy_rate_bus"
              defaultValue={initialValues['local_dataset']['occupancy_rate_bus']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            
          
          <br/>

            <h5>Annual change bus</h5>

            <TextField
              label="2020-30"
              placeholder="%"
              name="annual_change_bus__2020_30"
              defaultValue={initialValues['local_dataset']['annual_change_bus__2020_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2030-40"
              placeholder="%"
              name="annual_change_bus__2030_40"
              defaultValue={initialValues['local_dataset']['annual_change_bus__2030_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2040-50"
              placeholder="%"
              name="annual_change_bus__2040_50"
              defaultValue={initialValues['local_dataset']['annual_change_bus__2040_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <br/>

            <h5>Propulsion share % bus</h5>

            <TextField
              label="Petrol"
              placeholder="%"
              name="propulsion_share_bus__petrol"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lpg"
              placeholder="%"
              name="propulsion_share_bus__lpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="%"
              name="propulsion_share_bus__diesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Cng"
              placeholder="%"
              name="propulsion_share_bus__cng"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Electricity"
              placeholder="%"
              name="propulsion_share_bus__electricity"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Control factor, bus</h5>
            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_bus__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_bus__metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_bus__city"
              defaultValue={initialValues['local_dataset']['cf_bus__city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="cf_bus__suburban"
              defaultValue={initialValues['local_dataset']['cf_bus__suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="cf_bus__town"
              defaultValue={initialValues['local_dataset']['cf_bus__town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="cf_bus__rural"
              defaultValue={initialValues['local_dataset']['cf_bus__rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Fuel shares of street driving bus (gCO2e/vkm)</h5>

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus__petrol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_bus__petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus__lpg"
               defaultValue={initialValues['local_dataset']['ef_street_driving_bus__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus__diesel"
               defaultValue={initialValues['local_dataset']['ef_street_driving_bus__diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_bus__cng"
              defaultValue={initialValues['local_dataset']['ef_street_driving_bus__cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="kWh/vkm"
              name="electricity_consumption_street_driving_bus__electricity"
              defaultValue={initialValues['local_dataset']['electricity_consumption_street_driving_bus__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Fuel shares road driving bus (gCO2e/vkm)</h5>

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus__petrol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus__lpg"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus__diesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_bus__cng"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="kWh/vkm"
              name="electricity_consumption_road_driving_bus__electricity"
              defaultValue={initialValues['local_dataset']['electricity_consumption_road_driving_bus__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Projected share % of electric buses every 5 years</h5>

            <TextField
              label="2020"
              placeholder="%"
              name="share_of_electric_buses__2020"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2020']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2025"
              placeholder="%"
              name="share_of_electric_buses__2025"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2025']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2030"
              placeholder="%"
              name="share_of_electric_buses__2030"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2030']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2035"
              placeholder="%"
              name="share_of_electric_buses__2035"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2035']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2040"
              placeholder="%"
              name="share_of_electric_buses__2040"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2040']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2045"
              placeholder="%"
              name="share_of_electric_buses__2045"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2045']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2050"
              placeholder="%"
              name="share_of_electric_buses__2050"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2050']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Share % of road driving buses according to area</h5>

            <TextField
              label="Metropolitan center"
              placeholder="%"
              name="share_road_driving_buses__metropolitan_center"
              defaultValue={initialValues['local_dataset']['share_road_driving_buses__metropolitan_center']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Urban"
              placeholder="%"
              name="share_road_driving_buses__urban"
              defaultValue={initialValues['local_dataset']['share_road_driving_buses__urban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="share_road_driving_buses__suburban"
              defaultValue={initialValues['local_dataset']['share_road_driving_buses__suburban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="share_road_driving_buses__town"
              defaultValue={initialValues['local_dataset']['share_road_driving_buses__town']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="share_road_driving_buses__rural"
              defaultValue={initialValues['local_dataset']['share_road_driving_buses__rural']}
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
              name="passenger_km_per_capita_car"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate car</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="Passengers/ vehicle"
              name="occupancy_rate_car"
              defaultValue={initialValues['local_dataset']['occupancy_rate_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
          
            <h5>Annual change car (decades)</h5>

            <TextField
              label="2021-31"
              placeholder="%"
              name="annual_change_car__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_car__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-41"
              placeholder="%"
              name="annual_change_car__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_car__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_car__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_car__2041_50']}
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
              defaultValue={initialValues['local_dataset']['ef_diesel_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_petrol_car"
              defaultValue={initialValues['local_dataset']['ef_petrol_car']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Propulsion share % car</h5>

            <TextField
              label="Lpg"
              placeholder="%"
              name="propulsion_share_car__lpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cpg"
              placeholder="Cpg"
              name="propulsion_share_car__cpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__cpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Ngv"
              placeholder="Ngv"
              name="propulsion_share_car__ngv"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__ngv']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="%"
              name="propulsion_share_car__petrol"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-petrol"
              placeholder="%"
              name="propulsion_share_car__hybrid_electric_petrol"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__hybrid_electric_petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol phev"
              placeholder="%"
              name="propulsion_share_car__petrol_phev"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__petrol_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="%"
              name="propulsion_share_car__diesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-diesel"
              placeholder="%"
              name="propulsion_share_car__hybrid_electric_diesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__hybrid_electric_diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel phev"
              placeholder="%"
              name="propulsion_share_car__diesel_phev"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__diesel_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hydrogen fuel cell"
              placeholder="%"
              name="propulsion_share_car__hydrogen_fuel_cell"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__hydrogen_fuel_cell']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="%"
              name="propulsion_share_car__bioethanol"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Biodiesel"
              placeholder="%"
              name="propulsion_share_car__biodiesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bi-fuel"
              placeholder="%"
              name="propulsion_share_car__bi_fuel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__bi_fuel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Other"
              placeholder="%"
              name="propulsion_share_car__other"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__other']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bev"
              placeholder="%"
              name="propulsion_share_car__bev"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__bev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          
          <br/>

            <h5>Ef street driving car (gCO2e/vkm)</h5>

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__lpg"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__cpg"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__cpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Ngv"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__ngv"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__ngv']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__petrol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-petrol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__hybrid_electric_petrol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__hybrid_electric_petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol phev"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__petrol_phev"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__petrol_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__diesel"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-diesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__hybrid_electric_diesel"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__hybrid_electric_diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel phev"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__diesel_phev"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__diesel_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hydrogen fuel cell"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__hydrogen_fuel_cell"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__hydrogen_fuel_cell']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__bioethanol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__biodiesel"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bi-fuel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__bi_fuel"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__bi_fuel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Other"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_car__other"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__other']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bev"
              placeholder="KWh/vkm"
              name="ef_street_driving_car__bev"
              defaultValue={initialValues['local_dataset']['ef_street_driving_car__bev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Ef road driving car (gCO2e/vkm)</h5>

            <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__lpg"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__cpg"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__cpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Ngv"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__ngv"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__ngv']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__petrol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-petrol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__hybrid_electric_petrol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__hybrid_electric_petrol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Petrol phev"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__petrol_phev"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__petrol_phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__diesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hybrid electric-diesel"
              placeholder="HgCO2e/vkm"
              name="ef_road_driving_car__hybrid_electric_diesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__hybrid_electric_diesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel phev"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__diesel_phev"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__phev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Hydrogen fuel cell"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__hydrogen_fuel_cell"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__hydrogen_fuel_cell']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__bioethanol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__biodiesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bi-fuel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__bi_fuel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__bi_fuel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Other"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_car__other"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__other']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Bev"
              placeholder="KWh/vkm"
              name="ef_road_driving_car__bev"
              defaultValue={initialValues['local_dataset']['ef_road_driving_car__bev']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
            <h5>Control factor, car</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_car__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_car__metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_car__city"
              defaultValue={initialValues['local_dataset']['cf_car__city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_car__suburban"
              defaultValue={initialValues['local_dataset']['cf_car__suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_car__town"
              defaultValue={initialValues['local_dataset']['cf_car__town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_car__rural"
              defaultValue={initialValues['local_dataset']['cf_car__rural']}
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
              name="share_road_driving_car__metropolitan_center"
              defaultValue={initialValues['local_dataset']['share_road_driving_car__metropolitan_center']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Urban"
              placeholder="%"
              name="cf_carshare_road_driving_car__urban"
              defaultValue={initialValues['local_dataset']['share_road_driving_car__urban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="cf_carshare_road_driving_car__suburban"
              defaultValue={initialValues['local_dataset']['share_road_driving_car__suburban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="cf_carshare_road_driving_car__town"
              defaultValue={initialValues['local_dataset']['share_road_driving_car__town']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="cf_carshare_road_driving_car__rural"
              defaultValue={initialValues['local_dataset']['share_road_driving_car__rural']}
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
              name="passenger_km_per_capita_metro"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_metro']}
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
              defaultValue={initialValues['local_dataset']['occupancy_rate_metro']}
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
              defaultValue={initialValues['local_dataset']['electricity_consumption_metro']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change metro (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_metro__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_metro__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_metro__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_metro__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_metro__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_metro__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>
            <h5>Metro (million pkm/a)</h5>

            {initialValues['local_dataset']['metro__1'] !== "-" &&
            <TextField
              label="Metro 1"
              placeholder="Metro 1"
              name="metro__1"
              defaultValue={initialValues['local_dataset']['metro__1']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

            {initialValues['local_dataset']['metro__2'] !== "-" &&
            <TextField
              label="Metro 2"
              placeholder="Metro 2"
              name="metro__2"
              defaultValue={initialValues['local_dataset']['metro__2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

           {initialValues['local_dataset']['metro__3'] !== "-" &&
            <TextField
              label="Metro 3"
              placeholder="Metro 3"
              name="metro__3"
              defaultValue={initialValues['local_dataset']['metro__3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }


          {initialValues['local_dataset']['metro__4'] !== "-" &&
            <TextField
              label="Metro 4"
              placeholder="Metro 4"
              name="metro__4"
              defaultValue={initialValues['local_dataset']['metro__4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['metro__5'] !== "-" &&
            <TextField
              label="Metro 5"
              placeholder="Metro 5"
              name="metro__5"
              defaultValue={initialValues['local_dataset']['metro__5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

           {initialValues['local_dataset']['metro__6'] !== "-" &&
            <TextField
              label="Metro 6"
              placeholder="Metro 6"
              name="metro__6"
              defaultValue={initialValues['local_dataset']['metro__6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

           {initialValues['local_dataset']['metro__7'] !== "-" &&
            <TextField
              label="Metro 7"
              placeholder="Metro 7"
              name="metro__7"
              defaultValue={initialValues['local_dataset']['metro__7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}

            />
            }
          <br/>

            <h5>Transport activity (pkm/a)</h5>

          {initialValues['local_dataset']['transport_activity_metro__pkm_a'] !== 0 &&
            <TextField
              label="1. metro pkm/a"
              placeholder="1. metro pkm/a"
              name="transport_activity_metro__pkm_a"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__pkm_a']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local_dataset']['transport_activity_metro__metro_2'] !== 0 &&
             <TextField
              label="2. metro pkm/a"
              placeholder="2. metro pkm/a"
              name="transport_activity_metro__metro_2"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__metro_2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local_dataset']['transport_activity_metro__metro_3'] !== 0 &&
            <TextField
              label="3. metro pkm/a"
              placeholder="3. metro pkm/a"
              name="transport_activity_metro__metro_3"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__metro_3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local_dataset']['transport_activity_metro__metro_4'] !== 0 &&
            <TextField
              label="4. metro pkm/a"
              placeholder="4. metro pkm/a"
              name="transport_activity_metro__metro_4"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__metro_4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }
          {initialValues['local_dataset']['transport_activity_metro__metro_5'] !== 0 &&
            <TextField
              label="5. metro pkm/a"
              placeholder="5. metro pkm/a"
              name="transport_activity_metro__metro_5"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__metro_5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['transport_activity_metro__metro_6'] !== 0 &&
            <TextField
              label="6. metro pkm/a"
              placeholder="6. metro pkm/a"
              name="transport_activity_metro__metro_6"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__metro_6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['transport_activity_metro__metro_7'] !== 0 &&
            <TextField
              label="7. metro pkm/a"
              placeholder="7. metro pkm/a"
              name="transport_activity_metro__metro_7"
              defaultValue={initialValues['local_dataset']['transport_activity_metro__metro_7']}
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
              name="passenger_km_per_capita_tram"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_tram']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="passengers/ vehicle"
              name="occupancy_rate_tram"
              defaultValue={initialValues['local_dataset']['occupancy_rate_tram']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Electricity consumption</h5>

            <TextField
              label="kWh/vkm"
              placeholder="kWh/vkm"
              name="electricity_consumption_tram"
              defaultValue={initialValues['local_dataset']['electricity_consumption_tram']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual chnage %, tram (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_tram__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_tram__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_tram__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_tram__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_tram__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_tram__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

          <br/>

            <h5>Trams each</h5>

          {initialValues['local_dataset']['tram__1'] !== "-" &&
            <TextField
              label="Tram 1"
              placeholder="Tram 1"
              name="tram__1"
              defaultValue={initialValues['local_dataset']['tram__1']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__2'] !== "-" &&
            <TextField
              label="Tram 2"
              placeholder="Tram 2"
              name="tram__2"
              defaultValue={initialValues['local_dataset']['tram__2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__3'] !== "-" &&
            <TextField
              label="Tram 3"
              placeholder="Tram 3"
              name="tram__3"
              defaultValue={initialValues['local_dataset']['tram__3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__4'] !== "-" &&
            <TextField
              label="Tram 4"
              placeholder="Tram 4"
              name="tram__4"
              defaultValue={initialValues['local_dataset']['tram__4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__5'] !== "-" &&
            <TextField
              label="Tram 5"
              placeholder="Tram 5"
              name="tram__5"
              defaultValue={initialValues['local_dataset']['tram__5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__6'] !== "-" &&
            <TextField
              label="Tram 6"
              placeholder="Tram 6"
              name="tram__6"
              defaultValue={initialValues['local_dataset']['tram__6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__7'] !== "-" &&
            <TextField
              label="Tram 7"
              placeholder="Tram 7"
              name="tram__7"
              defaultValue={initialValues['local_dataset']['tram__7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__8'] !== "-" &&
            <TextField
              label="Tram 8"
              placeholder="Tram 8"
              name="tram__8"
              defaultValue={initialValues['local_dataset']['tram__8']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__9'] !== "-" &&
            <TextField
              label="Tram 9"
              placeholder="Tram 9"
              name="tram__9"
              defaultValue={initialValues['local_dataset']['tram__9']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__10'] !== "-" &&
            <TextField
              label="Tram 10"
              placeholder="Tram 10"
              name="tram__10"
              defaultValue={initialValues['local_dataset']['tram__10']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__11'] !== "-" &&
            <TextField
              label="Tram 11"
              placeholder="Tram 11"
              name="tram__11"
              defaultValue={initialValues['local_dataset']['tram__11']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__12'] !== "-" &&
            <TextField
              label="Tram 12"
              placeholder="Tram 12"
              name="tram__12"
              defaultValue={initialValues['local_dataset']['tram__12']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__13'] !== "-" &&
            <TextField
              label="Tram 13"
              placeholder="Tram 13"
              name="tram__13"
              defaultValue={initialValues['local_dataset']['tram__13']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__14'] !== "-" &&
            <TextField
              label="Tram 14"
              placeholder="Tram 14"
              name="tram__14"
              defaultValue={initialValues['local_dataset']['tram__14']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__15'] !== "-" &&
            <TextField
              label="Tram 15"
              placeholder="Tram 15"
              name="tram__15"
              defaultValue={initialValues['local_dataset']['tram__15']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__16'] !== "-" &&
            <TextField
              label="Tram 16"
              placeholder="Tram 16"
              name="tram__16"
              defaultValue={initialValues['local_dataset']['tram__16']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__17'] !== "-" &&
            <TextField
              label="Tram 17"
              placeholder="Tram 17"
              name="tram__17"
              defaultValue={initialValues['local_dataset']['tram__17']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__18'] !== "-" &&
            <TextField
              label="Tram 18"
              placeholder="Tram 18"
              name="tram__18"
              defaultValue={initialValues['local_dataset']['tram__18']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__19'] !== "-" &&
            <TextField
              label="Tram 19"
              placeholder="Tram 19"
              name="tram__19"
              defaultValue={initialValues['local_dataset']['tram__19']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__20'] !== "-" &&
            <TextField
              label="Tram 20"
              placeholder="Tram 20"
              name="tram__20"
              defaultValue={initialValues['local_dataset']['tram__20']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__21'] !== "-" &&
            <TextField
              label="Tram 21"
              placeholder="Tram 21"
              name="tram__21"
              defaultValue={initialValues['local_dataset']['tram__21']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__22'] !== "-" &&
            <TextField
              label="Tram 22"
              placeholder="Tram 22"
              name="tram__22"
              defaultValue={initialValues['local_dataset']['tram__22']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__23'] !== "-" &&
            <TextField
              label="Tram 23"
              placeholder="Tram 23"
              name="tram__23"
              defaultValue={initialValues['local_dataset']['tram__23']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__24'] !== "-" &&
            <TextField
              label="Tram 24"
              placeholder="Tram 24"
              name="tram__24"
              defaultValue={initialValues['local_dataset']['tram__24']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__25'] !== "-" &&
            <TextField
              label="Tram 25"
              placeholder="Tram 25"
              name="tram__25"
              defaultValue={initialValues['local_dataset']['tram__25']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__26'] !== "-" &&
            <TextField
              label="Tram 26"
              placeholder="Tram 26"
              name="tram__26"
              defaultValue={initialValues['local_dataset']['tram__26']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__27'] !== "-" &&
            <TextField
              label="Tram 27"
              placeholder="Tram 27"
              name="tram__27"
              defaultValue={initialValues['local_dataset']['tram__27']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__28'] !== "-" &&
            <TextField
              label="Tram 28"
              placeholder="Tram 28"
              name="tram__28"
              defaultValue={initialValues['local_dataset']['tram__28']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__29'] !== "-" &&
            <TextField
              label="Tram 29"
              placeholder="Tram 29"
              name="tram__29"
              defaultValue={initialValues['local_dataset']['tram__29']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__30'] !== "-" &&
            <TextField
              label="Tram 30"
              placeholder="Tram 30"
              name="tram__30"
              defaultValue={initialValues['local_dataset']['tram__30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__31'] !== "-" &&
            <TextField
              label="Tram 31"
              placeholder="Tram 31"
              name="tram__31"
              defaultValue={initialValues['local_dataset']['tram__31']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__32'] !== "-" &&
            <TextField
              label="Tram 32"
              placeholder="Tram 32"
              name="tram__32"
              defaultValue={initialValues['local_dataset']['tram__32']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__33'] !== "-" &&
            <TextField
              label="Tram 33"
              placeholder="Tram 33"
              name="tram__33"
              defaultValue={initialValues['local_dataset']['tram__33']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__34'] !== "-" &&
            <TextField
              label="Tram 34"
              placeholder="Tram 34"
              name="tram__34"
              defaultValue={initialValues['local_dataset']['tram__34']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__35'] !== "-" &&
            <TextField
              label="Tram 35"
              placeholder="Tram 35"
              name="tram__35"
              defaultValue={initialValues['local_dataset']['tram__35']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__36'] !== "-" &&
            <TextField
              label="Tram 36"
              placeholder="Tram 36"
              name="tram__36"
              defaultValue={initialValues['local_dataset']['tram__36']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__37'] !== "-" &&
            <TextField
              label="Tram 37"
              placeholder="Tram 37"
              name="tram__37"
              defaultValue={initialValues['local_dataset']['tram__37']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__38'] !== "-" &&
            <TextField
              label="Tram 38"
              placeholder="Tram 38"
              name="tram__38"
              defaultValue={initialValues['local_dataset']['tram__38']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__39'] !== "-" &&
            <TextField
              label="Tram 39"
              placeholder="Tram 39"
              name="tram__39"
              defaultValue={initialValues['local_dataset']['tram__39']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__40'] !== "-" &&
            <TextField
              label="Tram 40"
              placeholder="Tram 40"
              name="tram__40"
              defaultValue={initialValues['local_dataset']['tram__40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__41'] !== "-" &&
            <TextField
              label="Tram 41"
              placeholder="Tram 41"
              name="tram__41"
              defaultValue={initialValues['local_dataset']['tram__41']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__42'] !== "-" &&
            <TextField
              label="Tram 42"
              placeholder="Tram 42"
              name="tram__42"
              defaultValue={initialValues['local_dataset']['tram__42']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__43'] !== "-" &&
            <TextField
              label="Tram 43"
              placeholder="Tram 43"
              name="tram__43"
              defaultValue={initialValues['local_dataset']['tram__43']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__44'] !== "-" &&
            <TextField
              label="Tram 44"
              placeholder="Tram 44"
              name="tram__44"
              defaultValue={initialValues['local_dataset']['tram__44']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__45'] !== "-" &&
            <TextField
              label="Tram 45"
              placeholder="Tram 45"
              name="tram__45"
              defaultValue={initialValues['local_dataset']['tram__45']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__46'] !== "-" &&
            <TextField
              label="Tram 46"
              placeholder="Tram 46"
              name="tram__46"
              defaultValue={initialValues['local_dataset']['tram__46']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__47'] !== "-" &&
            <TextField
              label="Tram 47"
              placeholder="Tram 47"
              name="tram__47"
              defaultValue={initialValues['local_dataset']['tram__47']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__48'] !== "-" &&
            <TextField
              label="Tram 48"
              placeholder="Tram 48"
              name="tram__48"
              defaultValue={initialValues['local_dataset']['tram__48']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__49'] !== "-" &&
            <TextField
              label="Tram 49"
              placeholder="Tram 49"
              name="tram__49"
              defaultValue={initialValues['local_dataset']['tram__49']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__50'] !== "-" &&
            <TextField
              label="Tram 50"
              placeholder="Tram 50"
              name="tram__50"
              defaultValue={initialValues['local_dataset']['tram__50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__51'] !== "-" &&
            <TextField
              label="Tram 51"
              placeholder="Tram 51"
              name="tram__51"
              defaultValue={initialValues['local_dataset']['tram__51']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__52'] !== "-" &&
            <TextField
              label="Tram 52"
              placeholder="Tram 52"
              name="tram__52"
              defaultValue={initialValues['local_dataset']['tram__52']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__53'] !== "-" &&
            <TextField
              label="Tram 53"
              placeholder="Tram 53"
              name="tram__53"
              defaultValue={initialValues['local_dataset']['tram__53']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__54'] !== "-" &&
            <TextField
              label="Tram 54"
              placeholder="Tram 54"
              name="tram__54"
              defaultValue={initialValues['local_dataset']['tram__54']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__55'] !== "-" &&
            <TextField
              label="Tram 55"
              placeholder="Tram 55"
              name="tram__55"
              defaultValue={initialValues['local_dataset']['tram__55']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__56'] !== "-" &&
            <TextField
              label="Tram 56"
              placeholder="Tram 56"
              name="tram__56"
              defaultValue={initialValues['local_dataset']['tram__56']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__57'] !== "-" &&
            <TextField
              label="Tram 57"
              placeholder="Tram 57"
              name="tram__57"
              defaultValue={initialValues['local_dataset']['tram__57']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

          {initialValues['local_dataset']['tram__58'] !== "-" &&
            <TextField
              label="Tram 58"
              placeholder="Tram 58"
              name="tram__58"
              defaultValue={initialValues['local_dataset']['tram__58']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
          }

            

            <h5>Tram transport activity</h5>

            <button type="button" onClick={handleShowTransportValues}>click</button>
            
            {initialValues['local_dataset']['transport_activity_tram__tram_1'] !== 0 &&

              <TextField
                label="Trans. activity: Tram 1"
                placeholder="million pkm/a Tram 1"
                name="transport_activity_tram__tram_1"
                sx={{ m:2 }}
                defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_1']}
                InputLabelProps={{ shrink: true }}
                classes={{ root: classes.customTextField }}
              />

            }
            {initialValues['local_dataset']['transport_activity_tram__tram_2'] !== 0 &&
             <TextField
              label="Trans. activity: Tram 2"
              placeholder="million pkm/a Tram 2"
              name="transport_activity_tram__tram_2"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_2']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />}

          {initialValues['local_dataset']['transport_activity_tram__tram_3'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 3"
              placeholder="million pkm/a Tram 3"
              name="transport_activity_tram__tram_3"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_3']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_4'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 4"
              placeholder="million pkm/a Tram 4"
              name="transport_activity_tram__tram_4"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_4']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_5'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 5"
              placeholder="million pkm/a Tram 5"
              name="transport_activity_tram__tram_5"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_5']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_6'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 6"
              placeholder="million pkm/a Tram 6"
              name="transport_activity_tram__tram_6"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_6']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_7'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 7"
              placeholder="million pkm/a Tram 7"
              name="transport_activity_tram__tram_7"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_7']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_8'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 8"
              placeholder="million pkm/a Tram 8"
              name="transport_activity_tram__tram_8"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_8']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_9'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 9"
              placeholder="million pkm/a Tram 9"
              name="transport_activity_tram__tram_9"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_9']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_10'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 10"
              placeholder="million pkm/a Tram 10"
              name="transport_activity_tram__tram_10"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_10']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_11'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 11"
              placeholder="million pkm/a Tram 11"
              name="transport_activity_tram__tram_11"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_11']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_12'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 12"
              placeholder="million pkm/a Tram 12"
              name="transport_activity_tram__tram_12"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_12']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_13'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 13"
              placeholder="million pkm/a Tram 13"
              name="transport_activity_tram__tram_13"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_13']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_14'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 14"
              placeholder="million pkm/a Tram 14"
              name="transport_activity_tram__tram_14"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_14']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_15'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 15"
              placeholder="million pkm/a Tram 15"
              name="transport_activity_tram__tram_15"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_15']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_16'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 16"
              placeholder="million pkm/a Tram 16"
              name="transport_activity_tram__tram_16"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_16']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_17'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 17"
              placeholder="million pkm/a Tram 17"
              name="transport_activity_tram__tram_17"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_17']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_18'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 18"
              placeholder="million pkm/a Tram 18"
              name="transport_activity_tram__tram_18"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_18']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_19'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 19"
              placeholder="million pkm/a Tram 19"
              name="transport_activity_tram__tram_19"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_19']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_20'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 20"
              placeholder="million pkm/a Tram 20"
              name="transport_activity_tram__tram_20"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_20']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_21'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 21"
              placeholder="million pkm/a Tram 21"
              name="transport_activity_tram__tram_21"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_21']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_22'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 22"
              placeholder="million pkm/a Tram 22"
              name="transport_activity_tram__tram_22"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_22']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_23'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 23"
              placeholder="million pkm/a Tram 23"
              name="transport_activity_tram__tram_23"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_23']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_24'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 24"
              placeholder="million pkm/a Tram 24"
              name="transport_activity_tram__tram_24"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_24']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_25'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 25"
              placeholder="million pkm/a Tram 25"
              name="transport_activity_tram__tram_25"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_25']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_26'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 26"
              placeholder="million pkm/a Tram 26"
              name="transport_activity_tram__tram_26"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_26']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_27'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 27"
              placeholder="million pkm/a Tram 27"
              name="transport_activity_tram__tram_27"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_27']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_28'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 28"
              placeholder="million pkm/a Tram 28"
              name="transport_activity_tram__tram_28"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_28']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_29'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 29"
              placeholder="million pkm/a Tram 29"
              name="transport_activity_tram__tram_29"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_29']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_30'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 30"
              placeholder="million pkm/a Tram 30"
              name="transport_activity_tram__tram_30"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_31'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 31"
              placeholder="million pkm/a Tram 31"
              name="transport_activity_tram__tram_31"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_31']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_32'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 32"
              placeholder="million pkm/a Tram 32"
              name="transport_activity_tram__tram_32"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_32']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_33'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 33"
              placeholder="million pkm/a Tram 33"
              name="transport_activity_tram__tram_33"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_33']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_34'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 34"
              placeholder="million pkm/a Tram "
              name="transport_activity_tram__tram_34"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_34']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_35'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 35"
              placeholder="million pkm/a Tram 35"
              name="transport_activity_tram__tram_35"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_35']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_36'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 36"
              placeholder="million pkm/a Tram 36"
              name="transport_activity_tram__tram_36"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_36']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_37'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 37"
              placeholder="million pkm/a Tram 37"
              name="transport_activity_tram__tram_37"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_37']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_38'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 38"
              placeholder="million pkm/a Tram 38"
              name="transport_activity_tram__tram_38"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_38']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_39'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 39"
              placeholder="million pkm/a Tram 39"
              name="transport_activity_tram__tram_"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_39']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_40'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 40"
              placeholder="million pkm/a Tram 40"
              name="transport_activity_tram__tram_40"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_41'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 41"
              placeholder="million pkm/a Tram 41"
              name="transport_activity_tram__tram_41"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_41']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_42'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 42"
              placeholder="million pkm/a Tram 42"
              name="transport_activity_tram__tram_42"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_42']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_43'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 43"
              placeholder="million pkm/a Tram 43"
              name="transport_activity_tram__tram_43"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_43']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_44'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 44"
              placeholder="million pkm/a Tram 44"
              name="transport_activity_tram__tram_44"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_44']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_45'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 45"
              placeholder="million pkm/a Tram 45"
              name="transport_activity_tram__tram_45"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_45']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_46'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 46"
              placeholder="million pkm/a Tram 46"
              name="transport_activity_tram__tram_46"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_46']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_47'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 47"
              placeholder="million pkm/a Tram 47"
              name="transport_activity_tram__tram_47"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_47']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_48'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 48"
              placeholder="million pkm/a Tram 48"
              name="transport_activity_tram__tram_48"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_48']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_49'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 49"
              placeholder="million pkm/a Tram 49"
              name="transport_activity_tram__tram_49"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_49']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_50'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 50"
              placeholder="million pkm/a Tram 50"
              name="transport_activity_tram__tram_50"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_51'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 51"
              placeholder="million pkm/a Tram 51"
              name="transport_activity_tram__tram_51"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_51']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_52'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 52"
              placeholder="million pkm/a Tram 52"
              name="transport_activity_tram__tram_52"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_52']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_53'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 53"
              placeholder="million pkm/a Tram 53"
              name="transport_activity_tram__tram_53"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_53']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_54'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 54"
              placeholder="million pkm/a Tram 54"
              name="transport_activity_tram__tram_54"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_54']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_55'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 55"
              placeholder="million pkm/a Tram 55"
              name="transport_activity_tram__tram_55"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_55']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_56'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 56"
              placeholder="million pkm/a Tram 56"
              name="transport_activity_tram__tram_56"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_56']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_57'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 57"
              placeholder="million pkm/a Tram 57"
              name="transport_activity_tram__tram_57"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_57']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />
            }

          {initialValues['local_dataset']['transport_activity_tram__tram_58'] !== 0 && 
            <TextField
              label="Trans. activity: Tram 58"
              placeholder="million pkm/a Tram 58"
              name="transport_activity_tram__tram_58"
              defaultValue={initialValues['local_dataset']['transport_activity_tram__tram_58']}
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
              name="passenger_km_per_capita_train"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Occupancy rate</h5>

            <TextField
              label="Passengers/ vehicle"
              placeholder="passengers/ vehicle"
              name="occupancy_rate_train"
              defaultValue={initialValues['local_dataset']['occupancy_rate_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef diesel train (gCO2e/train-km)</h5>

            <TextField
              label="Ef diesel train"
              placeholder="gCO2e/train-km"
              name="ef_diesel_train"
              defaultValue={initialValues['local_dataset']['ef_diesel_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Energy consumption electric train (kWh/train-km)</h5>

            <TextField
              label="Energy consumption"
              placeholder="kWh/train-km"
              name="energy_consumption_electric_train"
              defaultValue={initialValues['local_dataset']['energy_consumption_electric_train']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Share of electric engines %</h5>

            <TextField
              label="Electric engines"
              placeholder="%"
              name="share_of_electric_engines"
              defaultValue={initialValues['local_dataset']['share_of_electric_engines']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change %, passenger train (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_passenger_train__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_passenger_train__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_passenger_train__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_passenger_train__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_passenger_train__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_passenger_train__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Control factor, passenger train</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_passenger_train__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_passenger_train__city"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_passenger_train__suburban"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_passenger_train__town"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_passenger_train__rural"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__rural']}
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
              name="vehicle_km_per_capita_rail_freight"
              defaultValue={initialValues['local_dataset']['vehicle_km_per_capita_rail_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef diesel (gCo2e/vkm), rail freight</h5>

            <TextField
              label="Diesel rail freight"
              placeholder="gCo2e/vkm"
              name="ef_diesel_rail_freight"
              defaultValue={initialValues['local_dataset']['ef_diesel_rail_freigh']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Energy consumption (kWh/vkm), electric rail freight</h5>

            <TextField
              label="Energy consmption"
              placeholder="kWh/vkm"
              name="energy_consumption_electric_rail_freight"
              defaultValue={initialValues['local_dataset']['energy_consumption_electric_rail_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change rail freight (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_rail_freight__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_rail_freight__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_rail_freight__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_rail_freight__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_rail_freight__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_rail_freight__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Correction factor, rail freight</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_rail_freight__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_rail_freight__city"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_rail_freight__suburban"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_rail_freight__town"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_rail_freight__rural"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__rural']}
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
              defaultValue={initialValues['local_dataset']['average_load_rail_freight']}
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
              name="vehicle_km_per_capita_road_freight"
              defaultValue={initialValues['local_dataset']['vehicle_km_per_capita_road_freight']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Road transport emission factor (gCO22/vkm)</h5>

            <TextField
              label="Emission factor"
              placeholder="gCO22/vkm"
              name="road_transport_emission_factor"
              defaultValue={initialValues['local_dataset']['road_transport_emission_factor']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change %, road freight (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_road_freight__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_road_freight__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_road_freight__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_road_freight__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_road_freight__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_road_freight__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Control factor, road freight</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_road_freight__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_road_freight__metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_road_freight__city"
              defaultValue={initialValues['local_dataset']['cf_road_freight__city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_road_freight__suburban"
              defaultValue={initialValues['local_dataset']['cf_road_freight__suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_road_freight__town"
              defaultValue={initialValues['local_dataset']['cf_road_freight__town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_road_freight__rural"
              defaultValue={initialValues['local_dataset']['cf_road_freight__rural']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Propulsion share %, road freight</h5>

             <TextField
              label="Petrol including hybrids"
              placeholder="%"
              name="propulsion_share_road_freight__petrol_including_hybrids"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__petrol_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Lpg"
              placeholder="%"
              name="propulsion_share_road_freight__lpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel including hybrids"
              placeholder="%"
              name="propulsion_share_road_freight__diesel_including_hybrids"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__diesel_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Natural gas"
              placeholder="%"
              name="propulsion_share_road_freight__natural_gas"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__natural_gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="%"
              name="propulsion_share_road_freight__electricity"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Alternative energy"
              placeholder="%"
              name="propulsion_share_road_freight__alternative_energy"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__alternative_energy']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="%"
              name="propulsion_share_road_freight__bioethanol"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Biodiesel"
              placeholder="%"
              name="propulsion_share_road_freight__biodiesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="%"
              name="propulsion_share_road_freight__cng"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef street driving, road freight (gCO2e/vkm)</h5>

            <TextField
              label="Petrol including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__petrol_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__petrol_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__lpg"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__diesel_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__diesel_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Natural gas"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__natural_gas"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__natural_gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__electricity"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Alternative energy"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__alternative_energy"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__alternative_energy']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__bioethanol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__biodiesel"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_street_driving_road_freight__cng"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef road driving, road freight (gCO2e/vkm)</h5>

            <TextField
              label="Petrol including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__petrol_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__petrol_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <TextField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__lpg"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__lpg']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Diesel including hybrids"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__diesel_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__diesel_including_hybrids']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Natural gas"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__natural_gas"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__natural_gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Electricity"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__electricity"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Alternative energy"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__alternative_energy"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__alternative_energy']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__bioethanol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__bioethanol']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__biodiesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__biodiesel']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="ef_road_driving_road_freight__cng"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__cng']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Share %: road driving road fright</h5>

            <TextField
              label="Metropolitan center"
              placeholder="%"
              name="share_road_driving_road_freight__metropolitan_center"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__metropolitan_center']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Urban"
              placeholder="%"
              name="share_road_driving_road_freight__urban"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__urban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="%"
              name="share_road_driving_road_freight__suburban"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__suburban']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="%"
              name="share_road_driving_road_freight__town"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__town']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="%"
              name="share_road_driving_road_freight__rural"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__rural']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Average load (tonnes), road freight</h5>

            <TextField
              label="Average load"
              placeholder="Tonnes"
              name="average_load_road_freight"
              defaultValue={initialValues['local_dataset']['average_load_road_freight']}
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
              name="vehicle_km_per_capita_waterways_transport"
              defaultValue={initialValues['local_dataset']['vehicle_km_per_capita_waterways_transport']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Ef inland waterways (gCO2e/vkm)</h5>

            <TextField
              label="Ef inland waterways"
              placeholder="gCO2e/vkm"
              name="ef_inland_waterways"
              defaultValue={initialValues['local_dataset']['ef_inland_waterways']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change %, inland waterways (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_waterways_transport__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_waterways_transport__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_waterways_transport__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_waterways_transport__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_waterways_transport__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_waterways_transport__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Correction factor waterways transport</h5>

            <TextField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="cf_waterways_transport__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__metropolitan']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="City"
              placeholder="City"
              name="cf_waterways_transport__city"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__city']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Suburban"
              placeholder="Suburban"
              name="cf_waterways_transport__suburban"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__suburban']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Town"
              placeholder="Town"
              name="cf_waterways_transport__town"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__town']}
              disabled
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Rural"
              placeholder="Rural"
              name="cf_waterways_transport__rural"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__rural']}
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
              defaultValue={initialValues['local_dataset']['average_load_inland_waterways']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Country land area</h5>

            <TextField
              label="Country land area"
              placeholder="Radius"
              name="country_land_area"
              defaultValue={initialValues['local_dataset']['country_land_area']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Factor inclusion</h5>

            <TextField
              label="Factor inclusion"
              placeholder="Factor inclusion"
              name="factor_inclusion"
              defaultValue={initialValues['local_dataset']['factor_inclusion']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual change vehicle efficincy (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_change_vehicle_efficiency__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_vehicle_efficiency__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_change_vehicle_efficiency__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_vehicle_efficiency__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_change_vehicle_efficiency__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_vehicle_efficiency__2041_50']}
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
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Forestland, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_forestland_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland_annual_change__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_forestland_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland_annual_change__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_forestland_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland_annual_change__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Cropland</h5>

             <TextField
              label="LUC Cropland"
              placeholder="tCO2e/a"
              name="land_use_baseline_cropland"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Cropland, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_cropland_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland_annual_change__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_cropland_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland_annual_change__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_cropland_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland_annual_change__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>LUC baseline: Grassland</h5>

             <TextField
              label="LUC Grassland"
              placeholder="tCO2e/a"
              name="land_use_baseline_grassland"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Grassland, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_grassland_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland_annual_change__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_grassland_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland_annual_change__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_grassland_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland_annual_change__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Wetlands</h5>

             <TextField
              label="LUC Wetlands"
              placeholder="tCO2e/a"
              name="land_use_baseline_wetlands"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Wetlands, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_wetlands_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands_annual_change__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_wetlands_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands_annual_change__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_wetlands_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands_annual_change__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Settlements</h5>

             <TextField
              label="LUC Settlements"
              placeholder="tCO2e/a"
              name="land_use_baseline_settlements"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Settlements, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_settlements_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements_annual_change__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_settlements_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements_annual_change__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_settlements_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements_annual_change__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Other land</h5>

             <TextField
              label="LUC Other land"
              placeholder="tCO2e/a"
              name="land_use_baseline_other_land"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>LUC baseline: Other land, Annual change (decades)</h5>

             <TextField
              label="2021-30"
              placeholder="%"
              name="land_use_baseline_other_land_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land_annual_change__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="land_use_baseline_other_land_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land_annual_change__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="land_use_baseline_other_land_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land_annual_change__2041_50']}
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
              name="cropland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Grassland to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Wetland to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlement to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Other land to forestland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Grassland to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Wetland to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlement to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Other land to cropland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Wetland to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlement to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Other land to grassland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Land to peat extraction (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="land_to_peat_extraction__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="land_to_peat_extraction__belowground_biomass"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="land_to_peat_extraction__dead_wood"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="land_to_peat_extraction__litter"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="land_to_peat_extraction__mineral_soil"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="land_to_peat_extraction__organic_soil"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Peatland restoration (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="peatland_restoration__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['peatland_restoration__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="peatland_restoration__belowground_biomass"
              defaultValue={initialValues['local_dataset']['peatland_restoration__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="peatland_restoration__dead_wood"
              defaultValue={initialValues['local_dataset']['peatland_restoration__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="peatland_restoration__litter"
              defaultValue={initialValues['local_dataset']['peatland_restoration__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="peatland_restoration__mineral_soil"
              defaultValue={initialValues['local_dataset']['peatland_restoration__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="peatland_restoration__organic_soil"
              defaultValue={initialValues['local_dataset']['peatland_restoration__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to other wetland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_other_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_other_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_other_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_other_wetland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_other_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_other_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland to other wetland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_other_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_other_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_other_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_other_wetland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_other_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_other_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Grassland to other wetland (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_other_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_other_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_other_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_other_wetland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_other_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_other_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Forestland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Grassland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Wetland to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Other land to settlement (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="otherland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="otherland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="otherland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="otherland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="otherland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="otherland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Forestland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="forestland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Cropland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Grassland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Wetland to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Settlement to other land (t C/ha yr)</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__organic_soil']}
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
              name="forestland_remaining_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="forestland_remaining_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="forestland_remaining_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="forestland_remaining_forestland__litter"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="forestland_remaining_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="forestland_remaining_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Cropland remaining cropland</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="cropland_remaining_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="cropland_remaining_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="cropland_remaining_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="cropland_remaining_cropland__litter"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="cropland_remaining_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="cropland_remaining_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Grassland remaining grassland</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="grassland_remaining_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="grassland_remaining_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="grassland_remaining_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="grassland_remaining_grassland__litter"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="grassland_remaining_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="grassland_remaining_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Peat extraction remaining peat extraction</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="peat_extraction_remaining_peat_extraction__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="peat_extraction_remaining_peat_extraction__belowground_biomass"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="peat_extraction_remaining_peat_extraction__dead_wood"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="peat_extraction_remaining_peat_extraction__litter"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="peat_extraction_remaining_peat_extraction__mineral_soil"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="peat_extraction_remaining_peat_extraction__organic_soil"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>Wetlands remaining wetlands</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="wetland_remaining_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="wetland_remaining_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="wetland_remaining_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="wetland_remaining_wetland__litter"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="wetland_remaining_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="wetland_remaining_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__organic_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Settlements remaining settlements</h5>

            <TextField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="settlement_remaining_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__aboveground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="settlement_remaining_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__belowground_biomass']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Dead wood"
              placeholder="Dead wood"
              name="settlement_remaining_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__dead_wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Litter"
              placeholder="Litter"
              name="settlement_remaining_settlement__litter"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__litter']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="settlement_remaining_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__mineral_soil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Organic soil"
              placeholder="Organic soil"
              name="settlement_remaining_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__organic_soil']}
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
              name="emission_factor_for_energy_carrier__gas"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier__oil"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier__coal"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier__peat"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier__wood"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewables"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier__renewable"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="District heating"
              placeholder="gCO2/kWh"
              name="emission_factor_for_energy_carrier__district_heating"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__district_heating']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual demolition rate of residential buildings (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_demolition_rate_of_residential_buildings__2021_30"
              defaultValue={initialValues['local_dataset']['annual_demolition_rate_of_residential_buildings__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_demolition_rate_of_residential_buildings__2031_40"
              defaultValue={initialValues['local_dataset']['annual_demolition_rate_of_residential_buildings__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_demolition_rate_of_residential_buildings__2041_50"
              defaultValue={initialValues['local_dataset']['annual_demolition_rate_of_residential_buildings__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual demolition rate of commercial buildings (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_demolition_of_commercial_buildings__2021_30"
              defaultValue={initialValues['local_dataset']['annual_demolition_of_commercial_buildings__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_demolition_of_commercial_buildings__2031_40"
              defaultValue={initialValues['local_dataset']['annual_demolition_of_commercial_buildings__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_demolition_of_commercial_buildings__2041_50"
              defaultValue={initialValues['local_dataset']['annual_demolition_of_commercial_buildings__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class appartments (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a_class_apartments__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_apartments__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a_class_apartments__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_apartments__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a_class_apartments__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_apartments__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class appartments (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b_class_apartments__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_apartments__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b_class_apartments__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_apartments__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b_class_apartments__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_apartments__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class terraced units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a_class_terraced_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_terraced_units__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a_class_terraced_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_terraced_units__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a_class_terraced_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_terraced_units__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class terraced units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b_class_terraced_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_terraced_units__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b_class_terraced_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_terraced_units__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b_class_terraced_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_terraced_units__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class semi detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a_class_semi_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_semi_detached_units__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a_class_semi_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_semi_detached_units__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a_class_semi_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_semi_detached_units__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class semi detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b_class_semi_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_semi_detached_units__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b_class_semi_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_semi_detached_units__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b_class_semi_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_semi_detached_units__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of A-class detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_a_class_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_detached_units__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_a_class_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_detached_units__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_a_class_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_detached_units__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of B-class detached units (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_b_class_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_detached_units__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_b_class_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_detached_units__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_b_class_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_detached_units__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Annual increase of commercial buildings (decades)</h5>

            <TextField
              label="2021-30"
              placeholder="%"
              name="annual_increase_commercial_buildings__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_commercial_buildings__2021_30']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2031-40"
              placeholder="%"
              name="annual_increase_commercial_buildings__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_commercial_buildings__2031_40']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="2041-50"
              placeholder="%"
              name="annual_increase_commercial_buildings__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_commercial_buildings__2041_50']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Floor area per residential unit (m2)</h5>

            <TextField
              label="Average m2"
              placeholder="Average m2"
              name="floor_area_per_residential_unit__average"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__average']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Appartment m2"
              placeholder=""
              name="floor_area_per_residential_unit__apartment"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__apartment']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Terraced appartment"
              placeholder=""
              name="floor_area_per_residential_unit__terraced"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__terraced']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Semi-detached"
              placeholder=""
              name="floor_area_per_residential_unit__semi_detached"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__semi_detached']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Detached"
              placeholder=""
              name="floor_area_per_residential_unit__detached"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__detached']}
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
              name="average_total_energy_use__all_residential"
              defaultValue={initialValues['local_dataset']['average_total_energy_use__all_residential']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

           <Divider sx={{m:2}}/>

            <h4>Buildings: End use of energy residential buildings</h4>
            
            <TextField
              label="Space heating"
              placeholder="%"
              name="end_use_of_energy_residential_buildings__space_heating"
              defaultValue={initialValues['local_dataset']['end_use_of_energy_residential_buildings__space_heating']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Water heating"
              placeholder="%"
              name="end_use_of_energy_residential_buildings__water_heating"
              defaultValue= {initialValues['local_dataset']['end_use_of_energy_residential_buildings__water_heating']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Lights &amp; appliences"
              placeholder="%"
              name="end_use_of_energy_residential_buildings__lights_and_appliances"
              defaultValue= {initialValues['local_dataset']['end_use_of_energy_residential_buildings__lights_and_appliances']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Pumps &amp; fans"
              placeholder="%"
              name="end_use_of_energy_residential_buildings__pumps_and_fans"
              defaultValue= {initialValues['local_dataset']['end_use_of_energy_residential_buildings__pumps_and_fans']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>A-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="a_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>B-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__electricity"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__gas"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__oil"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__coal"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__peat"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__wood"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__renewable"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="b_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>C-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="c_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>D-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="d_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['e-rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['e-rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['e-rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>E-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="e-rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['e-rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>F-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="f_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated appartment</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>G-rated detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="g_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing appartments</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_apartments__electricity"
              defaultValue= {initialValues['local_dataset']['existing_apartments__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_apartments__gas"
              defaultValue= {initialValues['local_dataset']['existing_apartments__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_apartments__oil"
              defaultValue= {initialValues['local_dataset']['existing_apartments__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_apartments__coal"
              defaultValue= {initialValues['local_dataset']['existing_apartments__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_apartments__peat"
              defaultValue= {initialValues['local_dataset']['existing_apartments__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_apartments-wood"
              defaultValue= {initialValues['local_dataset']['existing_apartments__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_apartments__renewable"
              defaultValue= {initialValues['local_dataset']['existing_apartments__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_apartments__heat"
              defaultValue= {initialValues['local_dataset']['existing_apartments__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing terraced</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['existing_terraced__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_terraced__gas"
              defaultValue= {initialValues['local_dataset']['existing_terraced__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_terraced__oil"
              defaultValue= {initialValues['local_dataset']['existing_terraced__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_terraced__coal"
              defaultValue= {initialValues['local_dataset']['existing_terraced__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_terraced__peat"
              defaultValue= {initialValues['local_dataset']['existing_terraced__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_terraced__wood"
              defaultValue= {initialValues['local_dataset']['existing_terraced__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['existing_terraced__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_terraced__heat"
              defaultValue= {initialValues['local_dataset']['existing_terraced__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing semi-detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing detached</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="existing_detached__electricity"
              defaultValue= {initialValues['local_dataset']['existing_detached__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="existing_detached__gas"
              defaultValue= {initialValues['local_dataset']['existing_detached__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="existing_detached__oil"
              defaultValue= {initialValues['local_dataset']['existing_detached__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="existing_detached-coal"
              defaultValue= {initialValues['local_dataset']['existing_detached__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="existing_detached__peat"
              defaultValue= {initialValues['local_dataset']['existing_detached__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="existing_detached-wood"
              defaultValue= {initialValues['local_dataset']['existing_detached__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="existing_detached__renewable"
              defaultValue= {initialValues['local_dataset']['existing_detached__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="existing_detached__heat"
              defaultValue= {initialValues['local_dataset']['existing_detached__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Retail</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_retail__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Health</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_health__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Hospitality</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_hospitality__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Offices</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_offices__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Industrial</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_industrial__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>Existing building: Warehouses</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_exiting_building_warehouses__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>New building: Retail</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retails__peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_retail__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>New building: Health</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_health__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

             <h5>New building: Hospitality</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_hospitality__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>New building: Offices</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices-peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_offices__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <h5>New building: Industrial</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial-peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_industrial__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__heat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />


            <h5>New building: Warehouses</h5>

            <TextField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__electricity']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__gas']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__oil']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__coal']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses-peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__peat']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__wood']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__renewable']}
              sx={{ m:2 }}
              InputLabelProps={{ shrink: true }}
              classes={{ root: classes.customTextField }}
            />

            <TextField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="ec_new_building_warehouses__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__heat']}
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