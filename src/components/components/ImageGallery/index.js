import React, { useState, useEffect, useContext } from "react";
import Lightbox from "./components/CoolLightbox";
import ImageMosaic from "./components/ImageMosaic";
import images from "./images";
import { useNFTBalances, useMoralis } from "react-moralis";
import ImageGallery from './ImageGallery.css';

const ImageGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState();

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
        {/* r {}eact-photo-gallery */}
        {/* <MapNftData/> */}
        {data?.result.map((nft, index) => (
         <div key={index}>
           <img src={nft.image} alt="foto-nft" className="gallery-foto"/>
           
         </div>
        ))}
        <ImageMosaic
          containerHeight="100px"
          alt="alt"
          images={imagesNft}
          handleClick={(e, { index }) => {
            setCurrentIndex(index);
            setOpen(true);
          }}
        />
        <Lightbox
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={images}
        />
      </>
    )
  }
}


export default ImageGallery; 
