import Link from "next/link";

const index = () => {
  return (
    <>
      <nav className="menu-list">
        <ul className="menu-bar">
           <li>
             <Link href="/">
                <a>Home</a>
            </Link>
           </li>
            <li>
            <Link href="/about">
             <a>About</a>
            </Link>
            </li>
           <li>
             <Link  href="/contact">
                <a>Contact</a>
            </Link>
           </li>
           <li>
             <Link a href="/blog">
                <a>Blog</a>
            </Link>
           </li>
           <li>
             <Link href="/product">
                <a>Product</a>
            </Link>
           </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
