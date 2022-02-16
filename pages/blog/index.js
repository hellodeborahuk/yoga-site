import styles from "../../styles/Blog.module.css";
import Post from "../../components/post"
import matter from "gray-matter";
import fs from "fs";
import path from "path"

export default function Blog({posts}) {
  return (
    <div className={styles.container}>
      <h1>Latest blog posts</h1>
      <div  className={styles.postContainer}>
        {posts.map((post, index) => (
        <Post key="index" post={post} />
      ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
        slug,
        frontmatter,
      }
  })


  return {
    props: {
      posts: posts,
    },
  }
}

