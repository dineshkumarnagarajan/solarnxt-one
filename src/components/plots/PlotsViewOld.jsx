import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import FullScreenChart from "./FullScreenChart";
import {
    StyledSelectLabel,
    StyledSelectField,
  ItemWithOutHeight,
} from "../../theme/StyledComponents";

export default function PlotsView() {
  const theme = useTheme();
  const [fullScreen, setFullScreen] = React.useState(null);
  const [fullScreenIndex, setFullScreenIndex] = React.useState(null);
  const [plotType, setPlotType] = React.useState("");
  const [parameters, setParameters] = React.useState("");
  const [optionsSelector, setOptionsSelector] = React.useState("");
  const handleChangePlotType = (event) => {
    setPlotType(event.target.value);
  };

  const handleChangeParameters = (event) => {
    setParameters(event.target.value);
  };

  const handleChangeOptionsSelector = (event) => {
    setOptionsSelector(event.target.value);
  };

  let slides = [
    {
      component: (
        <Chart1
          theme={theme}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
          fullScreenIndex={fullScreenIndex}
          setFullScreenIndex={setFullScreenIndex}
          index={0}
        />
      ),
    },
    {
      component: (
        <Chart2
          theme={theme}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
          fullScreenIndex={fullScreenIndex}
          setFullScreenIndex={setFullScreenIndex}
          index={1}
        />
      ),
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      {fullScreen ? (
        <FullScreenChart
          fullScreen={fullScreen}
          fullScreenIndex={fullScreenIndex}
          slides={slides}
          // autoplay={true}
          // interval={1000}
        />
      ) : (
        <Grid
          container
          spacing={2}
          // sx={{marginLeft:0,marginTop:0,width:'auto'}}
        >
          <Grid item xs={12}>
            <Box sx={{ minWidth: 120, display: "flex",paddingTop:1 }}>
            <FormControl fullWidth variant="filled" sx={{ padding: "4px 8px" }}>
                <StyledSelectLabel id="Plot-type-select-label">
                Plot type
                </StyledSelectLabel>
                <StyledSelectField
                  labelId="Plot-type-select-label"
                  id="Plot-type-select"
                  value={plotType}
                  label="Plot type"
                  onChange={handleChangePlotType}
                >
                  <MenuItem value={"Rolling week"} >Rolling week</MenuItem>
                  <MenuItem value={"Rolling month"}>Rolling month</MenuItem>
                  <MenuItem value={"Year till date"}>Year till date</MenuItem>
                  <MenuItem value={"Phase wise"}>Phase wise</MenuItem>
                  <MenuItem value={"Successive milestone wise"}>Successive milestone wise</MenuItem>
                </StyledSelectField>
              </FormControl>

              <FormControl fullWidth variant="filled" sx={{ padding: "4px 8px" }}>
                <StyledSelectLabel id="Parameters-select-label">
                  Parameters
                </StyledSelectLabel>
                <StyledSelectField
                  labelId="Parameters-select-label"
                  id="Parameters-select"
                  value={parameters}
                  label="Parameters"
                  onChange={handleChangeParameters}
                >
                  <MenuItem value={"Capacity"}>Capacity</MenuItem>
                  <MenuItem value={"Avg. TAT"}>Avg. TAT</MenuItem>
                </StyledSelectField>
              </FormControl>

              <FormControl fullWidth variant="filled" sx={{ padding: "4px 8px" }}>
                <StyledSelectLabel id="Options-selector-select-label">
                  Options selector
                </StyledSelectLabel>
                <StyledSelectField
                  labelId="Options-selector-select-label"
                  id="Options-selector-select"
                  value={optionsSelector}
                  label="Options selector"
                  onChange={handleChangeOptionsSelector}
                >
                  <MenuItem value={"Sales"}>Sales</MenuItem>
                  <MenuItem value={"D&E"}>D&E</MenuItem>
                  <MenuItem value={"SCM"}>SCM</MenuItem>
                  <MenuItem value={"Logistics"}>Logistics</MenuItem>
                  <MenuItem value={"Execution"}>Execution</MenuItem>
                </StyledSelectField>
              </FormControl>
            </Box>
          </Grid>

          {slides.map((Slide) => {
            return (
              <Grid item xs={6}>
                <ItemWithOutHeight>{Slide.component}</ItemWithOutHeight>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
