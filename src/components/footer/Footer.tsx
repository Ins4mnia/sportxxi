import { NextPage } from "next";
import s from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className={s.Footer}>
      <Link className={s.Footer__logo} href={"/"}>
        SportXXI
      </Link>

      <div className={s.Footer__socials}>
        <Link href={"https://www.youtube.com/"}>
          <Image src={"/HeaderIcon1.svg"} width={34} height={34} alt="YouTube" />
        </Link>
        <Link href={"https://telegram.org/"}>
          <Image src={"/HeaderIcon2.svg"} width={34} height={34} alt="Telegram" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
