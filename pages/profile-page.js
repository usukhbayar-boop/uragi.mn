import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from "next/link";
import { TrustProductsEvaluationsInstance } from 'twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations';

export default function ProfilePage() {

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
            <div className="url">
                <Link
              href="/"
            >
              Гарах
            </Link>
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
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <img src="/img/about-1/about/zagvar-1.jpg" alt=""  />
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <img src="/img/about-1/about/zagvar-2.jpeg" width="950px" alt=""  />
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <img src="/img/about-1/about/zagvar-3.png" alt=""  />
            </div>
        </div>

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