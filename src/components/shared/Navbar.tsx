import { Link } from "react-router";

export default function Navbar() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/men">Men</Link>
						</li>
						<li>
							<Link to="/kids">Kids</Link>
						</li>
						<li>
							<Link to="/shop">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
