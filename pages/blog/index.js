import styles from "../../styles/Blog.module.css";
import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data },
  };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <h1> Blog posts go here.</h1>
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <a className={styles.postTitle}>{post.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
