import image3 from "../assets/image3.png"
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.jpeg";

const products = [
  {
    id: 1,
    name: "Product Name",
    color: "Description of the product",
    price: "$99",
    imageSrc: image8,
    imageAlt: "Loading",
  },
  {
    id: 2,
    name: "Product Name",
    color: "Description of the product",
    price: "$99",
    imageSrc: image9,
    imageAlt: "Loading",
  },
  {
    id: 3,
    name: "Product Name",
    color: "Description of the product",
    price: "$99",
    imageSrc: image10,
    imageAlt: "Loading",
  },
  {
    id: 4,
    name: "Product Name",
    color: "Description of the product",
    price: "$99",
    imageSrc: image3,
    imageAlt: "Loading",
  },
];

const ProductCard = ({ product }) => (
  <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  </div>
);

const ProductList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
