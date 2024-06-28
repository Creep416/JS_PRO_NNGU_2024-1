import { Product } from "../Product/Product.tsx"
import { ProductItem } from "../../types/product.ts";
import { Row } from "../Row/Row.tsx"

const ProductList = () => {
	const products: ProductItem[] = [
			{
				id: 1,
			    name: "Наручные часы мужские SKMEI 1251",
			    imageUrl:
			      "https:main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
			    price: 8165,
			    discount: {type: "percent", value: 90},
			    rating: 4.7,
			    isFavorite: false,
			},
			{
				id: 2,
			    name: "Научные часы мужские SKMEI 1252",
			    imageUrl:
			      "https://cdn.forbes.ru/forbes-static/c/375x211/new/2023/05/1-A-Patek-Philippe-Ref-96-Quantieme-Lune-and-Confucius-Analects-formerly-from-the-collection-of-Puyi-64708410ab7d1.jpg",
			    price: 10000,
			    rating: 5,
			    isFavorite: false,
			},
			{
				id: 3,
			    name: "Наручные весы мужские SKMEI 1253",
			    imageUrl:
			      "https://avatars.mds.yandex.net/get-marketpic/364498/pice8920d5210af59cba943b0bd6e581bb7/orig",
			    price: 5001,
			    discount: {type: "fix", value: 300},
			    rating: 4.5,
			    isFavorite: true,
			},
		];
	const list = products.map((product) => {
		return <Product key={product.id} product={product} />
	});

	return <Row>{list}</Row>;
};

export { ProductList };