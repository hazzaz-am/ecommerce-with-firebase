import type { ProductType } from "../../../types/types";

type ProductCardProps = {
	product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__content">
				<p className="price">
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button className="btn-white">ADD TO CART</button>
			</div>
		</div>
	);
}
