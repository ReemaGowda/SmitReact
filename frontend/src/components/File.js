import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';


class File extends Component {
 constructor(props){
  super(props);
  this.state = {
    csvData: ''
  };
}

handleFiles = files => {
     var reader = new FileReader();
     reader.onload = () => this.setState({ csvData: reader.result })
   reader.readAsText(files[0]);
}

render() {
return (
    <div>
        <h1>Upload a CSV (*.csv) File</h1>
         <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
             <div className="btn-container">
             <button className='btn btn1'>Upload a file</button>
             </div>
          </ReactFileReader>
          <CsvToHtmlTable
               data={this.state.csvData}
               csvDelimiter=","
           />
   </div>

    );
  }
}
export default File;


