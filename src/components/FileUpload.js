import {Component} from "react";
import './FileUpload.css';

export default class FileUpload extends Component {

    state = {
        file: null,
        customerInfo: null
    }

    onFileChange = event => {
        this.setState({
            file: event.target.files[0]
        });
    }

    onFileSubmit = () => {
        let react = this;
        let fileData = new FormData();
        fileData.append("customerFile", this.state.file);

            fetch("http://localhost:3000/api/v1/customer",
            {
                method: 'POST',
                body: fileData
            })
            .then(response => response.json())
            .then(function(response) {
                react.setState({
                    customerInfo: response
                });
            });

    }

    render() {
        return (
            <div className="file-upload">
                <input type="file" onChange={ this.onFileChange }/>
                <button onClick={ this.onFileSubmit }>Upload File</button>
                { this.state.file !== null &&
                    <div className="file-info">
                        <h4>File Info:</h4>
                        <p>File Name: { this.state.file.name }</p>
                        <p>File Type: { this.state.file.type }</p>
                        <p>
                            Last Modified:{" "}
                            { this.state.file.lastModifiedDate.toDateString() }
                        </p>
                    </div>
                }
                { this.state.customerInfo !== null &&
                    <table className="customer-data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Vehicle Type</th>
                                <th>Vehicle Name</th>
                                <th>Vehicle Length (ft)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customerInfo.map(customer => {
                                    return <tr key={customer.email}>
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
