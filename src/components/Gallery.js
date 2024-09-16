import promo1 from "../assets/image1.png";
import promo2 from "../assets/image2.png";
import promo3 from "../assets/image3.png";
import promo4 from "../assets/image4.jpg";
import promo6 from "../assets/image6.png";

const Gallery = () => {
  return (
    <div className="text-gray-600 body-font container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          {/* Image with hover details */}
          <div className="relative md:p-2 p-1 w-1/2 group">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block transform transition duration-300 ease-in-out hover:scale-105"
              src={promo3}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">Product Name</h3>
              <p className="text-white text-sm">
                This is a brief description of the product.
              </p>
              <p className="text-white text-lg font-bold">$99.99</p>
            </div>
          </div>

          {/* Image with scale and shadow effects */}
          <div className="relative md:p-2 p-1 w-1/2 group">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              src={promo2}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">Product Name</h3>
              <p className="text-white text-sm">
                This is a brief description of the product.
              </p>
              <p className="text-white text-lg font-bold">$99.99</p>
            </div>
          </div>

          {/* Image with opacity change on hover */}
          <div className="relative md:p-2 p-1 w-full group">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block transform transition duration-300 ease-in-out hover:scale-105"
              src={promo1}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">Product Name</h3>
              <p className="text-white text-sm">
                This is a brief description of the product.
              </p>
              <p className="text-white text-lg font-bold">$99.99</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-1/2">
          {/* Image with opacity change on hover */}
          <div className="relative md:p-2 p-1 w-full group">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block transform transition duration-300 ease-in-out hover:scale-105"
              src={promo4}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">Product Name</h3>
              <p className="text-white text-sm">
                This is a brief description of the product.
              </p>
              <p className="text-white text-lg font-bold">$99.99</p>
            </div>
          </div>

          {/* Image with scale, shadow, and brightness effects */}
          <div className="relative md:p-2 p-1 w-1/2 group">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              src={promo4}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">Product Name</h3>
              <p className="text-white text-sm">
                This is a brief description of the product.
              </p>
              <p className="text-white text-lg font-bold">$99.99</p>
            </div>
          </div>

          {/* Image with scale, shadow, and brightness effects */}
          <div className="relative md:p-2 p-1 w-1/2 group">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              src={promo6}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-white text-lg font-semibold">Product Name</h3>
              <p className="text-white text-sm">
                This is a brief description of the product.
              </p>
              <p className="text-white text-lg font-bold">$99.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
