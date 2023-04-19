import AccordionOne from '@/components/elements/AccordionOne';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import * as Icon from 'react-feather';
import {useRouter} from 'next/router';

export default function Services2() {

    const router = useRouter();

    const exit = () => {
        router.push("/profile-page")
    }
    return (
        <>
            <iframe width="1000" height="700" frameBorder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=39026122DDC53997%215651&authkey=%21AAZ4_B9rDJruBzg&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=true&ed1JS=false"></iframe>
            <button type="button" onClick={exit} className={`d-flex items-center justify-center js-nav-open`}>
                                        Хадгалаад гарах
                                    </button>
        </>
    )
}