import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../../services/interfaces";
// import {
//   Image,
//   SearchBarProps,
//   LoadMoreBtnProps,
//   ImageModalProps,
//   ImageGalleryProps,
// } from "../../services/interfaces";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [loadMore, setLoadMore] = useState(true);
  const per_page = 9;

  useEffect(() => {
    const getImages = async () => {
      if (query.trim() === "") return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data: Image[] = await fetchImages(query, page, per_page);
        setImages((prev) => [...prev, ...data]);
        if (data.length === 0) {
          toast.error("No image available! Try another query!");
          setLoadMore(false);
        }
        if (data.length < per_page) {
          setLoadMore(false);
        } else {
          setLoadMore(true);
        }
      } catch {
        toast.error("This is an error!");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page, per_page]);

  const onSubmit = (newQuery: string) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setLoadMore(true);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {!isLoading && loadMore && images.length > 0 && (
        <LoadMoreBtn setPage={setPage} />
      )}
      <ImageModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </>
  );
};

export default App;
