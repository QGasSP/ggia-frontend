 import React, { useState } from 'react';
 import { Formik, Form } from "formik";
 import urlPrefix from '../../Config';
 import { useNavigate } from "react-router-dom";
 import axios from 'axios';
 import {Grid, Button, Divider, Container, Alert, Box, Typography, CircularProgress } from '@mui/material'
 import '../../css/localdataset.css';
 import { TimeToLeave, DirectionsBus, Subway, Tram, Train, BusinessOutlined, Warning } from '@mui/icons-material';
 import { makeStyles } from '@material-ui/styles';
 import InputField from './InputField';
 import MultiLineInputField from './MultiLineInputField';
 import BackToTop from'./BackToTopButton';

 export const CreateLocaldataset = () => {

  // Retrieve default values from local storage
  const localDatasetBaseline = localStorage.getItem("localDatasetBaselineData");
  const initialValues = { "local_dataset": JSON.parse(localDatasetBaseline) };
  const [error, setError] = React.useState();
  const [loadingStyles, setLoadingStyle] = React.useState({ display: "none" });
  const navigate = useNavigate();

  initialValues['local_dataset']['cf_bus__city'] = 1;
  initialValues['local_dataset']['cf_bus__metropolitan'] = 1;
  initialValues['local_dataset']['cf_bus__rural'] = 1;
  initialValues['local_dataset']['cf_bus__suburban'] = 1;
  initialValues['local_dataset']['cf_bus__town'] = 1;

  initialValues['local_dataset']['cf_car__city'] = 1;
  initialValues['local_dataset']['cf_car__metropolitan'] = 1;
  initialValues['local_dataset']['cf_car__rural'] = 1;
  initialValues['local_dataset']['cf_car__suburban'] = 1;
  initialValues['local_dataset']['cf_car__town'] = 1;

  initialValues['local_dataset']['ef_diesel_car'] = 0;
  initialValues['local_dataset']['ef_petrol_car'] = 0;

  const [busStreetDrivingMetroplitan, setBusStreetDrivingMetroplitan] = useState(100 - initialValues['local_dataset']['share_road_driving_buses__metropolitan_center'].toFixed(1));
  const [busStreetDrivingUrban, setBusStreetDrivingUrban] = useState(100 - initialValues['local_dataset']['share_road_driving_buses__urban'].toFixed(1));
  const [busStreetDrivingSuburban, setBusStreetDrivingSuburban] = useState(100 - initialValues['local_dataset']['share_road_driving_buses__suburban'].toFixed(1));
  const [busStreetDrivingTown, setBusStreetDrivingTown] = useState(100 - initialValues['local_dataset']['share_road_driving_buses__town'].toFixed(1));
  const [busStreetDrivingRural, setBusStreetDrivingRural] = useState(100 - initialValues['local_dataset']['share_road_driving_buses__rural'].toFixed(1));

  const [carStreetDrivingMetroplitan, setCarStreetDrivingMetroplitan] = useState(100 - initialValues['local_dataset']['share_road_driving_car__metropolitan_center'].toFixed(1));
  const [carStreetDrivingUrban, setCarStreetDrivingUrban] = useState(100 - initialValues['local_dataset']['share_road_driving_car__urban'].toFixed(1));
  const [carStreetDrivingSuburban, setCarStreetDrivingSuburban] = useState(100 - initialValues['local_dataset']['share_road_driving_car__suburban'].toFixed(1));
  const [carStreetDrivingTown, setCarStreetDrivingTown] = useState(100 - initialValues['local_dataset']['share_road_driving_car__town'].toFixed(1));
  const [carStreetDrivingRural, setCarStreetDrivingRural] = useState(100 - initialValues['local_dataset']['share_road_driving_car__rural'].toFixed(1));
  const tramRows = [];
  const metroRows = [];
  for (let i = 1; i < 59; i++) {
    if(initialValues['local_dataset'][`tram__${i}`] == '-' && i != 1){
      break;
    }
    tramRows.push(i);
  }
  const [trams, setTrams] = useState(tramRows);
  const addTram = () => {
    setTrams([...trams, trams.length + 1]);
  }

  const submitNewEntry = async ( values ) => {

    if (window.confirm("Are you sure you want to submit?")){
      setLoadingStyle({ display: "block" });

    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    try {
        await axios.post(urlPrefix + "/api/v1/local-dataset/export", values, headers);
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
      setLoadingStyle({ display: "none" });
      navigate("../../StartPage.jsx", { replace: true });
      window.alert("Local dataset has been succesfully created!");
    }
    else {
      return false;
    }
  };

   // material ui themes
  const useTheme = makeStyles({
    'localDsTable':{
      paddingLeft: "20px",
      "& td, th":{
        width: '180px',
        textAlign: 'center'
      }
    }
  })
  const classes = useTheme();

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
        Replace the default value with the most accurate information that You have available. Scenarios are inserted as annual change percentage (one percentage per decade).
        <br/>
        Do not forget to save the data you entered and make sure to double check the data before submitting.
        </Typography>
      </Alert>
      { loadingStyles === "block" &&
        <div className="loading-btn-local-dataset">
          <CircularProgress label="loading" style={loadingStyles} />
        </div>
      }
    </Box>

      <div id="links-to-modules">
        <a href='#energy-localdataset'>Energy</a>
        <a href='#transport-localdataset'>Transport</a>
        <a href='#luc-localdataset'>Land-use change</a>
        <a href='#buildings-localdataset'>Buildings</a>
      </div>

     <Formik
      initialValues = {initialValues} 
      onSubmit= { async ( values ) => {
        submitNewEntry(values)
      }}
      validate={( values ) => {
        const requiredError = "Field is required";
        const nameError = "Dataset name has to be unique";
        const errors = {};
        if (!values.local_dataset.dataset_name) {
          errors.dataset_name = requiredError;
        } else if ( values.local_dataset.dataset_name === initialValues.local_dataset.dataset_name ) {
          errors.dataset_name = nameError;
        }
        if (!values.local_dataset.dataset_description) {
          errors.dataset_description = requiredError;
        }
        return errors;
      }}
    >
      {({ touched, errors, initialValues, handleChange, handleBlur }) => {
       {

        for (let i = 2; i <= 7; i++) {

          metroRows.push(
            <tr>
                <td>
                  <InputField
                      label={`Metro ${i}`}
                      placeholder={`Metro ${i}`}
                      name={`local_dataset.metro__${i}`}
                      defaultValue={initialValues['local_dataset'][`metro__${i}`] }
                      style={{ width: 180}}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
                </td>
                <td>
                <InputField
                  label={`${i}. metro pkm/a`}
                  placeholder={`${i}. metro pkm/a`}
                  name={`local_dataset.transport_activity_metro__metro_${i}`}
                  defaultValue={initialValues['local_dataset'][`transport_activity_metro__metro_${i}`].toFixed(2) }
                  style={{ width: 180}}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                </td>
              </tr>
          );
        }
       }
        return (
        
        <Form className="create-localdataset">
          { 
          <div>
          <h5>Name the dataset according to the city, town, municipality, region or territory in concern. A new dataset can be later found in the tool menu by this name.</h5>
            <InputField
              placeholder="Enter name"
              label="Dataset name"
              name="local_dataset.dataset_name"
              defaultValue={initialValues['local_dataset']['dataset_name'] }
              onChange={handleChange}
              onBlur={handleBlur}
              required={true}
            />
            {( errors.dataset_name || touched.dataset_name ) && <div className="error-validation"><Warning sx={{mr:1, ml:0}} fontSize='small' />{errors.dataset_name}</div>}

          <br/>

          <h5>Describe the area and the sources of the new dataset with 3–5 sentences.</h5>
           
           <MultiLineInputField
             placeholder="Enter description"
             label="Dataset description"
             name="local_dataset.dataset_description"
             defaultValue={initialValues['local_dataset']['dataset_description']}
             onChange={handleChange}
             onBlur={handleBlur}
             required={true}
            />
            {( errors.dataset_description || touched.dataset_description ) && <div className="error-validation"><Warning sx={{mr:1, ml: 0}} fontSize='small'/>{errors.dataset_description}</div>}
         <br/>

            <h5>Expected annual change of population % (decades)
            </h5>
            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_population__2021_30"
              defaultValue= {initialValues['local_dataset']['annual_change_population__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_population__2031_40"
              defaultValue= {initialValues['local_dataset']['annual_change_population__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />
            
            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_population__2041_50"
              defaultValue= {initialValues['local_dataset']['annual_change_population__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>
          <Divider sx={{m: 3}}/>

            <h4 id='energy-localdataset'>
              Energy
            </h4>

            <h5>Grid electricity emission factor (kgCO2e/kWh)</h5>
            
            <InputField
              label="GE emission factor"
              placeholder="kgCO2e/kWh"
              name="local_dataset.grid_electricity_emission_factor"
              defaultValue= {initialValues['local_dataset']['grid_electricity_emission_factor'].toFixed(1)}
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Expected annual change of grid electricity emission factor % (decades)</h5>
              
              <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_grid_electricity_ef__2021_30"
              defaultValue= {initialValues['local_dataset']['annual_change_grid_electricity_ef__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

              <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_grid_electricity_ef__2031_40"
              defaultValue= {initialValues['local_dataset']['annual_change_grid_electricity_ef__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_grid_electricity_ef__2041_50"
              defaultValue= {initialValues['local_dataset']['annual_change_grid_electricity_ef__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>District heating emission factor</h5>

            <InputField
              label="gCO2/kWh"
              placeholder="gCO2/kWh"
              name="local_dataset.district_heating_emission_factor"
              defaultValue= {initialValues['local_dataset']['district_heating_emission_factor'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Expected annual change of district electricity heating emission factor (decades)</h5>
              
              <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_district_heating_ef__2021_30"
              defaultValue= {initialValues['local_dataset']['annual_change_district_heating_ef__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

              <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_district_heating_ef__2031_40"
              defaultValue= {initialValues['local_dataset']['annual_change_district_heating_ef__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_district_heating_ef__2041_50"
              defaultValue= {initialValues['local_dataset']['annual_change_district_heating_ef__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>
          <Divider sx={{m: 3}}/>
            <h4 id='transport-localdataset'>Transport: bus {" "}
              <DirectionsBus/>
            </h4>
            <h5>Passenger km per capita bus</h5>

            <InputField
              label="Pkm/(capita, a)"
              placeholder="pkm/(capita, a)"
              name="local_dataset.passenger_km_per_capita_bus"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_bus'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Average occupancy rate bus</h5>

            <InputField
              label="Passengers/ vehicle"
              placeholder="Passengers/ vehicle"
              name="local_dataset.occupancy_rate_bus"
              defaultValue={initialValues['local_dataset']['occupancy_rate_bus'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />
            
          
          <br/>

            <h5>Expected annual change in bus transport</h5>

            <InputField
              label="2020-30"
              placeholder="%"
              name="local_dataset.annual_change_bus__2020_30"
              defaultValue={initialValues['local_dataset']['annual_change_bus__2020_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_bus__2030_40"
              defaultValue={initialValues['local_dataset']['annual_change_bus__2030_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_bus__2040_50"
              defaultValue={initialValues['local_dataset']['annual_change_bus__2040_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <br/>

            <h5>Propulsion share % bus</h5>

            <InputField
              label="Petrol"
              placeholder="%"
              name="local_dataset.propulsion_share_bus__petrol"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__petrol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="LPG"
              placeholder="%"
              name="local_dataset.propulsion_share_bus__lpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__lpg'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel"
              placeholder="%"
              name="local_dataset.propulsion_share_bus__diesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__diesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="CNG"
              placeholder="%"
              name="local_dataset.propulsion_share_bus__cng"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__cng'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Electricity"
              placeholder="%"
              name="local_dataset.propulsion_share_bus__electricity"
              defaultValue={initialValues['local_dataset']['propulsion_share_bus__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Emission factor for street driving, bus (gCO2e/vkm)</h5>

            <InputField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_bus__petrol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_bus__petrol'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="LPG"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_bus__lpg"
               defaultValue={initialValues['local_dataset']['ef_street_driving_bus__lpg'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_bus__diesel"
               defaultValue={initialValues['local_dataset']['ef_street_driving_bus__diesel'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="CNG"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_bus__cng"
              defaultValue={initialValues['local_dataset']['ef_street_driving_bus__cng'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Electricity"
              placeholder="kWh/vkm"
              name="local_dataset.electricity_consumption_street_driving_bus__electricity"
              defaultValue={initialValues['local_dataset']['electricity_consumption_street_driving_bus__electricity'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Emission factor for road driving, bus (gCO2e/vkm)</h5>
            <InputField
              label="Petrol"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_bus__petrol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__petrol'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_bus__lpg"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__lpg'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_bus__diesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__diesel'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_bus__cng"
              defaultValue={initialValues['local_dataset']['ef_road_driving_bus__cng'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Electricity"
              placeholder="kWh/vkm"
              name="local_dataset.electricity_consumption_road_driving_bus__electricity"
              defaultValue={initialValues['local_dataset']['electricity_consumption_road_driving_bus__electricity'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Projected share % of electric buses (in 5-year steps)</h5>

            <InputField
              label="2020"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2020"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2020'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2025"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2025"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2025'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2030"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2030"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2030'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2035"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2035"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2035'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2040"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2040"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2040'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2045"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2045"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2045'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2050"
              placeholder="%"
              name="local_dataset.share_of_electric_buses__2050"
              defaultValue={initialValues['local_dataset']['share_of_electric_buses__2050'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>
          <div className='input-field'>
            <Alert severity='info'>
              <Typography variant="body1">
              Describe the driving profile in metropolitan, urban, suburban and rural areas as well as in towns by estimating the shares of road driving and street driving.
              </Typography>
            </Alert>
          </div>
            <h5>Driving profile: Share of road driving in the area</h5>

            <table className={classes.localDsTable}>
              <thead>
                <tr>
                  <th>
                    Area
                  </th>
                  <th>
                    Road driving (%)
                  </th>
                  <th>
                    Street driving (%)
                  </th>
                  <th>
                    Total (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                      Metropolitan centre
                    </td>
                    <td>
                      <InputField
                        label="Metropolitan center"
                        placeholder="%"
                        name="local_dataset.share_road_driving_buses__metropolitan_center"
                        defaultValue={initialValues['local_dataset']['share_road_driving_buses__metropolitan_center'].toFixed(1) }
                        style = {{width: 180}} 
                        onChange={e => {handleChange(e); setBusStreetDrivingMetroplitan(100 - e.target.value)}}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      {busStreetDrivingMetroplitan}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Urban
                    </td>
                    <td>
                      <InputField
                        label="Urban"
                        placeholder="%"
                        name="local_dataset.share_road_driving_buses__urban"
                        defaultValue={initialValues['local_dataset']['share_road_driving_buses__urban'].toFixed(1) }
                        style = {{width: 180}} 
                        onChange={e => {handleChange(e); setBusStreetDrivingUrban(100 - e.target.value)}}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      {busStreetDrivingUrban}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Suburban
                    </td>
                    <td>
                    <InputField
                      label="Suburban"
                      placeholder="%"
                      name="local_dataset.share_road_driving_buses__suburban"
                      defaultValue={initialValues['local_dataset']['share_road_driving_buses__suburban'].toFixed(1) }
                      style = {{width: 180}}
                      onChange={e => {handleChange(e); setBusStreetDrivingSuburban(100 - e.target.value)}}
                      onBlur={handleBlur}
                    />
                    </td>
                    <td>
                      {busStreetDrivingSuburban}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Town
                    </td>
                    <td>
                    <InputField
                      label="Town"
                      placeholder="%"
                      name="local_dataset.share_road_driving_buses__town"
                      defaultValue={initialValues['local_dataset']['share_road_driving_buses__town'].toFixed(1) }
                      style = {{width: 180}}
                      onChange={e => {handleChange(e); setBusStreetDrivingTown(100 - e.target.value)}}
                      onBlur={handleBlur}
                    />
                    </td>
                    <td>
                      {busStreetDrivingTown}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Rural
                    </td>
                    <td>
                      <InputField
                        label="Rural"
                        placeholder="%"
                        name="local_dataset.share_road_driving_buses__rural"
                        defaultValue={initialValues['local_dataset']['share_road_driving_buses__rural'].toFixed(1)}
                        style = {{width: 180}}
                        onChange={e => {handleChange(e); setBusStreetDrivingRural(100 - e.target.value)}}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      {busStreetDrivingRural}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
              </tbody>
            </table>

            <Divider  sx={{m: 3}}/>
            <h4>
              Transport: Car
              <TimeToLeave/>
            </h4>
            
            <h5>Passenger car km per capita</h5>

            <InputField
              label="pkm/(capita, a)"
              placeholder="pkm/(capita, a)"
              name="local_dataset.passenger_km_per_capita_car"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_car'].toFixed(0) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Occupancy rate car</h5>

            <InputField
              label="Passengers/ vehicle"
              placeholder="Passengers/ vehicle"
              name="local_dataset.occupancy_rate_car"
              defaultValue={initialValues['local_dataset']['occupancy_rate_car'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>
          
            <h5>Annual change car (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_car__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_car__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_car__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_car__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_car__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_car__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          
          <br/>

            <h5>Propulsion share % car</h5>

            <InputField
              label="LPG"
              placeholder="%"
              name="local_dataset.propulsion_share_car__lpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__lpg'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="CNG"
              placeholder="Cng"
              name="local_dataset.propulsion_share_car__cng"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__cng'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="NGV"
              placeholder="Ngv"
              name="local_dataset.propulsion_share_car__ngv"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__ngv'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Petrol"
              placeholder="%"
              name="local_dataset.propulsion_share_car__petrol"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__petrol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Hybrid electric-petrol"
              placeholder="%"
              name="local_dataset.propulsion_share_car__hybrid_electric_petrol"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__hybrid_electric_petrol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Petrol PHEV"
              placeholder="%"
              name="local_dataset.propulsion_share_car__petrol_phev"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__petrol_phev'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel"
              placeholder="%"
              name="local_dataset.propulsion_share_car__diesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__diesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Hybrid electric-diesel"
              placeholder="%"
              name="local_dataset.propulsion_share_car__hybrid_electric_diesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__hybrid_electric_diesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel PHEV"
              placeholder="%"
              name="local_dataset.propulsion_share_car__diesel_phev"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__diesel_phev'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Hydrogen fuel cell"
              placeholder="%"
              name="local_dataset.propulsion_share_car__hydrogen_fuel_cell"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__hydrogen_fuel_cell'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Bioethanol"
              placeholder="%"
              name="local_dataset.propulsion_share_car__bioethanol"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__bioethanol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Biodiesel"
              placeholder="%"
              name="local_dataset.propulsion_share_car__biodiesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__biodiesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Bi-fuel"
              placeholder="%"
              name="local_dataset.propulsion_share_car__bi_fuel"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__bi_fuel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Other"
              placeholder="%"
              name="local_dataset.propulsion_share_car__other"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__other'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="BEV"
              placeholder="%"
              name="local_dataset.propulsion_share_car__bev"
              defaultValue={initialValues['local_dataset']['propulsion_share_car__bev'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          
          <br/>

            <h5>Emission factor for street driving and road driving, passenger car (gCO2e/vkm)</h5>

            <table className={classes.localDsTable}>
              <thead>
                <tr>
                  <th>
                    
                  </th>
                  <th>
                      Street driving (%)
                  </th>
                  <th>
                      Road driving (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                      LPG
                    </td>
                    <td>
                    <InputField
                        label="LPG"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__lpg"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__lpg'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="LPG"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__lpg"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__lpg'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      CNG
                    </td>
                    <td>
                    <InputField
                        label="LPG"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__cng"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__cng'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="LPG"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__cng"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__cng'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      NGV
                    </td>
                    <td>
                    <InputField
                        label="NGV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__ngv"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__ngv'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="NGV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__ngv"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__ngv'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Petrol
                    </td>
                    <td>
                    <InputField
                        label="Petrol"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__petrol"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__petrol'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Petrol"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__petrol"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__petrol'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Hybrid electric-petrol
                    </td>
                    <td>
                    <InputField
                        label="Hybrid electric-petrol"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__hybrid_electric_petrol"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__hybrid_electric_petrol'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Hybrid electric-petrol"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__hybrid_electric_petrol"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__hybrid_electric_petrol'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Petrol PHEV
                    </td>
                    <td>
                    <InputField
                        label="Petrol PHEV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__petrol_phev"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__petrol_phev'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Petrol PHEV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__petrol_phev"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__petrol_phev'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Diesel
                    </td>
                    <td>
                    <InputField
                        label="Diesel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__diesel"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__diesel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Diesel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__diesel"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__diesel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Hybrid electric-diesel
                    </td>
                    <td>
                    <InputField
                        label="Hybrid electric-diesel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__hybrid_electric_diesel"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__hybrid_electric_diesel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Hybrid electric-diesel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__hybrid_electric_diesel"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__hybrid_electric_diesel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Diesel PHEV
                    </td>
                    <td>
                    <InputField
                        label="Diesel PHEV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__diesel_phev"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__diesel_phev'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Diesel PHEV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__diesel_phev"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__diesel_phev'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Hydrogen fuel cell
                    </td>
                    <td>
                    <InputField
                        label="Hydrogen fuel cell"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__hydrogen_fuel_cell"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__hydrogen_fuel_cell'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Hydrogen fuel cell"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__hydrogen_fuel_cell"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__hydrogen_fuel_cell'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Bioethanol
                    </td>
                    <td>
                    <InputField
                        label="Bioethanol"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__bioethanol"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__bioethanol'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Bioethanol"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__bioethanol"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__bioethanol'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Biodiesel
                    </td>
                    <td>
                    <InputField
                        label="Biodiesel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__biodiesel"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__biodiesel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Biodiesel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__biodiesel"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__biodiesel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Bi-fuel
                    </td>
                    <td>
                    <InputField
                        label="Bi-fuel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__bi_fuel"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__bi_fuel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Bi-fuel"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__bi_fuel"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__bi_fuel'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Other
                    </td>
                    <td>
                    <InputField
                        label="Other"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__other"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__other'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="Other"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__other"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__other'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      BEV
                    </td>
                    <td>
                    <InputField
                        label="BEV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_street_driving_car__bev"
                        defaultValue={initialValues['local_dataset']['ef_street_driving_car__bev'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                    <td>
                    <InputField
                        label="BEV"
                        placeholder="gCO2e/vkm"
                        name="local_dataset.ef_road_driving_car__bev"
                        defaultValue={initialValues['local_dataset']['ef_road_driving_car__bev'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </td>
                  </tr>
              </tbody>
            </table>
            <br />
            
            <Alert severity='info'>
              <Typography variant="body1">
              Describe the driving profile in metropolitan, urban, suburban and rural areas as well as in towns by estimating the shares of road driving and street driving.
              </Typography>
            </Alert>
            <h5>Driving profile: Share of road driving in the area</h5>

            <table className={classes.localDsTable}>
              <thead>
                <tr>
                  <th>
                    Area
                  </th>
                  <th>
                    Road driving (%)
                  </th>
                  <th>
                    Street driving (%)
                  </th>
                  <th>
                    Total (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                      Metropolitan centre
                    </td>
                    <td>
                      <InputField
                        label="Metropolitan center"
                        placeholder="%"
                        name="local_dataset.share_road_driving_car__metropolitan_center"
                        defaultValue={initialValues['local_dataset']['share_road_driving_car__metropolitan_center'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={e => {handleChange(e); setCarStreetDrivingMetroplitan(100 - e.target.value)}}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      {carStreetDrivingMetroplitan}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Urban
                    </td>
                    <td>
                      <InputField
                        label="Urban"
                        placeholder="%"
                        name="local_dataset.share_road_driving_car__urban"
                        defaultValue={initialValues['local_dataset']['share_road_driving_car__urban'].toFixed(0) }
                        style = {{width: 180}} 
                        onChange={e => {handleChange(e); setCarStreetDrivingUrban(100 - e.target.value)}}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      {carStreetDrivingUrban}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Suburban
                    </td>
                    <td>
                    <InputField
                      label="Suburban"
                      placeholder="%"
                      name="local_dataset.share_road_driving_car__suburban"
                      defaultValue={initialValues['local_dataset']['share_road_driving_car__suburban'].toFixed(0) }
                      style = {{width: 180}}
                      onChange={e => {handleChange(e); setCarStreetDrivingSuburban(100 - e.target.value)}}
                      onBlur={handleBlur}
                    />
                    </td>
                    <td>
                      {carStreetDrivingSuburban}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Town
                    </td>
                    <td>
                    <InputField
                      label="Town"
                      placeholder="%"
                      name="local_dataset.share_road_driving_car__town"
                      defaultValue={initialValues['local_dataset']['share_road_driving_car__town'].toFixed(0) }
                      style = {{width: 180}}
                      onChange={e => {handleChange(e); setCarStreetDrivingTown(100 - e.target.value)}}
                      onBlur={handleBlur}
                    />
                    </td>
                    <td>
                      {carStreetDrivingTown}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Rural
                    </td>
                    <td>
                      <InputField
                        label="Rural"
                        placeholder="%"
                        name="local_dataset.share_road_driving_car__rural"
                        defaultValue={initialValues['local_dataset']['share_road_driving_car__rural'].toFixed(0)}
                        style = {{width: 180}}
                        onChange={e => {handleChange(e); setCarStreetDrivingRural(100 - e.target.value)}}
                        onBlur={handleBlur}
                      />
                    </td>
                    <td>
                      {carStreetDrivingRural}
                    </td>
                    <td>
                      100
                    </td>
                  </tr>
              </tbody>
            </table>

          <br/>
            <Divider sx={{m: 2}}/>
            <h4>
              Transport: Metro
              <Subway/>
            </h4>

            <h5>Passenger km per capita, metro</h5>

            <InputField
              label="Pkm/(capita, a)"
              placeholder="pkm/(capita, a)"
              name="local_dataset.passenger_km_per_capita_metro"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_metro'].toFixed(0) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Occupancy rate, metro</h5>

            <InputField
              label="Occupancy rate"
              placeholder="passengers/ vehicle"
              name="local_dataset.occupancy_rate_metro"
              defaultValue={initialValues['local_dataset']['occupancy_rate_metro'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Electricity consumption metro</h5>

            <InputField
              label="kWh /vkm"
              placeholder="kWh /vkm"
              name="local_dataset.electricity_consumption_metro"
              defaultValue={initialValues['local_dataset']['electricity_consumption_metro'].toFixed(1) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual change metro (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_metro__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_metro__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_metro__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_metro__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_metro__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_metro__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>
            <h5>Metro (million pkm/a)</h5>

            <table className={classes.localDsTable}>
              <thead>
                <tr>
                  <th>
                    Metros
                  </th>
                  <th>
                    Million pkm/a
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <InputField
                        label="Metro 1"
                        placeholder="Metro 1"
                        name="local_dataset.metro__1"
                        defaultValue={initialValues['local_dataset']['metro__1'] }
                        style={{ width: 180}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                  </td>
                  <td>
                    <InputField
                        label="1. metro pkm/a"
                        placeholder="1. metro pkm/a"
                        name="local_dataset.transport_activity_metro__pkm_a"
                        defaultValue={initialValues['local_dataset']['transport_activity_metro__pkm_a'].toFixed(2) }
                        style={{ width: 180}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                  </td>
                </tr>
                {metroRows}
              </tbody>
            </table>

          <br/>

            <Divider sx={{m: 2}}/>
            <h4>
              Transport: Tram
              <Tram/>
            </h4>

          <br/>

            <h5>Passenger km per capita</h5>

            <InputField
              label="Pkm/ (capita, a)"
              placeholder="pkm/ (capita, a)"
              name="local_dataset.passenger_km_per_capita_tram"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_tram'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Occupancy rate</h5>

            <InputField
              label="Passengers/ vehicle"
              placeholder="passengers/ vehicle"
              name="local_dataset.occupancy_rate_tram"
              defaultValue={initialValues['local_dataset']['occupancy_rate_tram'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Electricity consumption</h5>

            <InputField
              label="kWh/vkm"
              placeholder="kWh/vkm"
              name="local_dataset.electricity_consumption_tram"
              defaultValue={initialValues['local_dataset']['electricity_consumption_tram'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual chnage %, tram (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_tram__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_tram__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_tram__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_tram__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_tram__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_tram__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <br/>

            <h5>Trams (million pkm/a)</h5>
            <table className={classes.localDsTable}>
              <thead>
                <tr>
                  <th>
                    Trams
                  </th>
                  <th>
                    Million pkm/a
                  </th>
                </tr>
              </thead>
              <tbody>
                { trams &&
                trams.map((i, key) => {
                 if(i < 59){
                  return (
                    <tr key={key}>
                      <td>
                        <InputField
                          label={`Tram ${i}`}
                          placeholder={`Tram ${i}`}
                          name={`local_dataset.tram__${i}`}
                          defaultValue={initialValues['local_dataset'][`tram__${i}`] }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </td>
                      <td>
                      <InputField
                        label={`Trams. activity: Tram ${i}`}
                        placeholder={`million pkm/a Tram ${i}`}
                        name={`local_dataset.transport_activity_tram__tram_${i}`}
                        defaultValue={initialValues['local_dataset'][`transport_activity_tram__tram_${i}`].toFixed(2) }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      </td>
                    </tr>
                  );
                 }
                })
                }
              </tbody>
            </table>
            <section>
              <Grid item>
                  <Button
                    variant="contained"
                    onClick={addTram}
                  >
                    Add a tram
                  </Button>
              </Grid>
            </section>

          <Divider sx={{m: 2}}/>
            <h4>
              Transport: Train
              <Train/>
            </h4>

            <h5>Train passenger km per capita</h5>

            <InputField
              label="Passenger km/ capita"
              placeholder="pkm/ capita"
              name="local_dataset.passenger_km_per_capita_train"
              defaultValue={initialValues['local_dataset']['passenger_km_per_capita_train'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Occupancy rate</h5>

            <InputField
              label="Passengers/ vehicle"
              placeholder="passengers/ vehicle"
              name="local_dataset.occupancy_rate_train"
              defaultValue={initialValues['local_dataset']['occupancy_rate_train'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Ef diesel train (gCO2e/train-km)</h5>

            <InputField
              label="Ef diesel train"
              placeholder="gCO2e/train-km"
              name="local_dataset.ef_diesel_train"
              defaultValue={initialValues['local_dataset']['ef_diesel_train'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Energy consumption electric train (kWh/train-km)</h5>

            <InputField
              label="Energy consumption"
              placeholder="kWh/train-km"
              name="local_dataset.energy_consumption_electric_train"
              defaultValue={initialValues['local_dataset']['energy_consumption_electric_train'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Share of electric engines %</h5>

            <InputField
              label="Electric engines"
              placeholder="%"
              name="local_dataset.share_of_electric_engines"
              defaultValue={initialValues['local_dataset']['share_of_electric_engines'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual change %, passenger train (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_passenger_train__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_passenger_train__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_passenger_train__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_passenger_train__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_passenger_train__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_passenger_train__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Control factor, passenger train</h5>

            <InputField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="local_dataset.cf_passenger_train__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__metropolitan'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="City"
              placeholder="City"
              name="local_dataset.cf_passenger_train__city"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__city'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Suburban"
              placeholder="Suburban"
              name="local_dataset.cf_passenger_train__suburban"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__suburban'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Town"
              placeholder="Town"
              name="local_dataset.cf_passenger_train__town"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__town'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Rural"
              placeholder="Rural"
              name="local_dataset.cf_passenger_train__rural"
              defaultValue={initialValues['local_dataset']['cf_passenger_train__rural'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />
          
          <Divider sx={{m:2}}/>

          <h4>Transport: Rail freight</h4>

            <h5>Vehicle km per capita, rail freight</h5>

            <InputField
              label="Vehicle km/capita"
              placeholder="vehicle-km/(capita, a)"
              name="local_dataset.vehicle_km_per_capita_rail_freight"
              defaultValue={initialValues['local_dataset']['vehicle_km_per_capita_rail_freight'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Ef diesel (gCo2e/vkm), rail freight</h5>

            <InputField
              label="Diesel rail freight"
              placeholder="gCo2e/vkm"
              name="local_dataset.ef_diesel_rail_freight"
              defaultValue={initialValues['local_dataset']['ef_diesel_rail_freight'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Energy consumption (kWh/vkm), electric rail freight</h5>

            <InputField
              label="Energy consmption"
              placeholder="kWh/vkm"
              name="local_dataset.energy_consumption_electric_rail_freight"
              defaultValue={initialValues['local_dataset']['energy_consumption_electric_rail_freight'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual change rail freight (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_rail_freight__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_rail_freight__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_rail_freight__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_rail_freight__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_rail_freight__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_rail_freight__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Correction factor, rail freight</h5>

            <InputField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="local_dataset.cf_rail_freight__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__metropolitan'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="City"
              placeholder="City"
              name="local_dataset.cf_rail_freight__city"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__city'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Suburban"
              placeholder="Suburban"
              name="local_dataset.cf_rail_freight__suburban"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__suburban'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Town"
              placeholder="Town"
              name="local_dataset.cf_rail_freight__town"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__town'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Rural"
              placeholder="Rural"
              name="local_dataset.cf_rail_freight__rural"
              defaultValue={initialValues['local_dataset']['cf_rail_freight__rural'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Average load (tonnes), rail freight</h5>

            <InputField
              label="Average load"
              placeholder="Tonnes"
              name="local_dataset.average_load_rail_freight"
              defaultValue={initialValues['local_dataset']['average_load_rail_freight'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <Divider sx={{m:2}}/>

            <h4>Transport: Road freight</h4>

            <h5>Vehicle km per capita, road freight</h5>

            <InputField
              label="vehicle-km/(capita, a)"
              placeholder="vehicle-km/(capita, a)"
              name="local_dataset.vehicle_km_per_capita_road_freight"
              defaultValue={initialValues['local_dataset']['vehicle_km_per_capita_road_freight'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Road transport emission factor (gCO22/vkm)</h5>

            <InputField
              label="Emission factor"
              placeholder="gCO22/vkm"
              name="local_dataset.road_transport_emission_factor"
              defaultValue={initialValues['local_dataset']['road_transport_emission_factor'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual change %, road freight (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_road_freight__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_road_freight__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_road_freight__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_road_freight__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_road_freight__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_road_freight__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Control factor, road freight</h5>

            <InputField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="local_dataset.cf_road_freight__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_road_freight__metropolitan'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="City"
              placeholder="City"
              name="local_dataset.cf_road_freight__city"
              defaultValue={initialValues['local_dataset']['cf_road_freight__city'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Suburban"
              placeholder="Suburban"
              name="local_dataset.cf_road_freight__suburban"
              defaultValue={initialValues['local_dataset']['cf_road_freight__suburban'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Town"
              placeholder="Town"
              name="local_dataset.cf_road_freight__town"
              defaultValue={initialValues['local_dataset']['cf_road_freight__town'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Rural"
              placeholder="Rural"
              name="local_dataset.cf_road_freight__rural"
              defaultValue={initialValues['local_dataset']['cf_road_freight__rural'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Propulsion share %, road freight</h5>

             <InputField
              label="Petrol including hybrids"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__petrol_including_hybrids"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__petrol_including_hybrids'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Lpg"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__lpg"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__lpg'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel including hybrids"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__diesel_including_hybrids"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__diesel_including_hybrids'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />


            <InputField
              label="Natural gas"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__natural_gas"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__natural_gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Electricity"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__electricity"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Alternative energy"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__alternative_energy"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__alternative_energy'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Bioethanol"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__bioethanol"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__bioethanol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Biodiesel"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__biodiesel"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__biodiesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Cng"
              placeholder="%"
              name="local_dataset.propulsion_share_road_freight__cng"
              defaultValue={initialValues['local_dataset']['propulsion_share_road_freight__cng'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Ef street driving, road freight (gCO2e/vkm)</h5>

            <InputField
              label="Petrol including hybrids"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__petrol_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__petrol_including_hybrids'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__lpg"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__lpg'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel including hybrids"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__diesel_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__diesel_including_hybrids'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />


            <InputField
              label="Natural gas"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__natural_gas"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__natural_gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Electricity"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__electricity"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Alternative energy"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__alternative_energy"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__alternative_energy'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__bioethanol"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__bioethanol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__biodiesel"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__biodiesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_street_driving_road_freight__cng"
              defaultValue={initialValues['local_dataset']['ef_street_driving_road_freight__cng'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Ef road driving, road freight (gCO2e/vkm)</h5>

            <InputField
              label="Petrol including hybrids"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__petrol_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__petrol_including_hybrids'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <InputField
              label="Lpg"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__lpg"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__lpg'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Diesel including hybrids"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__diesel_including_hybrids"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__diesel_including_hybrids'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />


            <InputField
              label="Natural gas"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__natural_gas"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__natural_gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Electricity"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__electricity"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Alternative energy"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__alternative_energy"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__alternative_energy'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Bioethanol"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__bioethanol"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__bioethanol'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Biodiesel"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__biodiesel"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__biodiesel'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Cng"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_road_driving_road_freight__cng"
              defaultValue={initialValues['local_dataset']['ef_road_driving_road_freight__cng'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Share %: road driving road fright</h5>

            <InputField
              label="Metropolitan center"
              placeholder="%"
              name="local_dataset.share_road_driving_road_freight__metropolitan_center"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__metropolitan_center'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Urban"
              placeholder="%"
              name="local_dataset.share_road_driving_road_freight__urban"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__urban'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Suburban"
              placeholder="%"
              name="local_dataset.share_road_driving_road_freight__suburban"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__suburban'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Town"
              placeholder="%"
              name="local_dataset.share_road_driving_road_freight__town"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__town'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Rural"
              placeholder="%"
              name="local_dataset.share_road_driving_road_freight__rural"
              defaultValue={initialValues['local_dataset']['share_road_driving_road_freight__rural'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Average load (tonnes), road freight</h5>

            <InputField
              label="Average load"
              placeholder="Tonnes"
              name="local_dataset.average_load_road_freight"
              defaultValue={initialValues['local_dataset']['average_load_road_freight'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <Divider sx={{m:2}}/>

            <h4>
              Transport: Inland waterways
            </h4>

            <h5>Vehicle km per capita, waterways transport</h5>

            <InputField
              label="Vehicle km/ capita"
              placeholder="vehicle-km/(capita, a)"
              name="local_dataset.vehicle_km_per_capita_waterways_transport"
              defaultValue={initialValues['local_dataset']['vehicle_km_per_capita_waterways_transport'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Ef inland waterways (gCO2e/vkm)</h5>

            <InputField
              label="Ef inland waterways"
              placeholder="gCO2e/vkm"
              name="local_dataset.ef_inland_waterways"
              defaultValue={initialValues['local_dataset']['ef_inland_waterways'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual change %, inland waterways (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_waterways_transport__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_waterways_transport__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_waterways_transport__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_waterways_transport__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_waterways_transport__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_waterways_transport__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Correction factor waterways transport</h5>

            <InputField
              label="Metropolitan"
              placeholder="Metropolitan"
              name="local_dataset.cf_waterways_transport__metropolitan"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__metropolitan'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="City"
              placeholder="City"
              name="local_dataset.cf_waterways_transport__city"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__city'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Suburban"
              placeholder="Suburban"
              name="local_dataset.cf_waterways_transport__suburban"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__suburban'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Town"
              placeholder="Town"
              name="local_dataset.cf_waterways_transport__town"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__town'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Rural"
              placeholder="Rural"
              name="local_dataset.cf_waterways_transport__rural"
              defaultValue={initialValues['local_dataset']['cf_waterways_transport__rural'].toFixed(2) }
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Average load, inland waterways</h5>

            <InputField
              label="Average load"
              placeholder="Tonnes"
              name="local_dataset.average_load_inland_waterways"
              defaultValue={initialValues['local_dataset']['average_load_inland_waterways'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Country land area</h5>

            <InputField
              label="Country land area"
              placeholder="Radius"
              name="local_dataset.country_land_area"
              defaultValue={initialValues['local_dataset']['country_land_area'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Factor inclusion</h5>

            <InputField
              label="Factor inclusion"
              placeholder="Factor inclusion"
              name="local_dataset.factor_inclusion"
              defaultValue={initialValues['local_dataset']['factor_inclusion'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual change vehicle efficincy (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_change_vehicle_efficiency__2021_30"
              defaultValue={initialValues['local_dataset']['annual_change_vehicle_efficiency__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_change_vehicle_efficiency__2031_40"
              defaultValue={initialValues['local_dataset']['annual_change_vehicle_efficiency__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_change_vehicle_efficiency__2041_50"
              defaultValue={initialValues['local_dataset']['annual_change_vehicle_efficiency__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Divider sx={{m:2}}/>

            <h4 id='luc-localdataset'>Land use change (LUC): Baseline</h4>

            <h5>LUC baseline: Forestland</h5>

             <InputField
              label="LUC Forestland"
              placeholder="tCO2e/a"
              name="local_dataset.land_use_baseline_forestland"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Forestland, Annual change (decades)</h5>

             <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.land_use_baseline_forestland_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland_annual_change__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.land_use_baseline_forestland_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland_annual_change__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.land_use_baseline_forestland_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_forestland_annual_change__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Cropland</h5>

             <InputField
              label="LUC Cropland"
              placeholder="tCO2e/a"
              name="local_dataset.land_use_baseline_cropland"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Cropland, Annual change (decades)</h5>

             <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.land_use_baseline_cropland_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland_annual_change__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.land_use_baseline_cropland_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland_annual_change__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.land_use_baseline_cropland_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_cropland_annual_change__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>LUC baseline: Grassland</h5>

             <InputField
              label="LUC Grassland"
              placeholder="tCO2e/a"
              name="local_dataset.land_use_baseline_grassland"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Grassland, Annual change (decades)</h5>

             <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.land_use_baseline_grassland_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland_annual_change__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.land_use_baseline_grassland_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland_annual_change__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.land_use_baseline_grassland_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_grassland_annual_change__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Wetlands</h5>

             <InputField
              label="LUC Wetlands"
              placeholder="tCO2e/a"
              name="local_dataset.land_use_baseline_wetlands"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Wetlands, Annual change (decades)</h5>

             <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.land_use_baseline_wetlands_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands_annual_change__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.land_use_baseline_wetlands_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands_annual_change__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.land_use_baseline_wetlands_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_wetlands_annual_change__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Settlements</h5>

             <InputField
              label="LUC Settlements"
              placeholder="tCO2e/a"
              name="local_dataset.land_use_baseline_settlements"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Settlements, Annual change (decades)</h5>

             <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.land_use_baseline_settlements_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements_annual_change__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.land_use_baseline_settlements_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements_annual_change__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.land_use_baseline_settlements_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_settlements_annual_change__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Other land</h5>

             <InputField
              label="LUC Other land"
              placeholder="tCO2e/a"
              name="local_dataset.land_use_baseline_other_land"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>LUC baseline: Other land, Annual change (decades)</h5>

             <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.land_use_baseline_other_land_annual_change__2021_30"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land_annual_change__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.land_use_baseline_other_land_annual_change__2031_40"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land_annual_change__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.land_use_baseline_other_land_annual_change__2041_50"
              defaultValue={initialValues['local_dataset']['land_use_baseline_other_land_annual_change__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <Divider sx={{m:2}}/>

            <h4>LUC: Carbon stock change factors (t C/ha yr)</h4>

            <h5>Cropland to forestland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.cropland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.cropland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.cropland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.cropland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.cropland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.cropland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_forestland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Grassland to forestland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.grassland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.grassland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.grassland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.grassland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.grassland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.grassland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_forestland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Wetland to forestland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.wetland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.wetland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.wetland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.wetland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.wetland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.wetland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_forestland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Settlement to forestland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.settlement_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.settlement_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.settlement_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.settlement_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.settlement_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.settlement_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_forestland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Other land to forestland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.otherland_to_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.otherland_to_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.otherland_to_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.otherland_to_forestland__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.otherland_to_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.otherland_to_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_forestland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Forestland to cropland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.forestland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.forestland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.forestland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.forestland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.forestland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.forestland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_cropland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Grassland to cropland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.grassland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.grassland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.grassland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.grassland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.grassland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.grassland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_cropland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Wetland to cropland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.wetland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.wetland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.wetland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.wetland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.wetland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.wetland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_cropland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Settlement to cropland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.settlement_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.settlement_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.settlement_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.settlement_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.settlement_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.settlement_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_cropland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Other land to cropland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.otherland_to_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.otherland_to_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.otherland_to_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.otherland_to_cropland__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.otherland_to_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.otherland_to_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_cropland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Forestland to grassland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.forestland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.forestland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.forestland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.forestland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.forestland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.forestland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_grassland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Cropland to grassland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.cropland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.cropland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.cropland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.cropland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.cropland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.cropland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_grassland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Wetland to grassland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.wetland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.wetland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.wetland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.wetland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.wetland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.wetland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_grassland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Settlement to grassland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.settlement_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.settlement_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.settlement_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.settlement_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.settlement_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.settlement_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_grassland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Other land to grassland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.otherland_to_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.otherland_to_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.otherland_to_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.otherland_to_grassland__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.otherland_to_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.otherland_to_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_grassland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Land to peat extraction (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.land_to_peat_extraction__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.land_to_peat_extraction__belowground_biomass"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.land_to_peat_extraction__dead_wood"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.land_to_peat_extraction__litter"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.land_to_peat_extraction__mineral_soil"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.land_to_peat_extraction__organic_soil"
              defaultValue={initialValues['local_dataset']['land_to_peat_extraction__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Peatland restoration (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.peatland_restoration__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['peatland_restoration__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.peatland_restoration__belowground_biomass"
              defaultValue={initialValues['local_dataset']['peatland_restoration__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.peatland_restoration__dead_wood"
              defaultValue={initialValues['local_dataset']['peatland_restoration__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.peatland_restoration__litter"
              defaultValue={initialValues['local_dataset']['peatland_restoration__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.peatland_restoration__mineral_soil"
              defaultValue={initialValues['local_dataset']['peatland_restoration__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.peatland_restoration__organic_soil"
              defaultValue={initialValues['local_dataset']['peatland_restoration__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Forestland to other wetland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.forestland_to_other_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.forestland_to_other_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.forestland_to_other_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.forestland_to_other_wetland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.forestland_to_other_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.forestland_to_other_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_other_wetland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Cropland to other wetland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.cropland_to_other_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.cropland_to_other_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.cropland_to_other_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.cropland_to_other_wetland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.cropland_to_other_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.cropland_to_other_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_other_wetland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Grassland to other wetland (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.grassland_to_other_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.grassland_to_other_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.grassland_to_other_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.grassland_to_other_wetland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.grassland_to_other_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.grassland_to_other_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_other_wetland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Forestland to settlement (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.forestland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.forestland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.forestland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.forestland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.forestland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.forestland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_settlement__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Cropland to settlement (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.cropland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.cropland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.cropland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.cropland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.cropland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.cropland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_settlement__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Grassland to settlement (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.grassland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.grassland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.grassland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.grassland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.grassland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.grassland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_settlement__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Wetland to settlement (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.wetland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.wetland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.wetland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.wetland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.wetland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.wetland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_settlement__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Other land to settlement (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.otherland_to_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.otherland_to_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.otherland_to_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.otherland_to_settlement__litter"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.otherland_to_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.otherland_to_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['otherland_to_settlement__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Forestland to other land (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.forestland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.forestland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.forestland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.forestland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.forestland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.forestland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_to_otherland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Cropland to other land (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.cropland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.cropland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.cropland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.cropland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.cropland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.cropland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_to_otherland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Grassland to other land (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.grassland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.grassland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.grassland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.grassland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.grassland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.grassland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_to_otherland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Wetland to other land (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.wetland_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.wetland_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.wetland_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.wetland_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.wetland_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.wetland_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_to_otherland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Settlement to other land (t C/ha yr)</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.settlement_to_otherland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.settlement_to_otherland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.settlement_to_otherland__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.settlement_to_otherland__litter"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.settlement_to_otherland__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.settlement_to_otherland__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_to_otherland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <Divider sx={{m:2}}/>

            <h4>LUC: Remainings of different types of lands</h4>

             <h5>Forest land remaining forest land</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.forestland_remaining_forestland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.forestland_remaining_forestland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.forestland_remaining_forestland__dead_wood"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.forestland_remaining_forestland__litter"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.forestland_remaining_forestland__mineral_soil"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.forestland_remaining_forestland__organic_soil"
              defaultValue={initialValues['local_dataset']['forestland_remaining_forestland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Cropland remaining cropland</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.cropland_remaining_cropland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.cropland_remaining_cropland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.cropland_remaining_cropland__dead_wood"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.cropland_remaining_cropland__litter"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.cropland_remaining_cropland__mineral_soil"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.cropland_remaining_cropland__organic_soil"
              defaultValue={initialValues['local_dataset']['cropland_remaining_cropland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Grassland remaining grassland</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.grassland_remaining_grassland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.grassland_remaining_grassland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.grassland_remaining_grassland__dead_wood"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.grassland_remaining_grassland__litter"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.grassland_remaining_grassland__mineral_soil"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.grassland_remaining_grassland__organic_soil"
              defaultValue={initialValues['local_dataset']['grassland_remaining_grassland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Peat extraction remaining peat extraction</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.peat_extraction_remaining_peat_extraction__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.peat_extraction_remaining_peat_extraction__belowground_biomass"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.peat_extraction_remaining_peat_extraction__dead_wood"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.peat_extraction_remaining_peat_extraction__litter"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.peat_extraction_remaining_peat_extraction__mineral_soil"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.peat_extraction_remaining_peat_extraction__organic_soil"
              defaultValue={initialValues['local_dataset']['peat_extraction_remaining_peat_extraction__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>Wetlands remaining wetlands</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.wetland_remaining_wetland__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.wetland_remaining_wetland__belowground_biomass"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.wetland_remaining_wetland__dead_wood"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.wetland_remaining_wetland__litter"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.wetland_remaining_wetland__mineral_soil"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.wetland_remaining_wetland__organic_soil"
              defaultValue={initialValues['local_dataset']['wetland_remaining_wetland__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Settlements remaining settlements</h5>

            <InputField
              label="Aboveground biomass"
              placeholder="Aboveground biomass"
              name="local_dataset.settlement_remaining_settlement__aboveground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__aboveground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Belowground biomass"
              placeholder="Belowground biomass"
              name="local_dataset.settlement_remaining_settlement__belowground_biomass"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__belowground_biomass'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Dead wood"
              placeholder="Dead wood"
              name="local_dataset.settlement_remaining_settlement__dead_wood"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__dead_wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Litter"
              placeholder="Litter"
              name="local_dataset.settlement_remaining_settlement__litter"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__litter'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Mineral soil"
              placeholder="Mineral soil"
              name="local_dataset.settlement_remaining_settlement__mineral_soil"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__mineral_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Organic soil"
              placeholder="Organic soil"
              name="local_dataset.settlement_remaining_settlement__organic_soil"
              defaultValue={initialValues['local_dataset']['settlement_remaining_settlement__organic_soil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <Divider sx={{m:2}}/>

            <h4 id='buildings-localdataset'>
              Buildings
              <BusinessOutlined/>
            </h4>

            <h5>Emission factor for energy carrier</h5>

            <InputField
              label="Gas"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__gas"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__oil"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__coal"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__peat"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__wood"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewables"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__renewable"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="District heating"
              placeholder="gCO2/kWh"
              name="local_dataset.emission_factor_for_energy_carrier__district_heating"
              defaultValue={initialValues['local_dataset']['emission_factor_for_energy_carrier__district_heating'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual demolition rate of residential buildings (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_demolition_rate_of_residential_buildings__2021_30"
              defaultValue={initialValues['local_dataset']['annual_demolition_rate_of_residential_buildings__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_demolition_rate_of_residential_buildings__2031_40"
              defaultValue={initialValues['local_dataset']['annual_demolition_rate_of_residential_buildings__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_demolition_rate_of_residential_buildings__2041_50"
              defaultValue={initialValues['local_dataset']['annual_demolition_rate_of_residential_buildings__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual demolition rate of commercial buildings (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_demolition_of_commercial_buildings__2021_30"
              defaultValue={initialValues['local_dataset']['annual_demolition_of_commercial_buildings__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_demolition_of_commercial_buildings__2031_40"
              defaultValue={initialValues['local_dataset']['annual_demolition_of_commercial_buildings__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_demolition_of_commercial_buildings__2041_50"
              defaultValue={initialValues['local_dataset']['annual_demolition_of_commercial_buildings__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of A-class appartments (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_apartments__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_apartments__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_apartments__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_apartments__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_apartments__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_apartments__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of B-class appartments (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_apartments__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_apartments__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_apartments__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_apartments__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_apartments__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_apartments__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of A-class terraced units (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_terraced_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_terraced_units__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_terraced_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_terraced_units__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_terraced_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_terraced_units__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of B-class terraced units (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_terraced_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_terraced_units__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_terraced_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_terraced_units__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_terraced_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_terraced_units__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of A-class semi detached units (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_semi_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_semi_detached_units__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_semi_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_semi_detached_units__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_semi_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_semi_detached_units__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of B-class semi detached units (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_semi_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_semi_detached_units__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_semi_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_semi_detached_units__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_semi_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_semi_detached_units__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of A-class detached units (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_detached_units__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_detached_units__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_a_class_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_a_class_detached_units__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of B-class detached units (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_detached_units__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_detached_units__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_detached_units__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_detached_units__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_b_class_detached_units__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_b_class_detached_units__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Annual increase of commercial buildings (decades)</h5>

            <InputField
              label="2021-30"
              placeholder="%"
              name="local_dataset.annual_increase_commercial_buildings__2021_30"
              defaultValue={initialValues['local_dataset']['annual_increase_commercial_buildings__2021_30'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2031-40"
              placeholder="%"
              name="local_dataset.annual_increase_commercial_buildings__2031_40"
              defaultValue={initialValues['local_dataset']['annual_increase_commercial_buildings__2031_40'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="2041-50"
              placeholder="%"
              name="local_dataset.annual_increase_commercial_buildings__2041_50"
              defaultValue={initialValues['local_dataset']['annual_increase_commercial_buildings__2041_50'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Floor area per residential unit (m2)</h5>

            <InputField
              label="Average m2"
              placeholder="Average m2"
              name="local_dataset.floor_area_per_residential_unit__average"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__average'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Appartment m2"
              placeholder=""
              name="local_dataset.floor_area_per_residential_unit__apartment"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__apartment'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Terraced appartment"
              placeholder=""
              name="local_dataset.floor_area_per_residential_unit__terraced"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__terraced'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Semi-detached"
              placeholder=""
              name="local_dataset.floor_area_per_residential_unit__semi_detached"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__semi_detached'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Detached"
              placeholder=""
              name="local_dataset.floor_area_per_residential_unit__detached"
              defaultValue={initialValues['local_dataset']['floor_area_per_residential_unit__detached'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

          <Divider sx={{m:2}}/>

            <h4>Buildings: Energy use</h4>

            <h5>Average total energy use of all residential buildings</h5>

            <InputField
              label="All residential"
              placeholder="kWh/dwelling"
              name="local_dataset.average_total_energy_use__all_residential"
              defaultValue={initialValues['local_dataset']['average_total_energy_use__all_residential'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

           <Divider sx={{m:2}}/>

            <h4>Buildings: End use of energy residential buildings</h4>
            
            <InputField
              label="Space heating"
              placeholder="%"
              name="local_dataset.end_use_of_energy_residential_buildings__space_heating"
              defaultValue={initialValues['local_dataset']['end_use_of_energy_residential_buildings__space_heating'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Water heating"
              placeholder="%"
              name="local_dataset.end_use_of_energy_residential_buildings__water_heating"
              defaultValue= {initialValues['local_dataset']['end_use_of_energy_residential_buildings__water_heating'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Lights &amp; appliences"
              placeholder="%"
              name="local_dataset.end_use_of_energy_residential_buildings__lights_and_appliances"
              defaultValue= {initialValues['local_dataset']['end_use_of_energy_residential_buildings__lights_and_appliances'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Pumps &amp; fans"
              placeholder="%"
              name="local_dataset.end_use_of_energy_residential_buildings__pumps_and_fans"
              defaultValue= {initialValues['local_dataset']['end_use_of_energy_residential_buildings__pumps_and_fans'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>A-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>A-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>A-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>A-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.a_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['a_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>B-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>B-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>B-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>B-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__electricity"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__gas"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__oil"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__coal"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__peat"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__wood"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__renewable"
               defaultValue= {initialValues['local_dataset']['b_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.b_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['b_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>C-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>C-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>C-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>C-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.c_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['c_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>D-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>D-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>D-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>D-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.d_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['d_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>E-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['e_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>E-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['e_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>E-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['e_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>E-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.e_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['e_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>F-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>F-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>F-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>F-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.f_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['f_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>G-rated appartment</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_apartment__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_apartment__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>G-rated terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_terraced__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>G-rated semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>G-rated detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__electricity"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__gas"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__oil"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__coal"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__peat"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__wood"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__renewable"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.g_rated_detached__heat"
              defaultValue= {initialValues['local_dataset']['g_rated_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing appartments</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__electricity"
              defaultValue= {initialValues['local_dataset']['existing_apartments__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__gas"
              defaultValue= {initialValues['local_dataset']['existing_apartments__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__oil"
              defaultValue= {initialValues['local_dataset']['existing_apartments__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__coal"
              defaultValue= {initialValues['local_dataset']['existing_apartments__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__peat"
              defaultValue= {initialValues['local_dataset']['existing_apartments__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments-wood"
              defaultValue= {initialValues['local_dataset']['existing_apartments__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__renewable"
              defaultValue= {initialValues['local_dataset']['existing_apartments__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_apartments__heat"
              defaultValue= {initialValues['local_dataset']['existing_apartments__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing terraced</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__electricity"
              defaultValue= {initialValues['local_dataset']['existing_terraced__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__gas"
              defaultValue= {initialValues['local_dataset']['existing_terraced__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__oil"
              defaultValue= {initialValues['local_dataset']['existing_terraced__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__coal"
              defaultValue= {initialValues['local_dataset']['existing_terraced__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__peat"
              defaultValue= {initialValues['local_dataset']['existing_terraced__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__wood"
              defaultValue= {initialValues['local_dataset']['existing_terraced__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__renewable"
              defaultValue= {initialValues['local_dataset']['existing_terraced__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_terraced__heat"
              defaultValue= {initialValues['local_dataset']['existing_terraced__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing semi-detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__electricity"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__gas"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__oil"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__coal"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__peat"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__wood"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__renewable"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_semi_detached__heat"
              defaultValue= {initialValues['local_dataset']['existing_semi_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing detached</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached__electricity"
              defaultValue= {initialValues['local_dataset']['existing_detached__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached__gas"
              defaultValue= {initialValues['local_dataset']['existing_detached__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached__oil"
              defaultValue= {initialValues['local_dataset']['existing_detached__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached-coal"
              defaultValue= {initialValues['local_dataset']['existing_detached__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached__peat"
              defaultValue= {initialValues['local_dataset']['existing_detached__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached-wood"
              defaultValue= {initialValues['local_dataset']['existing_detached__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached__renewable"
              defaultValue= {initialValues['local_dataset']['existing_detached__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/ dwelling"
              name="local_dataset.existing_detached__heat"
              defaultValue= {initialValues['local_dataset']['existing_detached__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing building: Retail</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_retail__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_retail__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing building: Health</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_health__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_health__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing building: Hospitality</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_hospitality__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_hospitality__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing building: Offices</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_offices__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_offices__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing building: Industrial</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_industrial__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_industrial__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>Existing building: Warehouses</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__electricity"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__gas"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__oil"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__coal"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__peat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__wood"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__renewable"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_exiting_building_warehouses__heat"
              defaultValue= {initialValues['local_dataset']['ec_exiting_building_warehouses__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>New building: Retail</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />


            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retails__peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_retail__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_retail__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>New building: Health</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_health__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_health__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

             <h5>New building: Hospitality</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_hospitality__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_hospitality__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>New building: Offices</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices-peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_offices__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_offices__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <h5>New building: Industrial</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial-peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_industrial__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_industrial__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />


            <h5>New building: Warehouses</h5>

            <InputField
              label="Electricity"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses__electricity"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__electricity'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Gas"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses__gas"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__gas'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Oil"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses__oil"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__oil'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Coal"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses-coal"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__coal'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Peat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses-peat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__peat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Wood"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses__wood"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__wood'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Renewable"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses__renewable"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__renewable'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputField
              label="Heat"
              placeholder="kWh/(m2 a)"
              name="local_dataset.ec_new_building_warehouses__heat"
              defaultValue= {initialValues['local_dataset']['ec_new_building_warehouses__heat'].toFixed(2) }
              onChange={handleChange}
              onBlur={handleBlur}
            /> 
             </div>
             }
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ top: "95%",
                        right: "30px",
                        position: "fixed"
                      }}
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