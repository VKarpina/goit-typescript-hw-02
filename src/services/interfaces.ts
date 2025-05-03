export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  description?: string;
  user: {
    name: string;
    username: string;
    profile_image?: {
      small: string;
    };
  };
  likes: number;
  width: number;
  height: number;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface LoadMoreBtnProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export interface ImageCardProps {
  item: Image;
  onImageClick: (image: Image) => void;
}
