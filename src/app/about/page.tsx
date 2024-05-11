import Image from "next/image";
import style from "./about.module.css";
export default function AboutPage() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>About Agency</h2>
        <h1 className={style.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={style.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          belive in good ideas flexibility adn precission We're world's Out
          Special Team best consulting & finance solution provider. Wide ranger
          of web and sofware developer services.
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={style.imageContainer}>
        <Image src="/about.png" alt="about image" fill className={style.image} />
      </div>
    </div>
  );
}
