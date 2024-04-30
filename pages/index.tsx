import Link from "../src/Link";
import Icon from "@mdi/react";
import { mdiForestOutline } from "@mdi/js";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://hjy.jsdict.com/manage/validCode/getCodeId",
    fetcher,
    {
      fallbackData: [],
    }
  ); // fallbackData: data变量的初始数据
  if (isLoading) return <div className="Loading">loading...</div>;
  if (error) return <div className="Error">{error.message}</div>;
  return (
    <>
      <Link href="/about" color="secondary">
        跳转到About页面
      </Link>
      <Icon
        path={mdiForestOutline}
        title="User Profile"
        size={8}
        // horizontal
        // vertical
        // rotate={180}
        color="#00cc99"
        // spin
      />
      <div>getCodeId: {data}</div>
    </>
  );
}
