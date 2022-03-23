import React, { useState, useEffect } from "react";
import Lightbox from "./components/CoolLightbox";
import ImageMosaic from "./components/ImageMosaic";
import images from "./images";
import { useNFTBalances, useMoralis } from "react-moralis";

const ImageGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState();

  const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

  const { Moralis, isInitialized, account } = useMoralis();

  

  useEffect(() => {
    getNFTBalances({ params: { address: "0x8D96037b23f011F95b4dD288240B6bEb6316f2C3", chain: "0x13881" } })
    console.log(data)
  }, [isLoading]);

  useEffect(() => {
 console.log("mi cuenta: ", account);    console.log(data)
  }, [isLoading]);
  
  setTimeout(() => {
    console.log("mi cuenta: ", account);
  }, 3000);

  return (
    <>
      {/* react-photo-gallery */}
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
