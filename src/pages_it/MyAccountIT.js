import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Highcharts from 'highcharts';
import ChangePasswordPopup from '../components_admin/ChangePasswordPopup';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'


export function MyAccountIT(props) {


  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
   _getUserDetails();
  },[])


  const _getUserDetails = () => {
    let user_id=localStorage.getItem('staff_id');
    axios.get(URL + "?tag=get_userdatabyid&user_id="+user_id).then(res=>{
      setFullName(res.data[0]['first_name'] + " " + res.data[0]['last_name']);
      setEmail(res.data[0]['email']);
      _selectRole(res.data[0]['user_role']);
      _selectStatus(res.data[0]['user_status']);
    })
  }

  const _selectRole = (data) => {
    console.log("aaa: " + data);
    switch (data) {
      case 1:
        setRole("Admin");
      break;
      case 2:
        setRole("IT Support");
      break;
      case 3:
        setRole("Help Desk");
      break;
    }
  }

  const _selectStatus = (data) => {
    console.log("aaa2: " + data);
    switch (data) {
      case 0:
        setStatus("Inactive");
      break;
      case 1:
        setStatus("Active");
      break;
    }
  }
 
  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'line'
      }, // type of the chart
      title: {
        text: 'Tickets This Year'
      }, // title of the chart
      subtitle: {
        text: 'An overview of tickets received in the year 2022'
      }, // subtitle of the chart
      yAxis: {
        title: {
          text: 'Quantity'
        }, // the title of the Y Axis
      },
      xAxis: {
        min: 0.4,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'Month'
        } // the title of the X Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });
 
    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
  }, [dataSource]);
 
  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Opened',
        data: [10, 14, 18, 61, 65, 54, 74, 79, 87, 89, 92, 93]
      }, {
        name: 'Resolved',
        data: [3, 9, 13, 20, 25, 78, 40, 53, 67, 69, 70, 78]
      }, {
        name: 'Voided',
        data: [9, 15, 31, 50, 56, 60, 64, 67, 79, 82, 67, 97]
      }]);
    }, 2000);
  }, []);
 

    return ( <div className="bodybox">

        <Container>
            <Row>
                <div className="page-title">
                    <h1>My Account</h1><hr></hr>
                </div>
            </Row>
            <Row>
                <div className="page-content">

                    <center><div className="account-dash">
                        <div className="sla">
                                <div className="tix-card-title">
                                    SLA COMPLIANCE RATE
                                </div>
                                <div className="tix-card-number">
                                    78.7%
                                </div>
                        </div>
                        <div className="tix">
                            <div className="tix-card">
                                <div className="tix-card-title">
                                    OPEN
                                </div>
                                <div className="tix-card-number">
                                    4
                                </div>
                            </div>  

                            <div className="tix-card">
                                <div className="tix-card-title">
                                    RESOLVED
                                </div>
                                <div className="tix-card-number">
                                    26
                                </div>
                            </div> 

                            <div className="tix-card">
                                <div className="tix-card-title">
                                    VOIDED
                                </div>
                                <div className="tix-card-number">
                                    4
                                </div>
                            </div> 

                            <div className="tix-card">
                                <div className="tix-card-title">
                                    OVERDUE
                                </div>
                                <div className="tix-card-number">
                                    2
                                </div>
                            </div>   

                            
                        </div>
                    </div></center>

                    <div className='account-information'>
                        <div className='left-account'>
                            <div className='account-full-name'>
                                <b>Full Name:</b> {fullName}
                            </div>
                            <div className='account-email'>
                                <br></br>
                                <b>Email:</b> {email}
                            </div>
                            <div className='account-role'>
                                <br></br>
                                <b>Role:</b> {role}
                            </div>
                        </div>
                        <div className='right-account'>
                                <b>STATUS:</b> {status}
                                <div><ChangePasswordPopup/></div>
                                
                        </div>
                    </div>

                    <div className="dashboard-chart">
                        <b>MY TICKETS OVERVIEW</b>
                        
                        <div>
                        <div ref={refContainer} />
                        </div>
                  

                    </div>

                 </div>
                 
            </Row>
        </Container>

         
    </div>
    )

};

export default MyAccountIT;