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
           
        </>
    )
}