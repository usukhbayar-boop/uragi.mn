import Link from 'next/link';

export default function Logo({ logo }) {
    return (
        <>
            <div className="header__logo">
                <Link className="base-logo" href="/">
                    <img
                        className="base-logo-first"
                        src={`/img/general/logo-dark.png`}
                        alt="logo"
                        width="50" height="60"
                    />
                    <img
                        className="base-logo-second"
                        src="/img/general/logo-dark.png"
                        alt="logo"
                        width="50" height="60"
                    />
                </Link>
                <Link className="menu-logo" href="/">
                    <img src="/img/general/logo-dark.png" alt="logo" width="50" height="60" />
                </Link>
            </div>
        </>
    )
}