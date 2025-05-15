import { createBrowserRouter } from "react-router";
import App from "../App";
import ShopPage from "../pages/shop/Shop";
import CartPage from "../pages/cart/Cart";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/shop",
				element: <ShopPage />,
			},
			{
				path: "/cart",
				element: <CartPage />,
			},
		],
	},
]);
