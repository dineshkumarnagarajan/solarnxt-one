import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OverviewTabs from "./OverviewTabs";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import FullScreenChart from "./FullScreenChart";
import { ItemWithHeight,ItemWithOutHeight } from "../../theme/StyledComponents";

export default function BasicGrid() {
  const theme = useTheme();
  const [fullScreen, setFullScreen] = React.useState(null);
  const [fullScreenIndex, setFullScreenIndex] = React.useState(null);
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
    {
      component: (
        <Chart3
          theme={theme}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
          fullScreenIndex={fullScreenIndex}
          setFullScreenIndex={setFullScreenIndex}
          index={2}
        />
      ),
    },
    {
      component: (
        <Chart4
          theme={theme}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
          fullScreenIndex={fullScreenIndex}
          setFullScreenIndex={setFullScreenIndex}
          index={3}
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
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <ItemWithHeight>
              <div
                style={{
                  borderBottom: "1px solid #E5E5E5",
                  padding: "0.8rem",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <VisibilityIcon style={{ margin: 4 }} />
                <Typography textAlign="left" sx={{ fontSize: "1.25rem" }}>
                  OVERVIEW
                </Typography>
              </div>
              <OverviewTabs />
            </ItemWithHeight>
          </Grid>
          <Grid item xs={10}>
            <ItemWithHeight>
              <Grid
                container
                spacing={1}
                // sx={{marginLeft:0,marginTop:0,width:'auto'}}
              >
                {slides.map((Slide) => {
                  return (
                    <Grid item xs={6}>
                      <ItemWithOutHeight>{Slide.component}</ItemWithOutHeight>
                    </Grid>
                  );
                })}
              </Grid>
            </ItemWithHeight>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
