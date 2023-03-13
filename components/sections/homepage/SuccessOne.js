import Atropos from 'atropos/react';

export default function SuccessOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-48 justify-between items-center">
                        <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                            <div>
                                <div className="atropos -no-shadow js-atropos wow animate__animated animate__zoomIn">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-center">

                                                <div className="relative z-2">
                                                    <Atropos data-atropos-offset={-5}>
                                                        <img src="/img/home-1/phones/phone.png" alt="phone" />
                                                    </Atropos>
                                                </div>

                                                <div className="absolute-full-center"  >
                                                    <Atropos data-atropos-offset={-5}>
                                                        <img src="/img/home-1/phones/circle.png" alt="phone" />
                                                    </Atropos>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
                            <div className="sectionHeading animated">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Онлайн хувилбар</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Ашиглах заавар</h2>
                            </div>
                            <div className="row y-gap-60 pt-60 sm:pt-32">
                                <div className="col-12 wow animate__animated animate__fadeInUp">
                                    <div
                                        className="d-flex sm:direction-column"
                                    >
                                        <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                                            <img src="/img/home-1/success/letter.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Бүртгэл</h4>
                                            <p className="mt-12">
                                                Та өөрийн утасны дугаараар нэг удаа бүртгүүлсэнээр цааштаа дугаараа ашиглан нэвтэрч орох боломжтой
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                    <div
                                        className="d-flex sm:direction-column"
                                    >
                                        <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                                            <img src="/img/home-1/success/package-delivery.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Ургийн мод сонгох</h4>
                                            <p className="mt-12">
                                                Ургийн моднуудын олон төрлийн загваруудаас сонгон, худалдан авалт хийж, өөрөө зурах боломжтой
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                    <div
                                        className="d-flex sm:direction-column"
                                    >
                                        <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                                            <img src="/img/home-1/success/layout.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Хэзээ ч, хаанаас ч</h4>
                                            <p className="mt-12">
                                                Нэг үүсгэсэн ургийн модоо та онлайн орчинд л байхад хэзээ ч, хаанаас ч харж, татаж авах боломжтой
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}