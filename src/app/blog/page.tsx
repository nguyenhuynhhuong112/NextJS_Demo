import { dataPost } from "@/data/data";
import PostCard from "../components/postCard/postCard";
import style from "./blog.module.css";
import { IPost } from "../../../common/interfaces/post";
export default function BlogPage() {
  return (
    <div className={style.container}>
      {dataPost.map((post) => (
        <div className={style.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
