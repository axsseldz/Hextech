import Head from "next/head";
import PostBox from "@/components/PostBox";


export default function Home() {

  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Hextech</title>
      </Head>
      <PostBox />

    </div>
  )
}
