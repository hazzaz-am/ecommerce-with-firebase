import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import type { ProductType } from "../../types/types";

export default function ShopPage() {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch(`http://localhost:3000/products`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);
	return (
		<div>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<div className="grid three">
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
