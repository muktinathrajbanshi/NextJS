import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
const contact = () => {
  return (
    <>
      <Navbar />
      {/* <h1 className={styles.main_heading}>hello this is contact page</h1> */}
      {/* <h1 style={{color: "green"}}>hello this is contact page</h1> */}
       <h1>hello this is contact page</h1>
       <p className="para-tag">welcome back to contact page</p>
      <style jsx>
        {`
          h1 {
          color: blue;
          }
          .para-tag {
            font-size: 2rem;
            color: pink;

          }

        `}
      </style>
    </>
  );
};

export default contact;
