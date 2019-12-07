import React from 'react';
import './index.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer mt-auto py-3 bg-light">
				<div className="container d-flex align-items-center justify-content-between">
					<div className="footer-icons">
						<span className="fab fa-telegram-plane mx-2" />
						<span className="fab fa-instagram mx-2" />
						<span className="fab fa-vk mx-2" />
					</div>
					<span className="text-muted">2019© ООО “YoungView”. Все права защищены.</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
