import classes from "./Product.module.scss";
import { ProductItem } from "../../types/product.ts";

interface ProductProps {
  product: ProductItem;
}



const Product = (props: ProductProps) => {

  const { product } = props;

  return (
    <>
      <div className = {classes.frame +" "+ (product.isFavorite ? (classes.favorite) : (""))} title = {"артикул: " + product.id}>
        <img className={classes.pic} src={product.imageUrl} alt="Изображение продукта" />
        <div className={classes.name}>
          {product.name}
        </div>
        <div className={classes.price}>
          {product.discount ? (
            <>
            <div className={classes.old}>
              {product.price}
            </div>
            <div className={classes.new}>
              {product.discount.type == "percent" ? (product.price*(100-product.discount.value)/100) : (product.price-product.discount.value)}
            </div>
            </>
            ):(
            <div className={classes.new}>
              {product.price}
            </div>
            )}
        </div>
        
      </div>
    </>
    );
};

export { Product };