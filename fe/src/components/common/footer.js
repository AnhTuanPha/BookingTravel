/* eslint-disable no-unused-vars */

import React from "react";

import { EnvelopeAt, Map, MapFill, TelephoneFill } from 'react-bootstrap-icons';

export const Footer = () =>

{
	return (
		
		<React.Fragment>
			<footer className="ftco-footer ftco-bg-dark ftco-section pb-0 pt-4">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Deluxe Hotel</h2>
								<p>Xa xa, đằng sau những ngọn núi chữ, xa những đất nước Vokalia và Consonantia, có những văn bản mù quáng.</p>

							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4 ml-md-5">
								<h2 className="ftco-heading-2">Liên kết hữu ích</h2>
								<ul className="list-unstyled">
									<li><a href="/menu" className="py-2 d-block">Tin tức</a></li>
									<li><a href="/room" className="py-2 d-block">Phòng</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Bảo mật</h2>
								<ul className="list-unstyled">
									<li><a href="/contact" className="py-2 d-block">Liên hệ với chúng tôi</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Thông tin liên lạc</h2>
								<div className="block-23 mb-3">
									<ul>
										<li>
											<MapFill className="mr-2" />
											<span className="text">Hà Nội - Việt Nam</span>
										</li>
										<li>
											<TelephoneFill className="mr-2" />
											<span className="text">0987654321</span>
										</li>
										<li>
											<EnvelopeAt className="mr-2" />
											<span className="text">info@yourdomain.com</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<p>
								Copyright &copy;{ new Date().getFullYear() } </p>
						</div>
					</div>
					
				</div>
				
			</footer>
			
		</React.Fragment>
	);
};
