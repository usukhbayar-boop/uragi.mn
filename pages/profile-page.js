import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useRouter} from "next/router";
import Link from 'next/link';
import * as Icon from 'react-feather';

export default function ProfilePage() {

    const router = useRouter();
    const [isActiveFirst, setIsActiveFirst] = useState(true);
    const [isActiveSecond, setIsActiveSecond] = useState(false);
    const [isActiveThird, setIsActiveThird] = useState(false);
    const [showMyResults, setShowMyResults] = useState(true);

    const onClickMain = () => {
        setShowMyResults(true)
        setShowResults(false)
        setIsActiveSecond(false)
        setIsActiveFirst(current => !current);
    }

    const [showResults, setShowResults] = useState(false)
    const onClick = () => {
        setShowMyResults(false)
        setShowResults(true)
        setIsActiveFirst(false)
        setIsActiveSecond(current => !current);
    }

    const signOut = () => {
        sessionStorage.removeItem("UragiToken");
        router.push('/login');
    }
    return (
        <>
        <Layout
                headerLayout={3}
                logo="logo-flat"
            >
               <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
    <div className="sidenav">
                <br/>
                <br/>
                <br/>
        <div className="profile">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" width="100" height="100"/>

            <div className="name">
                Тавтай морилно уу
            </div>
            <div className="job">
                
            </div>
        </div>

        <div className="sidenav-url">
            <div className="url">
                <a href="#profile" onClick={onClickMain}  className={isActiveFirst ? 'active' : ''}>Миний угийн бичиг</a>
                <hr align="center"/>
            </div>
            <div className="url" onClick={onClick}>
                <a className={isActiveSecond ? 'active' : ''}>Угийн бичгийн загварууд</a>
                <hr align="center"/>
            </div>
            <div className="url">
                <a href="">Тохиргоо</a>
                <hr align="center"/>
            </div>
            <div className="url" onClick={signOut}>
              Гарах
                <hr align="center"/>
            </div>
        </div>

        
    </div>
    { showMyResults ? <MyResult /> : null }
    { showResults ? <Results /> : null }
    </section>
    </Layout>
    </>            
    )
}

const MyResult = () => (
    <div className='main'>
        <div className="card">
        Танд одоогоор сонгосон ургийн бичиг алга байна
        </div>
    </div>
)



const Results = () => (
    <div className="main">
        <h2>Загварууд</h2>
        <section className="layout-pt-sm layout-pb-lg scroll">
                        <div className="container">
                            <div className="row y-gap-32">
                                <div className="col-md-6">
                                    {/* <img className="initial-img" src="/img/portfolio/single/3/1.jpg" alt="image"  /> */}
                                    <Link href="/services/services-2" className="gallery__item js-gallery" data-gallery="gallery1">
                                    <div className="ratio ratio-57:60">
                                                    <img className="absolute-full-center object-fit-cover" src="/img/about-1/about/tree-1.jpg" alt="image"  />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                                </Link>
                                </div>
                                <div className="col-md-6">
                                <Link href="/services/services-2" className="gallery__item js-gallery" data-gallery="gallery1">
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

        {/* <h2>SOCIAL MEDIA</h2>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <div className="social-media">
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-invision fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-sm">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-snapchat fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
            </div>
        </div> */}
    </div>  
  )