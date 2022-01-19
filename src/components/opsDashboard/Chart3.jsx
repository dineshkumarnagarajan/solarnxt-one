import React, { Component } from "react";
import Highcharts from "highcharts9";
import ChartCard from "./ChartCard";
import { chartsColorArray } from "../../utils/utils";

class Chart3 extends Component {
  chart3() {
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
    Highcharts.chart("chart3", {
      chart: {
        type: "column",
        renderTo: "chart3",
        backgroundColor: theme.palette.background.paper,
        zoomType: "x",
      },
      title: {
        text: null,
        style: {
          // color: theme.palette.text.secondary,
          //  fontSize: 13,
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
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color:
                // theme
                (Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color) ||
                "gray",
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
          stacking: "normal",
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
          name: "John",
          data: [5, 3, 4, 7, 2],
        },
        {
          name: "Jane",
          data: [2, 2, 3, 2, 1],
        },
        {
          name: "Joe",
          data: [3, 4, 4, 2, 5],
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }

  componentDidMount() {
    this.chart3();
  }

  componentDidUpdate(prevProps) {
    this.chart3();
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
        title="Chart 3"
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        index={index}
        fullScreenIndex={fullScreenIndex}
        setFullScreenIndex={setFullScreenIndex}
      >
        <div id="chart3" className={fullScreen ? "chartFullScreen" : "chart"} />
      </ChartCard>
    );
  }
}

export default Chart3;
