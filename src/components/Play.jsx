import { useEffect, useState } from "react";

const Play = () => {

  const [images, setImages] = useState([])

  var gallery = []
  fetch('https://res.cloudinary.com/vite-img/image/list/imgs.json')
    .then(response => response.json())
    .then(data => {
      data.resources.forEach(element => {
        gallery.push("https://res.cloudinary.com/vite-img/q_10/" + element.public_id)
      });
      setImages(gallery)
    });

  return (
    <div>
      <div className="w-full p-4 pb-10 mx-auto mb-10 gap-3 columns-3 columns-3xs space-y-3 w-100 ">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative flex items-start w-100">
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover shadow"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default Play