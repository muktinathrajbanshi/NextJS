import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
const about = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.main_heading_h}>Hello this is about page</h1>
    </>
  );
};

export default about;
