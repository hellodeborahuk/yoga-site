

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
  })

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return { 
        props: {post: data}
    }
}

const BlogPost = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
};

export default BlogPost;
