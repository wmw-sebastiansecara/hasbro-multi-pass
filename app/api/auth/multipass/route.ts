import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import MultiPassify from "multipassify";


export async function POST(req: Request) {
  // const { email } = await req.json();
  
  // const today = new Date();
  // console.log(today.toISOString());
  // const customerData = {
  //   email,
  //   created_at: today.toISOString(),
  // };
  // const multipassify = new MultiPassify(process.env.HASBRO_MULTIPASS_SECRET)
  // const token = multipassify.encode(customerData);

  // const multipassLink = await multipassify.generateUrl(customerData, process.env.HASBRO_URL);


  return NextResponse.json({ 
    email: 'sebastian@wemakewebsites.com',
    multipass_link: 'google.com'
   });
}