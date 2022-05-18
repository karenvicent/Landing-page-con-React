import React from "react";

//include images into your bundle
import Card from "./card";
import Jumbo from "./jumbo";
import Navbar from "./navbar";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<br></br>
			<Jumbo />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
