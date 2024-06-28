export interface ProductItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	discount?: {
		type: "fix" | "percent";
		value: number;
	};
	rating:number;
	isFavorite:bool;
}