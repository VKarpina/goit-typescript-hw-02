import { FC } from "react";
import { ImageGalleryProps } from "../../services/interfaces";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((item) => (
        <ImageCard onImageClick={onImageClick} key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
