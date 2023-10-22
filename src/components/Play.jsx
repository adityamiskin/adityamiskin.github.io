const Play = () => {

  var gallery = []

  fetch('https://res.cloudinary.com/vite-img/image/list/imgs.json')
    .then(response => response.json())
    .then(data => {
      data.resources.forEach(element => {
        gallery.push("https://res.cloudinary.com/vite-img/q_60/" + element.public_id)
      });
    });

  console.log(gallery)

  // const gallery = Object.values(import.meta.glob('../assets/images/lightroom_edits_webp/*.{webp, WEBP, png, jpg, jpeg, JPEG, PNG}', { eager: true, as: 'url' }))

  return (
    <div>
      <div className="w-full p-4 pb-10 mx-auto mb-10 gap-3 columns-3 columns-3xs space-y-3 w-100 ">
        {gallery.map((image, index) => {
          console.log(image)
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