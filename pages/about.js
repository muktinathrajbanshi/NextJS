import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
const about = () => {
  return (
    <>
      <Navbar />
      <div style={{textAlign: "center"}}>
      <h1 className={styles.main_heading_h}>Hello this is about page</h1>
      {/* <div className={styles.image_container}>
      <Image src="/web3.png" layout="fill"></Image>
      </div> */}
            
            <Image src="https://images.pexels.com/photos/33498261/pexels-photo-33498261.jpeg?_gl=1*vuq4yh*_ga*MTQ1NTEzMTEyMS4xNzQ3MzI3NTk2*_ga_8JE65Q40S6*czE3NTYyODQyMTUkbzkkZzEkdDE3NTYyODQyMjAkajU1JGwwJGgw"
             width="500" 
             height="300"
             alt ="aboutImage"
             ></Image>
      </div>

    </>
  );
};

export default about;
