import styles from "@/styles/ui/Header.module.scss";
import { useState } from "react";

import { ModalWindow } from "@/components/ui/ModalWindow";

import { Link } from "react-scroll";
export function Header() {
    const [isClick, setIsClick] = useState(false);

    const handleClose = (newStat) => {
        setIsClick(newStat)
    }
    return (
        <header className={styles.header}>
            {isClick ? (<ModalWindow setHandleClose={handleClose} />) : null}

            <div className={styles.header_container}>
                <div className={styles.header_left}>
                    <div className={styles.header_logo}>
                        <a href="/">
                            <h1>H&K Logistic</h1>
                        </a>
                    </div>
                    <ul className={styles.header_routing_list}>
                        <li className={styles.header_routing_items}><Link to="services" smooth={true} duration={500}>• Services</Link></li>
                        <li className={styles.header_routing_items}><Link to="services" smooth={true} duration={500}>• About Us</Link></li>
                    </ul>
                </div>
                <div className={styles.header_contacts_container}>
                    <button className={styles.header_contacts_btn}
                        onClick={() => {
                            setIsClick(true)
                        }}
                    >Contacts</button>
                </div>
            </div>
        </header>
    );
}