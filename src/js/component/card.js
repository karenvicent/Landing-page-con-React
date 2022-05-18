import React from "react";

const Card = () => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6">
			<div
				className="card text-center m-2 d-flex"
				style={{ height: 400 }}>
				<div
					style={{
						width: "100%",
						height: 150,
						backgroundColor: "gray",
					}}></div>
				<div className="card-body ">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente ese necessitatibus neque.
					</p>
					<a href="#" className="btn btn-primary mt-5">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
