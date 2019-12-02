import React from 'react';
import './index.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer mt-auto py-3 bg-light">
				<div className="container d-flex align-items-center justify-content-between">
					<div className="footer-icons">
						<span className="mx-2">
							<a herf="#" className="fab fa-telegram-plane" />
						</span>
						<span className="mx-2">
							<a href="#" className="fab fa-instagram" />
						</span>
						<span className="mx-2">
							<a href="#" className="fab fa-vk" />
						</span>
					</div>
					<span className="text-muted">2019© ООО “YoungView”. Все права защищены.</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
