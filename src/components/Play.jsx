
const Play = () => {

  const gallery = Object.values(import.meta.glob('../assets/images/lightroom_edits_webp/*.{webp, WEBP, png, jpg, jpeg, JPEG, PNG}', { eager: true, as: 'url' }))

  return (
    <div>
      <div className="w-full p-4 pb-10 mx-auto mb-10 gap-3 columns-3 columns-3xs space-y-3 w-100 ">
        {gallery.map((image, index) => (
          <div key={index} className="relative flex items-start w-100">
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-auto object-cover shadow"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div >
  );
}

export default Play