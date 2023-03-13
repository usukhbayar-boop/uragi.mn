import ScreenshotsSlider from "@/components/elements/ScreenshotsSlider";

export default function AppOne() {
    return (
        <>
            <section className="layout-pt-md layout-pb-md home-1-slider section-bg-color">
                <div className="section-bg-color__item -wide bg-dark-1" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading -light">
                                <div className="sectionHeading__subtitle">
                                    <span>Онлайн хувилбар</span>
                                </div>
                                <h2 className="sectionHeading__title">Ургийн бичиг</h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-center pt-60 sm:pt-40 overflow-hidden"
                        data-cursor-slider="slider"
                    >
                        <div className="col-xl-4123123">
                            <div
                                className="sectionSlider"
                                data-cursor-slider="slider"
                            >
                                <div className="phone-slider-image__bg">
                                    <img
                                        src="/img/home-1/appScreens/iphone-12-pro-max--pacific-blue.png"
                                        alt="phone image"
                                    />
                                </div>
                                <ScreenshotsSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}