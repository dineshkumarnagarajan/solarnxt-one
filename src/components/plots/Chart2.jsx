import React, { Component } from "react";
import Highcharts from "highcharts9";
import ChartCard from "./ChartCard";
import { chartsColorArray } from "../../utils/utils";

class Chart2 extends Component {
  chartPlotsView2() {
    const { theme } = this.props;
    Highcharts.theme = {
      colors: chartsColorArray,
    };
    Highcharts.setOptions(Highcharts.theme);
    Highcharts.setOptions({
      global: {
        useUTC: false,
      },
    });
    Highcharts.chart("chartPlotsView2", {
      chart: {
        type: "spline",
        renderTo: "chartPlotsView2",
        backgroundColor: theme.palette.background.paper,
        zoomType: "xy",
      },
      title: {
        text: null,
        style: {
          //   color: theme.palette.text.secondary,
          //   fontSize: 13,
          fontWeight: "bold",
        },
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        crosshair: true,
        labels: {
          style: {
            //    fontSize:'1rem',
            color: theme.palette.text.secondary,
          },
        },
        // gridLineColor: "#D3D3D3",
        lineWidth: 0.1,
      },

      yAxis: [
        {
          //   gridLineColor: "#D3D3D3",
          //    gridLineWidth: 0.15,
          title: {
            text: "kWh",
            style: {
              fontWeight: "bold",
              //   fontSize:'1rem',
              color: theme.palette.text.secondary,
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: theme.palette.text.secondary,
            },
          },
        },
      ],

      legend: {
        enabled: true,
        itemStyle: {
          color: theme.palette.text.secondary,
        },
      },

      tooltip: {
        shared: true,
        itemStyle: {
          //   color: "#D3D3D3",
          fontWeight: "bold",
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
        series: {
          states: {
            inactive: {
              opacity: 1,
            },
          },
        },
      },
      series: [
        {
          name: "Tokyo",
          data: [
            49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4,
          ],
        },
        {
          name: "New York",
          data: [
            83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
            106.6, 92.3,
          ],
        },
        {
          name: "London",
          data: [
            48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
            51.2,
          ],
        },
        {
          name: "Berlin",
          data: [
            42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
            51.1,
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }

  componentDidMount() {
    this.chartPlotsView2();
  }

  componentDidUpdate(prevProps) {
    this.chartPlotsView2();
  }
  render() {
    const {
      fullScreen,
      setFullScreen,
      index,
      fullScreenIndex,
      setFullScreenIndex,
    } = this.props;
    return (
      <ChartCard
        title="Chart 2"
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        index={index}
        fullScreenIndex={fullScreenIndex}
        setFullScreenIndex={setFullScreenIndex}
      >
        <div id="chartPlotsView2" className={fullScreen ? "chartPlotsViewFullScreen" : "chartPlotsView"} />
      </ChartCard>
    );
  }
}

export default Chart2;
