import React, { useState, useEffect, useContext } from "react";
import { useNFTBalances, useMoralis } from "react-moralis";
import './ImageGallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImageGallery = () => {
  // const [isOpen, setOpen] = useState(false);
  // const [currentImageIndex, setCurrentIndex] = useState();

  const { getNFTBalances, data, isLoading } = useNFTBalances();
  const { user, isAuthenticated } = useMoralis();

  const [imagesNft, setImagesNft] = useState([]);
  const [loading, setLoading] = useState(true)

  // const [nftData, setNftData] = useContext(AppContext);

  useEffect(() => {
    getNFTBalances({ params: { address: "0x8D96037b23f011F95b4dD288240B6bEb6316f2C3", chain: "0x13881" } })
    console.log("mi data: ", data)
  }, [isLoading]);

  const [address, setAddress] = useState();
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user.attributes.ethAddress);
    }
  }, [isAuthenticated]);


  useEffect(() => {
    data?.result.forEach((nft) => {
      const nextList = [...imagesNft];
      nextList.push(nft);
      setImagesNft(nextList)
    })
  }, [data]);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      console.log("mis imagenes nft 2! ", imagesNft)
    }, [1000])
  }, [imagesNft])

  console.log("array de NFTs: ",imagesNft)

  // const MapNftData = () => {
  // }
  if (loading) {
    return <h1>Loading... </h1>
  } else {
    return (
      <>
         <div className="justify-content-center">
           <div className="p-4">
            <Container>
              <Row>
                {data?.result.map((nft, index) => (
                  <Col xs={6} md={4}>
                    <div key={index} className="nft-container">
                      <img src={nft.image} alt="foto-nft" className="gallery-foto overflow-hidden"/>
                      <div className="p-1 bg-dark name-container">
                        <p className="nft-name">{nft.name}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
           </div>
         </div>
      </>
    )
  }
}


export default ImageGallery; 
