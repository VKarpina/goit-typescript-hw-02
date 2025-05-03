import s from "./ImageCard.module.css";
import { FC } from "react";
import { ImageCardProps } from "../../services/interfaces";

const ImageCard: FC<ImageCardProps> = ({ item, onImageClick }) => {
  const {
    urls: { small },
    alt_description,
  } = item;
  return (
    <li className={s.imageItem}>
      <div>
        <img
          className={s.image}
          src={small}
          alt={alt_description || "Image"}
          onClick={() => onImageClick(item)}
        />
      </div>
    </li>
  );
};

export default ImageCard;
