import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
import styles from "../../styles/Blog.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyCPvh9ILI1N7j3-Mt_eH-uvkX13cdwoDaI",
  authDomain: "yoga-website-4eafe.firebaseapp.com",
  projectId: "yoga-website-4eafe",
  storageBucket: "yoga-website-4eafe.appspot.com",
  messagingSenderId: "343308541111",
  appId: "1:343308541111:web:2d5d9292baab0b264b4132",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { id: doc.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  return {
    props: { post: docSnap.data() }
  }
};

const BlogPost = ({ post }) => {
  return (
    <article className={styles.blogContainer}>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} className={styles.blogPostImage} />
      <p>{post.body}</p>
    </article>
  );
};

export default BlogPost;
