import GalleryCard from "./GalleryCard";
import "./gallery-container.css";

const GalleryContainer = () => {
  const galleryData = [
    { imgSrc: "/gallery-img-1.jpg", heading: "Pancakes" },
    { imgSrc: "/gallery-img-2.jpg", heading: "Cupcakes" },
    { imgSrc: "/gallery-img-3.jpg", heading: "Hummus" },
    { imgSrc: "/gallery-img-4.jpg", heading: "Hamburger" },
    { imgSrc: "/gallery-img-5.jpg", heading: "Salmon" },
    { imgSrc: "/gallery-img-6.jpg", heading: "Vegetables" },
  ];

  return (
    <div className="galleryContainer">
      {galleryData.map((gallery, index) => {
        return (
          <GalleryCard
            key={index}
            imgSrc={gallery.imgSrc}
            heading={gallery.heading}
          />
        );
      })}
    </div>
  );
};

export default GalleryContainer;
