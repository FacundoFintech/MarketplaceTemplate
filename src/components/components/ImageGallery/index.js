import React, { useState, useEffect, useContext } from "react";
import { useNFTBalances, useMoralis } from "react-moralis";
import './ImageGallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImageGallery = () => {

  const { getNFTBalances, data, isLoading } = useNFTBalances();
  const { user, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (!isLoading && user) {
      console.log({ user, isAuthenticated, isLoading })
      getNFTBalances({ params: { address: user.attributes.ethAddress, chain: "0x13881" } })
    }
  }, [isLoading, user/* ,address , user.attribues.ethAddress , user*/]);

  if (isLoading) {
    return <h1>Loading... </h1>
  } else {
    return (
      <>
        <div className="justify-content-center">
          <div className="p-4">
            <Container>
              <Row>
                {data?.result.filter(nft=>nft.image).map((nft, index) => {
                  return (
                    <Col xs={6} md={4}>
                      <div key={index} className="nft-container">
                        <img src={nft.image} alt="foto-nft" className="gallery-foto overflow-hidden" />
                        <div className="p-1 bg-dark name-container">
                          <p className="nft-name">{nft.name}</p>
                        </div>
                      </div>
                    </Col>
                  )
                }

                )}
              </Row>
            </Container>
          </div>
        </div>
      </>
    )
  }
}


export default ImageGallery; 
