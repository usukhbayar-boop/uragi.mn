import CounterUp from '@/components/elements/CounterUp';
import CountUp from 'react-countup';

export default function CounterOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-48">
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={733} time={1} />
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Хэрэглэгч</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={1254} time={1} />
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Загвар</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={633} time={1} />
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Хандалт</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={125} time={1} />
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Худалдан авсан</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}