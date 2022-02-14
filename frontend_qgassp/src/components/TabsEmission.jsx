import React, {useState} from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
/**
 * Tabs for the different emission modules
 * @return {}
 */



export const TabsEmission = () => {
  const [value, setValue] = useState('transport');

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: '#003399',
        dark: '#101742',
      },
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTransport= () => {
    
  };

  const handleLandUse= () => {
    
  };

  const handleConsumption= () => {
    
  };

  const handleBuildings= () => {
    
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor={theme.dark}
      indicatorColor={theme.secondary}
      aria-label="secondary tabs example"
    >
      <Tab value="transport" label="Transport" onClick={handleTransport}/>
      <Tab value="land_use" label="Land-use" onClick={handleLandUse} />
      <Tab value="consumption_based" label="Consumption-based" onClick={handleConsumption} />
      <Tab value="buildings" label="Buildings" onClick={handleBuildings}/>
    </Tabs>
  </Box>
  );
};
