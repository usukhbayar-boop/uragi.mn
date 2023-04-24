import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';
import * as Icon from 'react-feather';

const LeafletMap = dynamic(() => import('@/components/elements/LeafletMap'), {
    ssr: false,
})

export default function Contact2() {
    return (
        <>
            <Layout>
                <div>

                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <img className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Холбоо барих</h1>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">Хамтран ажиллах ба сайтын үйл ажиллагаатай холбоотой асуулт, санал сэтгэгдэл байвал бидэнтэй холбогдоно уу.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>зурвас</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Зурвас илгээх</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center pt-60 sm:pt-40">
                                <div className="col-lg-10">
                                    <form action="post" className="contact-form row y-gap-40">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Таны нэр" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Мейл хаяг" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Гарчиг" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Утасны дугаар" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" rows={4} placeholder="Зурвас" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="form-checkbox">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <Icon.Check className="checkbox__icon" />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">
                                                        Зөвшөөрч байна.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <button className="button -md -accent -uppercase text-white">Илгээх</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-lg relative">
                        <div id="map" className="map absolute-full-center z-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10276.193942568781!2d106.88774113929868!3d47.913879386624785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692f8d5aef349%3A0x719fcb0e2931a298!2sGrand%20Plaza!5e0!3m2!1smn!2smn!4v1682046376972!5m2!1smn!2smn" width="1200" height="700" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="relative z-5">
                            <div className="container">
                                <div className="row justify-end">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="py-60 px-60 bg-white rounded-8 shadow-card">
                                            <div className="sectionHeading ">
                                                <h2 className="sectionHeading__title">Холбогдох</h2>
                                            </div>
                                            <div className="d-flex direction-column y-gap-20 pt-16">
                                                <div className="d-flex">
                                                    <div className="mr-16">
                                                        <img src="/img/contact/2/pin.svg" alt="icon" />
                                                    </div>
                                                    <p>Монгол улс, Улаанбаатар хот</p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="mr-16">
                                                        <img src="/img/contact/2/envelope.svg" alt="icon" />
                                                    </div>
                                                    <p>+(1) 123 456 7890</p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="mr-16">
                                                        <img src="/img/contact/2/call.svg" alt="icon" />
                                                    </div>
                                                    <p>hi@gmail.com</p>
                                                </div>
                                            </div>
                                            <button className="button -md -accent -uppercase text-white mt-32">Google Maps-аас үзэх</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Let's build the next big thing together</h2>
                                    </div>
                                    <button className="button -md -accent -uppercase text-white mt-30">Start a new project</button>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>

            </Layout>

        </>
    )
}