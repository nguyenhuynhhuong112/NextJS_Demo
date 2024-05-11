import Image from "next/image";
import style from "./postCard.module.css";
import Link from "next/link";
import { IPost } from "../../../../common/interfaces/post";
export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className={style.container}>
      <div className={style.top}>
        {post.img && (
          <div className={style.imgContainer}>
            <Image src={post.img} alt="" fill className={style.img} />
          </div>
        )}
        <span className={style.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.desc}>{post.body}</p>
        <Link className={style.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
