import Link from 'next/link';
import * as Icon from 'react-feather';

export default function Footer6() {
    return (
        <>
            <footer className="footer -type-3">
                <div className="footer__top">
                    <div className="container">
                        <div className="row y-gap-48 justify-content-between">
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer__item">
                                    <div className="footer__logo ">
                                        <img src="/img/general/logo-dark.png" alt="logo" width="50" height="60" />
                                    </div>
                                    <div className="y-gap-32 pt-30">
                                        <div>
                                            <div className="text-lg opac-50">Холбоо барих</div>
                                            <div className="text-xl fw-600">+(1) 123 456 7890</div>
                                        </div>
                                        <div>
                                            <div className="text-lg opac-50">Санал хүсэлтээ илгээх</div>
                                            <div className="text-xl fw-600">hi@sassio.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer__item">
                                    <h3 className="text-xl lh-1 fw-600">Цэс</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/">Нүүр хуудас</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/about/about-1">Ургийн бичиг</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="faq">Ургийн бичгийн загвар</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/contact/contact-1">Холбоо барих</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Terms of use</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Terms &amp;
                                                conditions</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Privacy
                                                policy</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Coolie
                                                policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-3 col-sm-6">
                                <div className="y-gap-48">
                                    <div className="footer__socials">
                                        <h3 className="text-xl lh-1 fw-600">Social хаягууд</h3>
                                        <div className="socials mt-40">
                                            <div>
                                                <a href="#">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="footer__title text-xl lh-1 fw-600">И мейл</h3>
                                        <div className="footer__content mt-24">
                                            <div className="footer__newsletter form-newsletter -simple">
                                                <form action="POST">
                                                    <div className="form-group">
                                                        <input className="rounded-200 bg-light-4" placeholder="Your Email" type="email" />
                                                        <button className="button -red-2 text-white ml-10" type="submit">
                                                            <Icon.ArrowRight className="icon size-20" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center py-30 mt-40">
                            <div className="col-auto">
                                <div className="footer__bottom_text">© Copyright 2023. Ургийн бичиг - онлайн хувилбар</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
