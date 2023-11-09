import SignOut from "@/components/sign-out";
import { unstable_getServerSession } from "next-auth/next";
import type { GetServerSideProps } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

async function getData(host: string, session: object) {

  const res = await fetch(`http://${host}/api/auth/multipass`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: session?.user?.email,
    }),
  })
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res
}

export default async function Home() {
  const host = headers().get("host");
  const session = await unstable_getServerSession();
  const data = await getData(host!, session!)
  

  
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-12 justify-center items-center">
        <Link
          className="inline-flex items-center p-4 border-2"
          href="google.com"
        >
          {session?.user?.email}
          <br/>
          {host}
          {data.multipass_link}
          <Image
            src="/shopify-logo.png"
            priority
            alt="Logo"
            className="w-12 h-12 mr-4"
            width={50}
            height={50}
          />

          <span className="w-full">Login to Shopify</span>
        </Link>
        <SignOut />
      </div>
    </div>
  );
}
