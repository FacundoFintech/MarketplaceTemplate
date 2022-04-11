import React, { Component } from 'react';
import './imageHandler.css';
import Form from 'react-bootstrap/Form'
import Moralis from "moralis"


export class ImageHandler extends Component {
  state={
    profileImg:'https://www.shareicon.net/data/2015/12/03/681736_arrow_512x512.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    console.log('hola')
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state;

    const myOnClick = () => {
      alert("prueba")
    }

    async function onChange(e) {
      setLoadingImg(true)
      const file = e.target.files[0]
      try {
          console.log("el loadingImg: ",loadingImg)
          console.log("el file: ",file)
          const filee = new Moralis.File(file.name, file)
          await filee.saveIPFS({useMasterKey: true});
          console.log(filee.ipfs(), filee.hash())
          const url = filee.ipfs()
          updateFileUrl(url)
          console.log('el file URL: ' + fileUrl)
          setLoadingImg(false)
      } catch (error) {
          console.log('Error uploading file: ', error)
      }
    }

		return (
			<div className="page" onClick={myOnClick}>
          <div className="container">
        <a href="">
            <h1 className="heading">Add your Image</h1>
            {/* <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} /> */}
            <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control onChange={onChange} type="file"/>
            <div className="img-holder" onClick={this.imageHandler} style={{
              borderStyle: 'dotted',
              borderWidth: 5,
              borderRadius: 7,
            }}>
              <img src={profileImg} alt="" id="img" className="img" />
            </div>
                        </Form.Group>
            <div className="label">
                      <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
            </div>
        </a>
          </div>
			</div>
		);
	}
}

export default ImageHandler;