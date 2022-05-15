import {Component} from "react";
import './CustomerTable.css';

export default class CustomerTable extends Component {

    state = {
        sort: "",
        customerInfoSorted: this.props.customerInfo
    };

    componentDidUpdate(prevProps) {
        if (this.props.customerInfo.length !== prevProps.customerInfo.length) {
            this.setState({
                customerInfoSorted: this.sortArray(this.state.sort)
            });
        }
    }

    onSort = event => {
        if (this.state.sort !== event.target.id) {
            this.setState({
                sort: event.target.id
            });
            this.setState({
                customerInfoSorted: this.sortArray(event.target.id)
            });
        } else {
            var arrayCopy = this.state.customerInfoSorted != null ? this.state.customerInfoSorted.reverse() : this.props.customerInfo.reverse();
            this.setState({
                customerInfoSorted: arrayCopy
            });
        }
    }

    sortArray = (sort) => {
        var tempArray = this.props.customerInfo;

        tempArray.sort(function(a, b) {
            switch(sort) {
                case "email":
                    const emailA = a.email.toUpperCase().trim();
                    const emailB = b.email.toUpperCase().trim();

                    if (emailA < emailB) {
                        return -1;
                    } else if (emailA > emailB) {
                        return 1;
                    } else {
                        return 0;
                    }

                case "vehicleType":
                    const vehicleTypeA = a.vehicle.type.toUpperCase().trim();
                    const vehicleTypeB = b.vehicle.type.toUpperCase().trim();

                    if (vehicleTypeA < vehicleTypeB) {
                        return -1;
                    } else if (vehicleTypeA > vehicleTypeB) {
                        return 1;
                    } else {
                        return 0;
                    }

                case "vehicleName":
                    const vehicleNameA = a.vehicle.name.toUpperCase().trim();
                    const vehicleNameB = b.vehicle.name.toUpperCase().trim();

                    if (vehicleNameA < vehicleNameB) {
                        return -1;
                    } else if (vehicleNameA > vehicleNameB) {
                        return 1;
                    } else {
                        return 0;
                    }

                case "vehicleLength":
                    const vehicleLengthA = parseInt(a.vehicle.length);
                    const vehicleLengthB = parseInt(b.vehicle.length);

                    return vehicleLengthA - vehicleLengthB;

                default:
                    const nameA = a.name.toUpperCase().trim();
                    const nameB = b.name.toUpperCase().trim();

                    if (nameA < nameB) {
                        return -1;
                    } else if (nameA > nameB) {
                        return 1;
                    } else {
                        return 0;
                    }
            }
        });
        return tempArray;
    }

    render() {

        var customerInfo = this.state.customerInfoSorted !== null ? this.state.customerInfoSorted : this.props.customerInfo;
        var id = 0;

        return (
            <div className="file-upload">
                { customerInfo !== null &&
                    <table className="customer-data-table">
                        <thead>
                            <tr>
                                <th onClick={this.onSort} id="name">Name</th>
                                <th onClick={this.onSort} id="email">Email</th>
                                <th onClick={this.onSort} id="vehicleType">Vehicle Type</th>
                                <th onClick={this.onSort} id="vehicleName">Vehicle Name</th>
                                <th onClick={this.onSort} id="vehicleLength">Vehicle Length (ft)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerInfo.map(customer => {
                                    return <tr key={id++}>
                                        <td>{ customer.name }</td>
                                        <td>{ customer.email }</td>
                                        <td>{ customer.vehicle.type }</td>
                                        <td>{ customer.vehicle.name }</td>
                                        <td>{ parseInt(customer.vehicle.length) }</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}
