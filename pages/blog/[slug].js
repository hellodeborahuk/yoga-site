import fs from "fs"
import path from "path"
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link"
import styles from "../../styles/Blog.module.css";

const PostPage = ({frontmatter: {title, cover_image}, slug, content}) => {
    return ( 
        <section className={styles.blogContainer}>
        <h1>{title}</h1>
        <img src={cover_image} alt={title} className={styles.blogPostImage} />
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <Link href="/blog">
            <a className={styles.backBtn}>Go back</a>
        </Link>
        </section>
     );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
          slug: filename.replace('.md', ''),
        },
      }))
    
    return {
        paths,
        fallback: false,
      }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8")
   
   const {data:frontmatter, content } =  matter(markdownWithMeta)

    return {
        props: {
            frontmatter, 
            slug, 
            content
        }
    }
}
 
export default PostPage;