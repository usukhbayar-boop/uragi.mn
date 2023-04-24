import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useRouter} from "next/router";
import Link from 'next/link';
import * as Icon from 'react-feather';
import {signOut} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import dynamic from 'next/dynamic';

const PortfolioFilterSpecial = dynamic(() => import('@/components/portfolio/PortfoliaFilterSpecial'), {
    ssr: false,
})

export default function ProfilePage() {

    // const auth = getAuth();
    // const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const [isActiveFirst, setIsActiveFirst] = useState(true);
    const [isActiveSecond, setIsActiveSecond] = useState(false);
    const [showMyResults, setShowMyResults] = useState(true);

    const onClickMain = () => {
        setShowMyResults(true)
        setShowResults(false)
        setIsActiveSecond(false)
        setIsActiveFirst(current => !current);
    }

    const [showResults, setShowResults] = useState(false)
    const onClick = () => {
        router.push("/portfolio/portfolio-list-1");
    }

    // const signOut = () => {
    //     sessionStorage.removeItem("UragiToken");
    //     router.push('/login');
    // }
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
            {/* <div className="url" onClick={() => signOut(auth)}>
              Гарах
                <hr align="center"/>
            </div> */}
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
    <>
     
    </>
  )