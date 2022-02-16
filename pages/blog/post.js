import Link from "next/link"
import styles from "../../styles/Blog.module.css";

const Post = ({post}) => {
    return ( 
        <div className={styles.post}>
            <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} className={styles.postImage} />
            <h4 className={styles.postTitle}>{post.frontmatter.title}</h4>
            <p className={styles.postExcerpt}>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a className={styles.postBtn}>Read more</a>
            </Link>
        </div>
     );
}
 
export default Post;