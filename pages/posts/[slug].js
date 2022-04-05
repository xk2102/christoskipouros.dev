// -- REACT-------------------------------------------
// -- NEXT--------------------------------------------
// -- COMPONENTS--------------------------------------
import ProgressBar from "../../components/ProgressBar";
// -- OTHER-------------------------------------------
import DOMPurify from "isomorphic-dompurify";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "./post.module.css";

const post = ({ frontmatter: { title, date, cover_image }, slug, content }) => {
  const postContent = marked(content);
  const cleanPostContent = DOMPurify.sanitize(postContent, { ADD_ATTR: ["target"] });

  return (
    <div className={`animate ${styles.post}`}>
      <ProgressBar></ProgressBar>
      <div dangerouslySetInnerHTML={{ __html: cleanPostContent }}></div>
    </div>
  );
};

export default post;

// // ----------------------------------------------------------------
// // -- GET STATIC PATHS --------------------------------------------
// // ----------------------------------------------------------------
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("markdown_files"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
// // ----------------------------------------------------------------
// // -- GET STATIC PROPS --------------------------------------------
// // ----------------------------------------------------------------
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("markdown_files", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
