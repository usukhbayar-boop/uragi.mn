import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import * as Icon from 'react-feather';

export default function Login() {
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
                                <form className="contact-form row y-gap-32 pt-48" action="#">
                                    <div className="col-12">
                                        <input type="text" name="name" placeholder="Утасны дугаар" />
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