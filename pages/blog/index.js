import Navbar from "../../components/Navbar";


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
          return <div key={curElem.id}>
              <h1>{curElem.id}</h1>
              <h1>{curElem.title}</h1>
          </div>
        })
      }
    </>
  );
};

export default Blog;
