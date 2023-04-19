import Layout from '@/components/layout/Layout';
import Link from "next/link";
import * as Icon from 'react-feather';

export default function PortfolioSingle1() {
    return (
        <>
            <Layout footerLayout={11}>
                <div>
                    <section className="page-header -text -">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-xl-6 col-lg-9 col-md-10">
                                        <div>
                                            <h1 className="page-header__title lh-14">Ургийн бичгийн загварууд</h1>
                                        </div>
                                    </div>
                                    <div className="w-1/1" />
                                    <div className="col-xl-5 col-lg-9 col-md-10">
                                        {/* <div className="px-20">
                                            <p className="page-header__text">Dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia. Dicta sunt explicabo. Nemo enim ipsam voluptas aspernatur aut odit.</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row justify-center">
                                <div className="col-xl-10 col-lg-11 px-0 md:px-16">
                                    <div className="row x-gap-80 y-gap-48 justify-between">
                                        <div className="col-lg-auto col-sm-6">
                                            <h5 className="text-xl fw-600">Client</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>Creative Layers</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-auto col-sm-6">
                                            <h5 className="text-xl fw-600">Year</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>2023</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-auto col-sm-6">
                                            <h5 className="text-xl fw-600">Sevices</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>Content Strategy</p>
                                                <p>Design</p>
                                                <p>Development</p>
                                                <p>Video Production</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-auto col-sm-6">
                                            <h5 className="text-xl fw-600">Awards</h5>
                                            <div className="y-gap-4 mt-12">
                                                <p>Site of the Day</p>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button className="button -md -accent -uppercase text-white">View Demo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section>
                        <div className="bg-image js-lazy pt-100 pb-100 mh-700 bg-fixed" style={{ backgroundImage: 'url("/img/about-1/about/gene.jpg")' }} />
                    </section>
                    {/* <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row justify-center">
                                <div className="col-xl-9 col-lg-11">
                                    <div className="row y-gap-60 justify-between">
                                        <div className="col-xl-5 col-md-6">
                                            <div className="pr-48">
                                                <h4 className="text-xl fw-600">01. Digital Design</h4>
                                                <p className="mt-12">At vero eos et accusam et justo duo dolores et rebum. Stet clita bergren, no sea takimata sanctus.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-md-6">
                                            <div className="pr-48">
                                                <h4 className="text-xl fw-600">02. Development</h4>
                                                <p className="mt-12">At vero eos et accusam et justo duo dolores et rebum. Stet clita bergren, no sea takimata sanctus.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-md-6">
                                            <div className="pr-48">
                                                <h4 className="text-xl fw-600">03. Copywriting</h4>
                                                <p className="mt-12">At vero eos et accusam et justo duo dolores et rebum. Stet clita bergren, no sea takimata sanctus.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-md-6">
                                            <div className="pr-48">
                                                <h4 className="text-xl fw-600">04. JQuery Power</h4>
                                                <p className="mt-12">At vero eos et accusam et justo duo dolores et rebum. Stet clita bergren, no sea takimata sanctus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-32">
                                <div className="col-md-6">
                                    {/* <img className="initial-img" src="/img/portfolio/single/3/1.jpg" alt="image"  /> */}
                                    <Link href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-1.jpg" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </Link>
                                </div>
                                <div className="col-md-6">
                                <Link href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-2.jpg" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </Link>
                                </div>
                                {/* <div className="col-12">
                                <a href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-3.webp" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </a>
                                </div> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="ratio ratio-37:40">
                                    <Link href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-4.jpg" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="ratio ratio-37:40">
                                    <Link href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-3.webp" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="ratio ratio-37:40">
                                    <Link href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-5.jpg" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="layout-pb-lg">
                        <section>
                            <div className="container">
                                <div className="related-nav py-30">
                                    <div className="row justify-between items-center">
                                        <div className="col-md-auto col-6">
                                            <Link href="/portfolio/portfolio-single-3" className="related-nav__item -prev decoration-none">
                                                <div className="related-nav__arrow">
                                                    <Icon.ArrowLeft className="icon size-20 pt-4" />
                                                </div>
                                                <div className="related-nav__content">
                                                    <div className="text-xl fw-600">Prev</div>
                                                    <p className="text-dark mt-8">Avg Event Cart</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto md:d-none">
                                            <div className="related-nav__icon row y-gap-4 x-gap-4">
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-6 d-flex justify-end">
                                            <Link href="/portfolio/portfolio-single-4" className="related-nav__item -prev text-right decoration-none">
                                                <div className="related-nav__content">
                                                    <div className="text-xl fw-600">Next</div>
                                                    <p className="text-dark mt-8">Realy Art</p>
                                                </div>
                                                <div className="related-nav__arrow">
                                                    <Icon.ArrowRight className="icon size-20 pt-4" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="svg-shape">
                        <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                        </svg>
                    </div>
                </div>

            </Layout>

        </>
    )
}