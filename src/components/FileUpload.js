import {Component} from "react";
import './FileUpload.css';
import CustomerTable from "./CustomerTable";

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
        let frankenArray = [];

        fileData.append("customerFile", this.state.file);

            fetch("http://localhost:3000/api/v1/customer",
            {
                method: 'POST',
                body: fileData
            })
            .then(response => response.json())
            .then(function(response) {
                frankenArray = react.state.customerInfo !== null ? react.state.customerInfo.concat(response) : response;
                react.setState({
                    customerInfo: frankenArray
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
                    <CustomerTable customerInfo={this.state.customerInfo}/>
                }
            </div>
        );
    }
}
