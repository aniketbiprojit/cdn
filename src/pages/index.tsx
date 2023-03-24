import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  type NextPage,
} from "next";
import Head from "next/head";

import { Folder } from "../server/trpc/router/example";
import { useEffect, useState } from "react";
import { readFileSync } from "fs";

export const getServerSideProps: GetServerSideProps<{
  data: Folder;
}> = async () => {
  const res = JSON.parse(
    readFileSync("public/cdn-source/manifest.json").toString()
  );
  const data: Folder = res;
  return {
    props: { data },
  };
};

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  const [manifest, setManifest] = useState<Folder>();

  useEffect(() => {
    if (manifest === undefined) {
      setManifest(data);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>CDN View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(manifest ?? {}, undefined, 4)}</pre>
    </>
  );
};

export default Home;
