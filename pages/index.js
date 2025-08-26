import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

const index = () => {
  return (
    <>
      <Navbar />
      <section className={`${styles.section} ${styles.section_hero}`}>
        <div className={styles.hero_heading}>
          <h1 className={styles.heading_purpose}>Welcome to Home Page</h1>
          <p className={styles.para}>Hello, this is home page thank you so much for component based css</p>
          <p>I am very exciting regarding this component based css</p>
        </div>
      </section>
    </>
  );
};

export default index;
