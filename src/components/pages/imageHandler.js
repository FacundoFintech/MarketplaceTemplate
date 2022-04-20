import React, { Component, useEffect, useState } from 'react';
import './imageHandler.css';
import Form from 'react-bootstrap/Form'
import Moralis from "moralis"
// import ImageIcon from '@mui/icons-material/Image';
import imageIcon from '../../assets/image-icon.svg';


const ImageHandler = ({setFileUrl, fileUrl}) => {

  
  
  const [loadingImg, setLoadingImg] = useState(false);
  // const [fileUrl, updateFileUrl] = useState('');
  // const [file, setFile] = React.useState();

  //codigo seba
  const [file, setFile] = React.useState();
  const [contract, setContract] = React.useState("");
  // Categoría ya subido a Moralis
  const [success, setSuccess] = React.useState(false)
  // Variables para el tab de atributos y propiedades



  // Escucha los cambios de imagenes
  const onChangeImg = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
    setLoadingImg(true)
    const file = e.target.files[0]
    try {
        console.log("el loadingImg: ",loadingImg)
        console.log("el file: ",file)
        const filee = new Moralis.File(file.name, file)
        await filee.saveIPFS({useMasterKey: true});
        console.log(filee.ipfs(), filee.hash())
        const url = filee.ipfs()
        setFileUrl(url)
        console.log('el file URL: ' + fileUrl)
        setLoadingImg(false)
    } catch (error) {
        console.log('Error uploading file: ', error)
    }
  };
  // 1) Comienza la subida a Pinata IPFS
  const handleSubmit = async (e, estado) => {
    e.preventDefault();
    await uploadMoralis(e, estado)
  };
  // a) Sube la imagen
  // const uploadImage = async (e, estado) => {
  //   const data = new FormData();
  //   data.append("file", file);
  //   axios
  //     .post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, data, {
  //       maxBodyLength: "Infinity",
  //       headers: {
  //         pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
  //         pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY,
  //       },
  //     })
  //     .then((response) => {
  //       return
  //     })
  //     .catch((e) => console.log(e));
  // };
  //Fin codigo seba


  async function uploadMoralis(e) {
    setLoadingImg(true)
    const file = e.target.files[0]
    try {
        console.log("el loadingImg: ",loadingImg)
        console.log("el file: ",file)
        const filee = new Moralis.File(file.name, file)
        await filee.saveIPFS({useMasterKey: true});
        console.log(filee.ipfs(), filee.hash())
        const url = filee.ipfs()
        setFileUrl(url)
        console.log('el file URL: ' + fileUrl)
        setLoadingImg(false)
    } catch (error) {
        console.log('Error uploading file: ', error)
    }
  }

  return (
    <div className="page">
      {/* <form onSubmit={(e) => handleSubmit(e)}> */}
        <div className="upload-img">
            <label htmlFor="fileInput" className="custom-file-upload">
            {!file
                ? <img src={imageIcon} alt="image-icon" className="image-icon" />
                : <img src={URL.createObjectURL(file)} width="auto" height="245px" alt="imagen" style={{ margin: "1rem", maxWidth: '340px', borderRadius: '5%' }} />}
              <input type="file" name="fileInput" id="fileInput" onChange={(e) => onChangeImg(e)} />
            </label>
        </div>
      {/* </form> */}
    </div>
  );


}


export default ImageHandler;