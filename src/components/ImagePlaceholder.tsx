import React from 'react';
import '../styles/ImagePlaceholder.css';

interface ImagePlaceholderProps {
  description: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ description }) => {
  return <div className='image-placeholder'>[Снимка: {description}]</div>;
};

export default ImagePlaceholder;
