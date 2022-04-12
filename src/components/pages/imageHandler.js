import React, { Component, useEffect, useState } from 'react';
import './imageHandler.css';
import Form from 'react-bootstrap/Form'
import Moralis from "moralis"


const ImageHandler = () => {

  const [loadingImg, setLoadingImg] = useState(false);
  const [fileUrl, updateFileUrl] = useState('');
  const [file, setFile] = React.useState();



  const { profileImg} = 'https://www.shareicon.net/data/2015/12/03/681736_arrow_512x512.png';

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
    <div className="page">
        {/* <div className="container">
      <a href="">
          <h1 className="heading">Add your Image</h1>  */}
          {/* <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} /> */}
          {/* <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Large file input example</Form.Label>
                  <Form.Control onChange={onChange} type="file"/>
          <div className="img-holder" onClick={onChange} style={{
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
        </div> */}

          <label htmlFor="fileInput" className="custom-file-upload">
            {file
              ? <img src={URL.createObjectURL(file)} width="auto" height="245px" alt="imagen" style={{ margin: "1rem", maxWidth: '340px' }} />
              : draft
                ? <img src={nftDraft.image} width="auto" height="245px" alt="imagen" style={{ margin: "1rem", maxWidth: '340px' }} />
                : <ImageIcon color="disabled" sx={{ fontSize: '6rem' }} />}
            <input type="file" name="fileInput" id="fileInput" onChange={(e) => onChangeImg(e)} />
          </label>
    </div>
  );


}


export default ImageHandler;