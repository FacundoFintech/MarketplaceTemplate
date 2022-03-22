import React, { Component } from 'react';
import './imageHandler.css';

export class ImageHandler extends Component {
  state={
    profileImg:'https://www.shareicon.net/data/2015/12/03/681736_arrow_512x512.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div className="page">
				<div className="container">
					<h1 className="heading">Add your Image</h1>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="img-holder" onClick={this.imageHandler} style={{
                        borderStyle: 'dotted',
                        borderWidth: 5,
                        borderRadius: 7,
                    }}>
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<div className="label">
                    <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
                    </div>
				</div>
			</div>
		);
	}
}

export default ImageHandler;