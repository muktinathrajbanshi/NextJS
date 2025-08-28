import Navbar from "../../components/Navbar";
import styles from "../../styles/blog.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  
  return {
    props: {
      data,
    },
  };

};

const Blog = ({data}) => {
  return (
    <>
      <Navbar />
      {
        data.slice(0, 5).map((curElem) => {
          return <div key={curElem.id} className={styles.blog_style}>
              <h3 className={styles.heading_one}>{curElem.id}</h3>
              <Link href={`/blog/${curElem.id}`}>
              <h4 className={styles.heading_two}>{curElem.title}</h4>
              </Link>
          </div>
        })
      }
    </>
  );
};

export default Blog;
