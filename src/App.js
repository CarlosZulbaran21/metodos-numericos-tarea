import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./App.css";
import BOOLE from "./BOOLE";
import { Typography } from "@mui/material";
import TRAPEZOIDAL from "./TRAPEZOIDAL";
import SIMPSON3_8 from "./SIMPSON3-8";
import SIMPSON1_3 from "./SIMPSON1-3";
import SIMPSON_ABIERTO from "./SIMPSON_ABIERTO";
function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container_father">
      <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 0 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Metodo Jorge Boole" {...a11yProps(0)} />
          <Tab label="Metodo trapezoidal" {...a11yProps(1)} />
          <Tab label="Metodo de T.Simpson 3/8" {...a11yProps(2)} />
          <Tab label="Metodo de T.Simpson 1/3" {...a11yProps(3)} />
          <Tab label="Metodo de T.Simpson abierto" {...a11yProps(4)} />
        </Tabs>
        <div style={{ height: "100vh" }}>
          <TabPanel
            value={value}
            index={0}
            style={{
              textAlign: "center",
            }}
          >
            <BOOLE />
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            style={{
              textAlign: "center",
            }}
          >
            <TRAPEZOIDAL />
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            style={{
              textAlign: "center",
            }}
          >
            <SIMPSON3_8 />
          </TabPanel>
          <TabPanel
            value={value}
            index={3}
            style={{
              textAlign: "center",
            }}
          >
            <SIMPSON1_3 />
          </TabPanel>
          <TabPanel
            value={value}
            index={4}
            style={{
              textAlign: "center",
            }}
          >
            <SIMPSON_ABIERTO />
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default App;
