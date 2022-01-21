import Link from "next/link"

const Navbar = () => {
    return (
      <nav>
        <div className="left-nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <h1 className="website-title">Debbie Dann Yoga</h1>
        <div className="right-nav">
          <button>Book your class</button>
        </div>
      </nav>
    );
}
 
export default Navbar;