import React, { useState, useEffect, useContext } from "react";
import Lightbox from "./components/CoolLightbox";
import ImageMosaic from "./components/ImageMosaic";
import images from "./images";
import { useNFTBalances, useMoralis } from "react-moralis";

const ImageGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState();

  const { getNFTBalances, data, isLoading } = useNFTBalances();
  const { user, isAuthenticated } = useMoralis();

  // const [nftData, setNftData] = useContext(AppContext);

  

  useEffect(() => {
    getNFTBalances({ params: { address: "0x8D96037b23f011F95b4dD288240B6bEb6316f2C3", chain: "0x13881" } })
    console.log("mi data: ",data)
  }, [isLoading]);

  const [address, setAddress] = useState();
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user.attributes.ethAddress);
    }
  }, [isAuthenticated]);

  const MapNftData = () => {
    data !== null && data?.result.map((nft, index) => (
      <div key={index} >
            <img
              height="140"
              src={nft.metadata?.image}
              alt="NFT without image"
            />
      </div>
    ))
  }

  return (
    <>
      {/* react-photo-gallery */}
      <MapNftData/>
      <ImageMosaic
        images={images}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      />
      {/* react-spring-lightbox */}
      <Lightbox
        currentImageIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        images={images}
      />
    </>
  );
};

export default ImageGallery;
