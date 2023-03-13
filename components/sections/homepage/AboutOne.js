export default function AboutOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm overflow-visible">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Онлайн хувилбар</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Ургийн бичигээ хөтлөхийн давуу талууд</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-32 pt-80 md:pt-60 sm:pt-24">
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <img src="/img/home-1/company/timer.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    {/* <h4 className="text-xl fw-600 lh-1">Real time activity</h4> */}
                                    <p className="mt-20 md:mt-12">
                                    Угийн бичиг гэдэг нь эрэгтэй, эмэгтэй хоёр хүний гарвал, шинж нь хоёр талын эцэг эх, өвөг дээдсээс салбарласан тэмдэглэлийг бид угийн бичиг юм.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <img src="/img/home-1/company/cloud-storage.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    {/* <h4 className="text-xl fw-600 lh-1">Instant deploy</h4> */}
                                    <p className="mt-20 md:mt-12">
                                    Ургийн бичгийг монгол уламжлал болон шинжлэх ухааны үндэслэлээр нь авч үзвэл, хүний цус ойртолт нь есөн үе дотор болдогийг тогтоосон байна.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <img src="/img/home-1/company/touch.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    {/* <h4 className="text-xl fw-600 lh-1">Easy integrations</h4> */}
                                    <p className="mt-20 md:mt-12">
                                    Угийн бичиг, удмын түүхийг бичих нь овог, удмаа цэвэр ариун байлгах, Монгол хүний чанарыг сайжруулах, удам угсаагаа мэдэж байхтай холбон үзэж байвал зохих ойлголт юм.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <img src="/img/home-1/company/pen-tool.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    {/* <h4 className="text-xl fw-600 lh-1">Perfect UI/UX</h4> */}
                                    <p className="mt-20 md:mt-12">
                                    Орчин үеийн шинжлэх ухаанд хүний төрмөл шинж эцэг, эхээсээ 50%, өвөг эцэг, эмэг эхээс 25%, элэнц өвөг, элэнц эмэгээс 12.5% өвлөгддөг гэсэн судалгаа, нотолгоо байдаг
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}