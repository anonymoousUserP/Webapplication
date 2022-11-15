import React, { Component } from 'react';
import icon from '../Assets/abc.svg';
import img1 from "../Assets/01.jpg";
import img2 from "../Assets/02.jpg";
import img3 from "../Assets/03.jpg";

class Section5 extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
					<div className="row align-items-center pt-md-4 mt-2 mt-sm-3">
						<div className="col-md-6 position-relative pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
							<div className="d-none d-xxl-block position-absolute aos-init" style={{ width: '861px', height: '719px', top: '50px', left: '-260px', dataAos: 'zoom-in', dataAosDuration: "700", dataAosOffset: "400" }}>
								<img src={icon} width="861" height="719" alt='..' />
							</div>
							<div className="binded-content zindex-2">
								<div className="binded-item" id="image1"><img className="d-block rounded-5" src={img1} alt="Image" /></div>
								<div className="binded-item" id="image2"><img className="d-block rounded-5" src={img2} alt="Image" /></div>
								<div className="binded-item active" id="image3"><img className="d-block rounded-5" src={img3} alt="Image" /></div>
							</div>
						</div>
						<div className="col-md-6 col-xl-5 offset-xl-1">
							<div className="ps-md-4 ps-xl-0">
								<div className="d-flex align-items-center ms-n3 pb-3 mb-sm-2 mb-xl-4">
									<button className="btn btn-icon btn-link" type="button" id="prev-case-study" tabIndex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-463dc7f573d1b4c10" aria-disabled="false"><i className="bi bi-arrow-left" style={{ color: '#448c74' }}></i></button>
									<div className="text-center text-nowrap mx-3 swiper-pagination-fraction swiper-pagination-horizontal" id="slides-count" style={{ width: "33px" }}><span className="swiper-pagination-current">3</span> / <span className="swiper-pagination-total">3</span></div>
									<button className="btn btn-icon btn-link swiper-button-disabled" type="button" id="next-case-study" tabIndex="-1" aria-label="Next slide" aria-controls="swiper-wrapper-463dc7f573d1b4c10" aria-disabled="true" disabled=""><i className="bi bi-arrow-right" style={{ color: '#448c74' }}></i></button>
								</div>
								<div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-backface-hidden" dataswiperoptions="{
                                    &quot;spaceBetween&quot;: 40,
                                    &quot;autoHeight&quot;: true,
                                    &quot;bindedContent&quot;: true,
                                    &quot;pagination&quot;: {
                                        &quot;el&quot;: &quot;#slides-count&quot;,
                                        &quot;type&quot;: &quot;fraction&quot;
                                    },
                                    &quot;navigation&quot;: {
                                        &quot;prevEl&quot;: &quot;#prev-case-study&quot;,
                                        &quot;nextEl&quot;: &quot;#next-case-study&quot;
                                    }
                                    }">
									<div className="swiper-wrapper" id="swiper-wrapper-463dc7f573d1b4c10" aria-live="polite" style={{ height: '370px', transitionDuration: '0ms', transform: 'translate3d(-1132px, 0px, 0px)' }}>

										<div className="swiper-slide pb-1" dataswiperbinded="#image1" role="group" aria-label="1 / 3" style={{ width: '526px', marginRight: '40px' }}>
											<h3 className="h4">Growth of subscribers and sales on social networks for the eco shoe brand</h3>
											<p className="pb-3 mb-3 mb-xl-4">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.</p>
											<div className="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2" style={{ maxWidth: '440px' }}>
												<div className="pe-4">
													<div className="h2 mb-1">1000+</div>
													<div className="fs-sm">leads for $ 2.1</div>
												</div>
												<div className="pe-4">
													<div className="h2 mb-1">160%</div>
													<div className="fs-sm">revenue increase</div>
												</div>
												<div>
													<div className="h2 mb-1">12+</div>
													<div className="fs-sm">sales channels</div>
												</div>
											</div>
											<div className="d-sm-flex"><a className="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#" style={{ backgroundColor: 'rgb(68, 140, 116)', border: 'none', height: '40px' }}>Read a full story</a><a className="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href="#" style={{ color: '#448c74', borderColor: '#448c74' }}>All case studies</a></div>
										</div>

										<div className="swiper-slide pb-1 swiper-slide-prev" dataswiperbinded="#image2" role="group" aria-label="2 / 3" style={{ width: '526px', marginRight: '40px' }}>
											<h3 className="h4">Business strategy for a brand of vintage bags and accessories</h3>
											<p className="pb-3 mb-3 mb-xl-4">Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate scelerisque.</p>
											<div className="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2" style={{ maxWidth: '440px' }}>
												<div className="pe-4">
													<div className="h2 mb-1">1200+</div>
													<div className="fs-sm">leads for $ 2.1</div>
												</div>
												<div className="pe-4">
													<div className="h2 mb-1">130%</div>
													<div className="fs-sm">revenue increase</div>
												</div>
												<div>
													<div className="h2 mb-1">14+</div>
													<div className="fs-sm">sales channels</div>
												</div>
											</div>
											<div className="d-sm-flex"><a className="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#" style={{ backgroundColor: 'rgb(68, 140, 116)', border: 'none', height: '40px' }}>Read a full story</a><a className="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href="#" style={{ color: '#448c74', borderColor: '#448c74' }}>All case studies</a></div>
										</div>

										<div className="swiper-slide pb-1 swiper-slide-active" dataswiperbinded="#image3" role="group" aria-label="3 / 3" style={{ width: '526px', marginRight: '40px' }}>
											<h3 className="h4">Growth of subscribers and sales on social networks for the eco cosmetics</h3>
											<p className="pb-3 mb-3 mb-xl-4">Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames pulvinar elit.</p>
											<div className="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2" style={{ maxWidth: '440px' }}>
												<div className="pe-4">
													<div className="h2 mb-1">900+</div>
													<div className="fs-sm">leads for $ 2.1</div>
												</div>
												<div className="pe-4">
													<div className="h2 mb-1">150%</div>
													<div className="fs-sm">revenue increase</div>
												</div>
												<div>
													<div className="h2 mb-1">10+</div>
													<div className="fs-sm">sales channels</div>
												</div>
											</div>
											<div className="d-sm-flex"><a className="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#" style={{ backgroundColor: 'rgb(68, 140, 116)', border: 'none', height: '40px' }}>Read a full story</a><a className="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href="#" style={{ color: '#448c74', borderColor: '#448c74' }}>All case studies</a></div>
										</div>
									</div>
									<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Section5;