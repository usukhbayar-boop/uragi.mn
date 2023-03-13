import Atropos from 'atropos/react';
import Link from "next/link";

export default function BenefitsOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div
                        className="row y-gap-48 justify-between items-center"
                    >
                        <div className="col-xl-4 col-lg-5">
                            <div className="sectionHeading animated">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Safety first</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Ton of benefits</h2>
                            </div>
                            <div
                                className="row x-gap-64 y-gap-32 pt-40 md:pt-32  wow animate__animated animate__fadeInUp"
                            >
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">Development</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">App builder</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">Web Design</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">Dashboard</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">Do Magic</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">Feedback</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex items-center">
                                        <div className="icon-circle-check mr-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-check icon text-accent"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-dark-1 fw-600">Save Time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-60 md:mt-32">
                                <Link
                                    href="/about/about-1"
                                    className="button -md -accent text-white -uppercase wow animate__animated animate__fadeInUp"
                                >
                                    Free Trial
                                </Link>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6">
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
                </div>
            </section>
        </>
    )
}