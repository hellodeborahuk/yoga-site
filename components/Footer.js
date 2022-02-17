import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Hi, I’m Debbie! I am a proud mum of two girls and live in Andover,
          Hampshire. I completed my Yoga Alliance Professional accredited RYT
          200hrs teacher training with Jill Jones Yoga. Doing yoga and
          meditation keeps me calm and helps me cope with daily family life.
        </p>
      </div>
      <div className="social">
        <a
          href="https://instagram.com/debbiedannyoga"
          className="social-icons instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/debbiedannyoga"
          className="social-icons facebook"
        >
          <FaFacebookSquare />
        </a>
        <div className="logo">
          <Image
            src="/images/logo-nameless-small.png"
            alt="logo"
            width={1420}
            height={1000}
          />
        </div>
      </div>
      <div className="footer-nav">
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
    </footer>
  );
};

export default Footer;
