import {Component} from "react";
import './FileUpload.css';
import CustomerTable from "./CustomerTable";

export default class FileUpload extends Component {

    state = {
        file: null,
        customerInfo: null
    }

    onFileChange = event => {
        if (event.target.files.length) {
            this.setState({
                file: event.target.files[0]
            });
        }
    }

    onFileSubmit = () => {
        let react = this;
        let fileData = new FormData();
        let frankenArray = [];

        if (this.state.file.type === "text/plain" || this.state.file.type === "text/csv") {
            fileData.append("customerFile", this.state.file);

            fetch("http://localhost:9000/api/v1/customer",
            {
                method: 'POST',
                body: fileData
            })
            .then(response => response.json())
            .then(function(response) {
                if (response) {
                    frankenArray = react.state.customerInfo !== null ? react.state.customerInfo.concat(response) : response;
                    react.setState({
                        customerInfo: frankenArray
                    });
                }
            }).catch(function(response) {
                alert("Oh no, something seems to have gone wrong. Status code: "+ response.status);
            });
        } else {
            alert("Please make sure your file is a plain text file (.txt, .csv, etc.)");
        }
    }

    render() {
        return (
            <div className="file-upload">
                <input type="file" onChange={ this.onFileChange }/>
                { this.state.file !== null &&
                    <div>
                        <button onClick={ this.onFileSubmit }>Upload File</button>
                        <div className="file-info">
                            <h4>File Info:</h4>
                            <p>File Name: { this.state.file.name }</p>
                            <p>File Type: { this.state.file.type }</p>
                            <p>
                                Last Modified:{" "}
                                { this.state.file.lastModifiedDate.toDateString() }
                            </p>
                        </div>
                    </div>
                }
                { this.state.customerInfo !== null &&
                    <CustomerTable customerInfo={this.state.customerInfo}/>
                }
            </div>
        );
    }
}
