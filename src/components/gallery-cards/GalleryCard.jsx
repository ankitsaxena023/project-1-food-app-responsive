import "./gallery-card.css";

const GalleryCard = ({ imgSrc, heading }) => {
  return (
    <>
      <a href="#" className="galleryLink" title="Order Now">
        <img src={imgSrc} alt={heading} className="galleryItemImg" />
        <h3 className="galleryItemHeading">{heading}</h3>
        <p className="galleryItemDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          consequatur.
        </p>
      </a>
    </>
  );
};

export default GalleryCard;
