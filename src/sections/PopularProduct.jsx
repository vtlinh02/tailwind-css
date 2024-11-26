import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section className="max-container pt-[5rem]">
      <div className="w-2/5 flex-col gap-8 justify-center">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="pt-8 text-xl font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <ul className="flex justify-around pt-16">
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.imgURL} alt={product.label} />
            <div className="pt-4 text-2xl font-palanquin font-bold">
              {product.name}
            </div>
            <div className="pt-2 text-2xl font-montserrat text-coral-red font-bold">
              {product.price}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularProduct;
