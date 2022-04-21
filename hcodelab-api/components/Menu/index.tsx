import Link from "next/link";

import style from './Menu.module.scss';



const Menu = () => {
    return (
        <>
            <nav className="column side" style={{ backgroundColor: '#aaa' }}>
                <ul>
                    <li className={style.li}>
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>CONTACT</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;