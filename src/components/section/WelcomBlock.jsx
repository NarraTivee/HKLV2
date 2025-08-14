import styles from "@/styles/section/WelcomBlock.module.scss";
import { Header } from "../ui/Header";

import WelcomBlockBg from "@/styles/img/section/gruzovik-v-sudohodnom-portu.jpg";
import WelcomBlockLogo from "@/styles/svg/logo-hkl.svg";

export function WelcomBlock() {
    return (
        <section className={styles.welcom_block}>
            <div
                className={styles.welcom_block_container}
                style={{ 'background-image': `url(${WelcomBlockBg})` }}>
                <Header />
                <div className={styles.welcom_block_content}>
                    <div className={styles.welcom_block_left}>
                        <div className={styles.welcom_block_about_us}>
                            <div className={styles.welcom_block_about_us_container}>
                                <div className={styles.welcom_block_about_us_text}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis necessitatibus ratione vitae sint reiciendis similique id. Ducimus sint maxime laborum inventore ipsa pariatur omnis saepe natus exercitationem quasi iste voluptatem assumenda totam, aut sit? Labore!</p>
                                    <div className={styles.welcom_block_about_us_btn_container}>
                                        <a href="#about_us">Read more</a>
                                    </div>
                                </div>
                                <div className={styles.welcom_block_about_us_title}>
                                    <h1>Halaburda<br />&<span>Logistic</span><br />Kravel</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.welcom_block_right}>
                        <div className={styles.welcom_block_logo_container}
                            style={{ 'background-image': `url(${WelcomBlockLogo})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
