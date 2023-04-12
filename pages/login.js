import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import * as Icon from 'react-feather'; 
import {app, database} from "../firebaseConfig";
import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore";

export default function Login() {

    const [error, setError] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);

    const errorScript = "Шаардлагатай талбаруудыг бөглөнө үү!!!";
    const errorScript1 = "Бүртгэлгүй хэрэглэгч байна!!!";
    const errorScript2 = "Нууц үг буруу байна!";

    const collectionRef = collection(database, "users")

    const getData = (event) => {
        event.preventDefault();

        setError(false);
        setError1(false);
        setError2(false);

        const data = {
            number: event.target.phone.value,
            password: event.target.password.value
        }

        if(data.number == "" || data.password == "") {
            setError(true);
        } else {
            getDocs(collectionRef).then((res) => {
                let isHavePhone = true;
                let isPasswordTrue = true;
                let arr = res.docs.map((item) => {
                    // return {...item.data(), id: item.id};
                    if(data.number.toString() === item.data().phone) {
                        isHavePhone = false;
                        if(data.password.toString() === item.data().password) {
                            isPasswordTrue = false;
                            window.location.href = "/profile-page";
                        }
                    }
                });
                if(isHavePhone) {
                    setError1(true);
                }
                if(isPasswordTrue) {
                    setError2(true);
                }
                
            })
        }

        
    }

    const updateData = (event) => {
        event.preventDefault()
        const docToUpdate = doc(database, "users", "x9LxokdgrsG3ldJOfXAt");
        updateDoc(docToUpdate, {
            phone: "99125262",
            password: "94948106"
        })
        .then(() => {
            alert("Data Updated")
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    // const handleSubmit = async (event) => {
    //     // Stop the form from submitting and refreshing the page.
    //     event.preventDefault()
    
    //     // Get data from the form.
    //     const data = {
    //       number: event.target.phone.value,
    //       first: event.target.password.value,
    //     }

    //     if(data.number === "" || data.first === "") {
    //         setError1(true);
    //     } else {
    //         window.location.href = "/profile-page";
    //     }
    
    
    //     // // Send the data to the server in JSON format.
    //     // const JSONdata = JSON.stringify(data)
    
    //     // // API endpoint where we send form data.
    //     // const endpoint = '/api/form'
    
    //     // // Form the request for sending data to the server.
    //     // const options = {
    //     //   // The method is POST because we are sending data.
    //     //   method: 'POST',
    //     //   // Tell the server we're sending JSON.
    //     //   headers: {
    //     //     'Content-Type': 'application/json',
    //     //   },
    //     //   // Body of the request is the JSON data we created above.
    //     //   body: JSONdata,
    //     // }
    
    //     // // Send the form data to our forms API on Vercel and get a response.
    //     // const response = await fetch(endpoint, options)
    
    //     // // Get the response data from server as JSON.
    //     // // If server returns the name submitted, that means the form works.
    //     // const result = await response.json()
        
    //   }
    return (
        <>
            <Layout
                headerLayout={11}
                logo="logo-flat"
            >
                <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                    <div className="row x-gap-120 h-1/1 items-center">
                        <div className="col-lg-6 h-1/1 relative md:h-300">
                            <div className="bg-image absolute-full-center md:bg-pos-top js-lazy" style={{ backgroundImage: 'url("/img/forms/bg.png")' }} />
                            <div className="pl-10 md:pl-0 absolute-full-center z-2">
                                <div className="pl-120 lg:pl-48 md:pl-0 pt-130 md:pt-100">
                                    <div className="pt-120 md:pt-0">
                                        <div className="md:container sm:w-screen">
                                            <h1 className="text-4xl md:text-3xl text-white">Uragi.mn-д<br /> тавтай морил</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="md:container py-48">
                                <h1 className="text-4xl md:text-3xl">Нэвтрэх</h1>
                                <p className="mt-16">Бүртгүүлж амжаагүй бол энд дарна уу? <Link className="decoration-none text-accent fw-600" href="register">Бүргүүлэх</Link></p>
                                <form className="contact-form row y-gap-32 pt-48" onSubmit={getData}>
                                {/* action="#" */}
                                    <div className="col-12">
                                        <input type="text" name="phone" placeholder="Утасны дугаар" />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="password" placeholder="Нууц үг" />
                                    </div>
                                    <div className="col-12">
                                        <div className="row justify-between">
                                            <div className="col-auto">
                                                <div className="form-checkbox">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <Icon.Check className="checkbox__icon" />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">
                                                        Сануулах
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <a className="decoration-none text-accent" href="#">Нууц үгээ мартсан уу?</a>
                                            </div>
                                        </div>
                                    </div>
                                    {error && <div style={{color: "red"}}>{errorScript}</div>}
                                    {error1 && <div style={{color: "red"}}>{errorScript1}</div>}
                                    {error2 && <div style={{color: "red"}}>{errorScript2}</div>}
                                    <div className="col-12">
                                        <button type="submit" name="submit" id="submit" className="button -md -accent -uppercase text-white">
                                            Нэвтрэх
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}