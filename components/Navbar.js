import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="menu-list">
        <ul className="menu-bar">
           <li>
             <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
           </li>
            <li>
            <Link href="/about" legacyBehavior>
             <a>About</a>
            </Link>
            </li>
           <li>
             <Link  href="/contact" legacyBehavior>
                <a>Contact</a>
            </Link>
           </li>
           <li>
             <Link a href="/blog" legacyBehavior>
                <a>Blog</a>
            </Link>
           </li>
           <li>
             <Link href="/product" legacyBehavior>
                <a>Product</a>
            </Link>
           </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
