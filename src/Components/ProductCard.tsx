import ExpandibleText from "./ExpandibleText";
import { Product } from "./ProductsGrid";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-center">
        <img src={product.image} className="w-[250px] object-contain" />
      </div>
      <div className="p-2">
        <ExpandibleText text={product.title} maxLength={55} font="bold" />
        <ExpandibleText text={product.description} maxLength={100} />
        <p className="mt-2">Price: $ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
