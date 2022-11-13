import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";

const DashboardHelp = () => {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: "line",
      }, // type of the chart
      title: {
        text: "Tickets This Year",
      }, // title of the chart
      subtitle: {
        text: "An overview of tickets received in the year 2022",
      }, // subtitle of the chart
      yAxis: {
        title: {
          text: "Quantity",
        }, // the title of the Y Axis
      },
      xAxis: {
        min: 0.4,
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
        title: {
          text: "Month",
        }, // the title of the X Axis
      },
      tooltip: {
        headerFormat:
          '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false,
      },
      series: dataSource, // set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    } else {
      chart.showLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([
        {
          name: "Opened",
          data: [10, 14, 18, 61, 65, 72, 74, 79, 87, 89, 92, 93],
        },
        {
          name: "Resolved",
          data: [3, 9, 13, 20, 25, 38, 40, 53, 55, 69, 70, 78],
        },
        {
          name: "Voided",
          data: [9, 15, 31, 50, 56, 60, 64, 67, 79, 82, 95, 97],
        },
      ]);
    }, 2000);
  }, []);

  return (
    <div className="bodybox">
      <Container>
        <Row>
          <div className="page-title">
            <h1>Dashboard</h1>
          </div>
        </Row>
        <Row>
          <div className="page-content">
            <center>
              <div className="dashboard-info-cards">
                <div className="dashboard-info-card">
                  <center>
                    <div className="dashboard-info-card-title">
                      Open Tickets
                    </div>
                    <div className="dashboard-info-card-number">31</div>
                  </center>
                </div>
                <div className="dashboard-info-card">
                  <center>
                    <div className="dashboard-info-card-title">New Request</div>
                    <div className="dashboard-info-card-number">12</div>
                  </center>
                </div>
                <div className="dashboard-info-card">
                  <center>
                    <div className="dashboard-info-card-title">
                      Solved Tickets
                    </div>
                    <div className="dashboard-info-card-number">23</div>
                  </center>
                </div>
              </div>
            </center>
            <div className="dashboard-chart">
              <b>OVERVIEW</b>

              <div>
                <div ref={refContainer} />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardHelp;
