import React, { Component } from "react";
import Highcharts from "highcharts9";
import ChartCard from "./ChartCard";
import { chartsColorArray } from "../../utils/utils";

class Chart4 extends Component {
  chart4() {
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
    Highcharts.chart("chart4", {
      chart: {
        type: "column",
        renderTo: "chart4",
        backgroundColor: theme.palette.background.paper,
        zoomType: "x",
      },
      title: {
        text: null,
        style: {
          //  color: theme.palette.text.secondary,
          // fontSize: 13,
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
          stack: "male",
        },
        {
          name: "Joe",
          data: [3, 4, 4, 2, 5],
          stack: "male",
        },
        {
          name: "Jane",
          data: [2, 5, 6, 2, 1],
          stack: "female",
        },
        {
          name: "Janet",
          data: [3, 0, 4, 4, 3],
          stack: "female",
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }

  componentDidMount() {
    this.chart4();
  }

  componentDidUpdate(prevProps) {
    this.chart4();
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
        title="Chart 4"
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        index={index}
        fullScreenIndex={fullScreenIndex}
        setFullScreenIndex={setFullScreenIndex}
      >
        <div id="chart4" className={fullScreen ? "chartFullScreen" : "chart"} />
      </ChartCard>
    );
  }
}

export default Chart4;
