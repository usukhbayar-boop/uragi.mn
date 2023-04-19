import Link from 'next/link';

export default function Menu({ navColor }) {
    return (
        <>
            <div className="menu js-menu">
                <div className="menu__container">
                    <div className="mobile__back js-nav-list-back pointer-events-none">
                        <Link href="#">Home</Link>
                    </div>

                    <ul className="nav js-navList">
                        <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/">
                                Нүүр хуудас

                            </Link>
                        </li>
                        <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/services/services-3">
                                Ургийн бичиг
                            </Link>
                        </li>
                        <li className={`${navColor} menu-item-has-children -has-mega-menu`}>
                            <Link href="/portfolio/portfolio-single-1">
                                Ургийн бичгийн төрөл
                            </Link>
                            {/* <div className="mega">
                                <div className="mega__menu">
                                    <div className="d-flex">
                                        <div className="col-6 px-0">
                                            <h4 className="text-xl fw-600 ml-20 mb-20">
                                                Portfolio List
                                            </h4>
                                            <div className="d-flex">
                                                <div className="col-6 px-0">
                                                    <div className="mega__column">
                                                        <div className="mega__item">
                                                            <ul className="mega__list">
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-1">
                                                                        List Style V1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-2">
                                                                        List Style V2
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-3">
                                                                        List Style V3
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-4">
                                                                        List Style V4
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-5">
                                                                        List Style V5
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-6">
                                                                        List Style V6
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 px-0">
                                                    <div className="mega__column">
                                                        <div className="mega__item">
                                                            <ul className="mega__list">
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-7">
                                                                        List Style V7
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-8">
                                                                        List Style V8
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/portfolio/portfolio-list-9">
                                                                        List Style V9
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-list-10"
                                                                    >
                                                                        List Style V10
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-hover-effects"
                                                                    >
                                                                        All Hover Effects
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 px-0">
                                            <h4 className="text-xl fw-600 ml-20 mb-20">
                                                Single Portfolio
                                            </h4>
                                            <div className="d-flex">
                                                <div className="col-6 px-0">
                                                    <div className="mega__column">
                                                        <div className="mega__item">
                                                            <ul className="mega__list">
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-single-1"
                                                                    >
                                                                        Single Style V1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-single-2"
                                                                    >
                                                                        Single Style V2
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-single-3"
                                                                    >
                                                                        Single Style V3
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-single-4"
                                                                    >
                                                                        Single Style V4
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-single-5"
                                                                    >
                                                                        Single Style V5
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link

                                                                        href="/portfolio/portfolio-single-6"
                                                                    >
                                                                        Single Style V6
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <ul className="nav__submenu d-none md:d-block">
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-1">
                                        List Style v1
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-2">
                                        List Style v2
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-3">
                                        List Style v3
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-4">
                                        List Style v4
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-5">
                                        List Style v5
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-6">
                                        List Style v6
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-7">
                                        List Style v7
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-8">
                                        List Style v8
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-9">
                                        List Style v9
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-list-10">
                                        List Style v10
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-hover-effects">
                                        All Hover Effects
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-single-1">
                                        Single Style v1
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-single-2">
                                        Single Style v2
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-single-3">
                                        Single Style v3
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-single-4">
                                        Single Style v4
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-single-5">
                                        Single Style v5
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/portfolio/portfolio-single-6">
                                        Single Style v6
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        {/* <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/#">
                                Shop
                            </Link>
                            <ul className="nav__submenu">
                                <li className="nav__submenu_item">
                                    <Link href="/shop/shop-list">
                                        Shop List
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/shop/shop-single">
                                        Shop Single
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/shop/shop-cart">
                                        Shop Cart
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/shop/shop-checkout">
                                        Shop Checkout
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/shop/shop-order">
                                        Shop Order
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/#">
                                Blog
                            </Link>
                            <ul className="nav__submenu">
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-1">
                                        Blog List V1
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-2">
                                        Blog List V2
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-3">
                                        Blog List V3
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-4">
                                        Blog List V4
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-5">
                                        Blog List V5
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-6">
                                        Blog List V6
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-7">
                                        Blog List V7
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-8">
                                        Blog List V8
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-9">
                                        Blog List V9
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-list-10">
                                        Blog List V10
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-single-1">
                                        Blog Single V1
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-single-2">
                                        Blog Single V2
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/blog/blog-single-3">
                                        Blog Single V3
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className={`${navColor}`}>
                            <Link href="/contact/contact-2">
                                Холбоо барих
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mobile__footer js-mobile-footer">
                    <div className="mobile__copyright">
                        <p>© Copyright 2023. MateX LLC</p>
                    </div>
                    <div className="mobile__socials">
                        <Link href="/#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                        <Link href="/#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                        <Link href="/#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </Link>
                        <Link href="/#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}