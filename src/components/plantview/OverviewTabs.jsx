import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import PlantInfo from "./plantInfo/PlantInfo";
import Documents from "./documents/Documents";
import Tasks from "./tasks/Tasks";
import { CommonStylesFunction } from "../../theme/Theme";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function OverviewTabs(props) {
  const commonStyles = CommonStylesFunction();
  const {
    tabAppBar,
    tabBG
  } = commonStyles;
  const { setCurrentIndex } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={tabBG}>
      <AppBar
        position="static"
        sx={tabAppBar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Plant Info" {...a11yProps(0)} />
          <Tab label="Documents" {...a11yProps(1)} />
          <Tab label="Tasks" {...a11yProps(2)} />
          <Tab label="Alerts" {...a11yProps(3)} />
          <Tab label="Logs" {...a11yProps(4)} />
          <IconButton
            size="medium"
            aria-label="more"
            onClick={() => setCurrentIndex(null)}
          >
            <Close />
          </IconButton>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PlantInfo />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Documents />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Tasks />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Alerts Coming soon
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Logs Coming soon
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
