import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    <>
      <h1>Hello this is blog {pageNumber} page</h1>
    </>
  );
};

export default pageNo;
