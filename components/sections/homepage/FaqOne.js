import AccordionOne from '@/components/elements/AccordionOne';
import Accordion from '@/components/elements/AccordionOne';

export default function FaqOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row justify-between">
                        <div className="col-xl-4 col-lg-5">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>ТУСЛАМЖ БА САНАЛ ХҮСЭЛТ</span>
                                </div>
                                <h2 className="sectionHeading__title">Түгээмэл асуултууд</h2>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <AccordionOne />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}