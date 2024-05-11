import Image from "next/image";
import style from "./contact.module.css";
export default function ContactPage() {

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/contact.png" alt="" fill className={style.img} />
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <input type="text" placeholder="Name " />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone Number" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
