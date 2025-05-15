import CartItem from "./components/CartItem";

export default function CartPage() {
	const cart = [
		{
			id: 1,
			title: "Essence Mascara Lash Princess",
			description:
				"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
			price: 9.99,
			image:
				"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        quantity: 2
		},
		{
			id: 2,
			title: "Eyeshadow Palette with Mirror",
			description:
				"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
			price: 19.99,
			image:
				"https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
        quantity: 5
		},
		{
			id: 3,
			title: "Powder Canister",
			description:
				"translucent formula, it provides a smooth and matte finish.",
			price: 14.99,
			image:
				"https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
        quantity: 1
		},
	];
	return (
		<>
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product list in your cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Product Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
								<CartItem item={item} key={item.id} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					You Total Price Will be $ 100
					{/* {totalPrice} */}
				</h2>
				<div className="mt-50 text-center text-white mb-10">
					<button
						// onClick={() => dispatch({ type: "CLEAR_CART" })}
						type="button"
						className="bg-red-500 text-center text-white py-2 px-4 rounded-2xl"
					>
						Clear Cart
					</button>
				</div>
			</div>
		</>
	);
}
