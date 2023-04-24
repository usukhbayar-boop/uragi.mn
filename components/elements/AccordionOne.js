import { useState } from "react";
import * as Icon from 'react-feather';

export default function AccordionOne() {
    const [active, setActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (active.key === key) {
            setActive({
                status: false,
            });
        } else {
            setActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="accordion -simple md:mt-24 js-accordion">
                <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">Угийн мод, ургийн зураглал бүтээх</button>
                    </div>
                    <div className="accordion__content" style={active.key == 1 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            Удам угсаанд байгаа хүн бүрийн нэр, хүйс, гэр бүлийн байдал, амьд сэрүүн буй эсэх, үр хүүхдийн тоо зэргийг хараад мэдэж болохуйц хөтлөөрэй. Зөвхөн нэр, овгийг бичих нь цааш үргэлжлүүлэхэд хангалтгүй байдаг. Эцэг, эхийн талыг аль алиныг нь хөтлөх нь зүй.

                        </div>
                    </div>
                </div>
                <div className={active.key == 2 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(2)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">Мэдээлэл цуглуулах</button>
                    </div>
                    <div className="accordion__content" style={active.key == 2 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>Ахмад настай эмээ, өвөө, буурлуудаасаа мэдээлэл цуглуулж ургийн бичгээ үнэн зөв хөтлөөрэй. </p>
                        </div>
                    </div>
                </div>
                <div className={active.key == 3 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(3)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">Мэдэх хүртлээ бичих, зохиож бичихгүй байх</button>
                    </div>
                    <div className="accordion__content" style={active.key == 3 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>Мэдэхгүй, мэдэх боломжгүй хүмүүсийн мэдээллийг зохиож бичихгүй байх нь чухал. Нэг л хүний мэдээллийг зохион бичсэнээр тухайн ургийн бичгийн утга учир алдагдахыг санаарай. </p>
                        </div>
                    </div>
                </div>
                <div className={active.key == 4 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(4)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">Ургийн овгоо үнэн зөв бичсэн бичиг баримттай байх</button>
                    </div>
                    <div className="accordion__content" style={active.key == 4 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>Монголчуудын дийлэнх нь "Боржигон" овогтой болсон нь нууц биш. Та дээрх алхмуудыг хийж, мэдээлэл цуглуулах явцдаа үнэн зөв ургийн овгоо мэдэж авсан бол бичиг баримтаа үнэн зөв болгохоос бүү цааргалаарай. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}