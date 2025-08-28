import Navbar from "../../components/Navbar";
import styles from "../../styles/blog.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  
  return {
    props: {
      data,
    },
  };

};

const myData = ({ data }) => {
  const {id, title, body} = data;
  return (
    <>
    <Navbar />
    <div className={styles.blog_style_inside}>
      <h3 className={styles.heading_one_ok}>{id}</h3>
        <h4 className={styles.heading_two_ok}>{title}</h4>
        <p className={styles.para_ok}>{body}</p>
    </div>
    </>
  );
};

export default myData;
