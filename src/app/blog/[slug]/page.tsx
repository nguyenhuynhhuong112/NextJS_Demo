import Image from "next/image";
import style from "./siglePost.module.css";
export default function SinglePostPage() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/21853216/pexels-photo-21853216/free-photo-of-cafe-matinal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={style.img}
        />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}>Title</h1>
        <div className={style.detail}>
          <Image
            className={style.avatar}
            alt=""
            width={50}
            height={50}
            src="https://images.pexels.com/photos/23124396/pexels-photo-23124396/free-photo-of-sunset-at-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className={style.detailText}>
            <span className={style.detailTitle}>Author</span>
            <span className={style.detailValue}>Terry Jefferson</span>
          </div>
          <div className={style.detailText}>
            <span className={style.detailTitle}>Puslished</span>
            <span className={style.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={style.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </div>
      </div>
    </div>
  );
}
