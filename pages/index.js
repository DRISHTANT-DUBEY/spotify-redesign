import Head from 'next/head'
import Image from 'next/image'
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  );
}
