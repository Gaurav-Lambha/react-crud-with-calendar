import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            IsApiError: false
        };
    }

    render() {      
        const fakeData = [
            {
                customer_id: 1500,
                customer_name: "Pennsauken NJ0",
                project_manager: "Aleesha Clark1",
                projected_end_date: "2021-04-11T00:00:00.000Z",
                projected_start_date: "2021-04-11T00:00:00.000Z"
            },
            {
                customer_id: 1501,
                customer_name: "Pennsauken NJ1",
                project_manager: "Aleesha Clark1",
                projected_end_date: "2021-04-11T00:00:00.000Z",
                projected_start_date: "2021-04-11T00:00:00.000Z"
            },
            {
                customer_id: 1502,
                customer_name: "Pennsauken 2",
                projected_end_date: "2021-04-12T00:00:00.000Z",
                projected_start_date: "2021-04-12T00:00:00.000Z",
                project_manager: "Aleesha Clark2"
            },
            {
                customer_id: 1503,
                customer_name: "Pennsauken 3",
                projected_end_date: "2021-04-13T00:00:00.000Z",
                projected_start_date: "2021-04-13T00:00:00.000Z",
                project_manager: "Aleesha Clark3"
            },
            {
                customer_id: 1504,
                customer_name: "Pennsauken 4",
                projected_end_date: "2021-04-14T00:00:00.000Z",
                projected_start_date: "2021-04-14T00:00:00.000Z",
                project_manager: "Aleesha Clark4"
            },
            {
                customer_id: 1505,
                customer_name: "Pennsauken 5",
                projected_end_date: "2021-04-14T00:00:00.000Z",
                projected_start_date: "2021-04-14T00:00:00.000Z",
                project_manager: "Aleesha Clark"
            },
            {
                customer_id: 1506,
                customer_name: "Pennsauken 6",
                projected_end_date: "2021-04-15T00:00:00.000Z",
                projected_start_date: "2021-04-15T00:00:00.000Z",
                project_manager: "Aleesha Clark"
            },
            {
                customer_id: 1507,
                customer_name: "Pennsauken 7",
                projected_end_date: "2021-04-16T00:00:00.000Z",
                projected_start_date: "2021-04-16T00:00:00.000Z",
                project_manager: "Aleesha Clark"
            }
        ]
        const obj = [];
        const weekStartDate = new Date();
        // const calendarArr = [];
        for (let i = 0; i <= 6; i++) {
            const avail = fakeData.filter(f => {
                const d1 = moment(f.projected_start_date).format('MM-DD-YYYY');
                const d2 = moment().startOf('week').add(i, 'days').format('MM-DD-YYYY');
                return d1 == d2;
            });
            const calendarHeader = {
                day: moment(weekStartDate).startOf('week').add(i, 'days').format('dddd'),
                date: moment(weekStartDate).startOf('week').add(i, 'days').format('MM-DD-YYYY'),
                dateLb: moment(weekStartDate).startOf('week').add(i, 'days').format('MMMM DD'),
            }
            if (avail && avail.length) {
                const customerArr = [];
                avail.map(a => {
                    customerArr.push(a);
                });
                calendarHeader['data'] = customerArr;
                calendarHeader['isAvailable'] = true;
                obj.push(calendarHeader);
            } else {
                calendarHeader['data'] = [];
                calendarHeader['isAvailable'] = false;
                obj.push(calendarHeader);
            }
        }
        console.log('obj>>', obj);
        debugger;

        return (
            <div>
                <h1>Job Calendar</h1>
                <div className="job-tbl-calendar">
                    <table className="table">
                        <tr>
                            {obj.map((value, index) => {
                                return <th key={index}>{value.day} - {value.dateLb} </th>
                            })}
                        </tr>
                        <tr className="jc-tr1" height="200px">
                            {obj.map((value, index) => {
                                if (value && value.isAvailable == true) {
                                    return <td key={index}>
                                        {value && value.data.map((item, cIndex) => {
                                            return <div class="customerCard">
                                               CN : {item.customer_name} <br></br>
                                               RMR :  <br></br>
                                               PM : {item.project_manager}
                                               <i className="fas fa-plus-square"><span style={{ marginLeft: '5px' }}> Add Job Assignment</span></i>
                                           </div>
                                        })}
                                    </td>
                                } else {
                                    return <td> </td>
                                }
                            })}
                        </tr>
                    </table>
                </div>
            </div>

        );
    }
}
export default Calendar;