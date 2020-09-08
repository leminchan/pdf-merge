import React, {useState, useEffect } from 'react'
import dog from "../images/cute_dog.jpg";

class Main extends React.Component {
    const [test, setTest] = useState(0);

    constructor(props) {
        super(props);
        this.state = {
            imageURL: dog,
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
    
        fetch('http://localhost:8000/upload', { method: 'POST', body: data })
        .then((response) => { response.json().then((body) => { 
            this.setState({ imageURL: `http://localhost:8000/${body.file}` });
          });
        });
      }

    render() {
        return (
          <form onSubmit={this.handleUploadImage}>
            <div>
              <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
            <div>
              <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
            </div>
            <br />
            <div>
              <input type="submit"></input>
            </div>
            <img src={this.state.imageURL} alt="img" />
          </form>
        );
      }
}

export default Main;