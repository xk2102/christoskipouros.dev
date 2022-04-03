// -- REACT-------------------------------------------
// -- NEXT--------------------------------------------
import { useRouter } from "next/router";
import Link from "next/link";
// -- OTHER--------------------------------------
import ProgressBar from "../../components/ProgressBar";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "./posts.module.css";

const posts = ({ posts }) => {
  // // ----------------------------------------------------------------
  // // -- STATE, HOOKS-------------------------------------------------
  // // ----------------------------------------------------------------
  return (
    <div className={styles.posts}>
      <ProgressBar></ProgressBar>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>🔗{<Link href={`/posts/${post.slug}`}>{post.slug}</Link>}</li>
        ))}
      </ul>
    </div>
  );
};

export default posts;

// // ----------------------------------------------------------------
// // -- GET STATIC PROPS --------------------------------------------
// // ----------------------------------------------------------------
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("markdown_files"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("markdown_files", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
