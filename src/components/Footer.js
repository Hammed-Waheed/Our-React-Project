export default function Footer() {
	return (
		<div className="footer container">
			<div className="footer-section foot">
				{/* <p className="title">FoodiesExpress</p>
				<p>
					FoodiesExpress is a place where you can please your soul and tummy
					with delicious food recepies of all cuisine. And our service is
					absolutely free.
				</p> */}
			</div>

			<div className="footer-section">
				<p className="title">Contact Us</p>
				<p>FoodiesExpress@gmail.com</p>
				<p>
					<a
						href="https://github.com/Hammed-Waheed/Our-React-Project"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>
				<p>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Linkedin
					</a>
				</p>
			</div>
		</div>
	);
}
