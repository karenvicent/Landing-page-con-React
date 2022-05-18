import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Boostrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link " href="#">
							About
						</a>
						<a className="nav-item nav-link disable" href="#">
							Services
						</a>
						<a className="nav-item nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
