import styles from "../../styles/Blog.module.css";

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
        <div key={post.id}>
          <h3 className={styles.postTitle}>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
