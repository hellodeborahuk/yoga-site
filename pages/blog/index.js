import styles from "../../styles/Blog.module.css";


const Blog = (props) => {
  console.log(props.posts)
  return (
    <div className={styles.container}>
      <h1>Latest blog posts</h1>
      <div className={styles.postContainer}>
      posts
      </div>
    </div>
  );
};

export async function getStaticProps() {

  return {
    props: {
      posts: "the posts",
    },
  }
}


export default Blog;
