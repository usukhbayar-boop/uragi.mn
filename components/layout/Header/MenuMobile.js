import { useState } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';


export default function MenuMobile({navToggled }) {
    const [navToggledMobileSubmenu, setnavToggledMobileSubmenu] = useState({
            status: false,
            key: "",
        }
    );
    const navHandleMobile = (key) => {
        if (navToggledMobileSubmenu.key === key) {
            setnavToggledMobileSubmenu({
                status: false,
            });
        } else {
            setnavToggledMobileSubmenu({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className={`menu d-none js-menu ${navToggled ? "is-active mobile-menu-open" : ""}`}>
                <div className="menu__container">
                    <div className="mobile__back js-nav-list-back pointer-events-none" style={navToggled ? { opacity: 0, transform: 'translate(0px, -16px)' } : null}>
                        <Link href="#">Нүүр хуудас</Link>
                    </div>

                    <ul className={`nav js-navList ${navToggled ? "is-active is-list-displayed" : ""}`}>
                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key==1 ? 'submenu-open' : ''}`}>
                            <Link href="#">
                            Нүүр хуудас
                                <div className="submenu-expand" onClick={() => navHandleMobile(1)}>
                                    <Icon.Plus className="icon ml-12" />
                                </div>
                            </Link>
                            {/* <ul className={`nav__submenu submenu-two-column ${navToggledMobileSubmenu.key==1 ? 'is-list-displayed' : ''}`}>
                                <li className="nav__submenu_item">
                                    <Link href="/">
                                        Home 1
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-2">
                                        Home 2
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-3">
                                        Home 3
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-4">
                                        Home 4
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-5">
                                        Home 5
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-6">
                                        Home 6
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-7">
                                        Home 7
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-8">
                                        Home 8
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-9">
                                        Home 9
                                    </Link>
                                </li>
                                <li className="nav__submenu_item">
                                    <Link href="/home/home-10">
                                        Home 10
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key==2 ? 'submenu-open' : ''}`}>
                            <Link href="/#">
                                Ургийн бичиг
                                <div className="submenu-expand" onClick={() => navHandleMobile(2)}>
                                    <Icon.Plus className="icon ml-12" />
                                </div>
                            </Link>
                        </li>

                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key==3 ? 'submenu-open' : ''}`}>
                            <Link href="/#">
                                Ургийн бичгийн төрөл
                                <div className="submenu-expand"  onClick={() => navHandleMobile(3)}>
                                    <Icon.Plus className="icon ml-12" />
                                </div>
                            </Link>
                            {/* <ul className={`nav__submenu submenu-two-column ${navToggledMobileSubmenu.key==3 ? 'is-list-displayed' : ''}`}>
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
                                    <Link href="/portfolio/portfolio-list-10">
                                        List Style V10
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-hover-effects">
                                        All Effects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-single-1">
                                        Single Style V1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-single-2">
                                        Single Style V2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-single-3">
                                        Single Style V3
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-single-4">
                                        Single Style V4
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-single-5">
                                        Single Style V5
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/portfolio-single-6">
                                        Single Style V6
                                    </Link>
                                </li>
                            </ul> */}

                        </li>
                        {/* <li className={`menu-item-has-children ${navToggledMobileSubmenu.key==4 ? 'submenu-open' : ''}`}>
                            <Link href="/#">
                                Shop
                                <div className="submenu-expand" onClick={() => navHandleMobile(4)}>
                                    <Icon.Plus className="icon ml-12" />
                                </div>
                            </Link>
                            <ul className={`nav__submenu submenu-two-column ${navToggledMobileSubmenu.key==4 ? 'is-list-displayed' : ''}`}>
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
                        {/* <li className={`menu-item-has-children ${navToggledMobileSubmenu.key==5 ? 'submenu-open' : ''}`}>
                            <Link href="/#">
                                Blog
                                <div className="submenu-expand" onClick={() => navHandleMobile(5)}>
                                    <Icon.Plus className="icon ml-12" />
                                </div>
                            </Link>
                            <ul className={`nav__submenu submenu-two-column ${navToggledMobileSubmenu.key==5 ? 'is-list-displayed' : ''}`}>
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
                        <li className="mt-10">
                            <Link href="/contact/contact-1">
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