import React, { Component } from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "../../styles/Creator.css";
import PicturePreview from "./PicturePreview";

class ImageLoader extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedFile: null,
      selectedFileUrl: null
    };
  }

  fileSelectedHandler = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        selectedFile: file,
        selectedFileUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  uploadFile = () => {
    let file = { ...this.state.selectedFile };
    this.props.fileSelectedHandler(file);
  };
  render() {
    return (
      <div className="Creator">
        <div>
          <input type="file" onChange={this.fileSelectedHandler} />
          <Button size="small" color="green" onClick={this.uploadFile}>
            <Icon name="upload" size="small"/>
            Upload
          </Button>
        </div>
        <Divider horizontal />
        <PicturePreview imageUrl={this.state.selectedFileUrl} />
      </div>
    );
  }
}

export default ImageLoader;
