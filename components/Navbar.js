const Navbar = () => {
    return (
      <nav>
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/bloglist">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <h1>Debbie Dann Yoga</h1>
        <div className="right-nav">
          <button>Book your class</button>
        </div>
      </nav>
    );
}
 
export default Navbar;