import { NextPage } from "next";
import s from "./page.module.scss";

interface Props {}

const Page: NextPage<Props> = async ({ params }) => {
  const response = await fetch(`http://localhost:5500/article/${params.id}`);
  const data = await response.json();

  return (
    <div className={s.Page}>
      <div className={s.Page__wrapper}>
        <h1>{data[0].title}</h1>
        <h2>{data[0].subtitle}</h2>
        <p>Автор: {data[0].author}</p>
      </div>
      <div>
        {data[0].text.split("\n").map((paragraph, index) => (
          <p className={s.Linar} key={index}>
            <span style={{ marginLeft: "20px" }}></span>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page;
