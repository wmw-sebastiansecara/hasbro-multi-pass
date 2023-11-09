import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import MultiPassify from "multipassify";


export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const today = new Date();
  const customerData = {
    email,
    created_at: today.toISOString(),
  };
  const multipassify = new MultiPassify(process.env.HASBRO_MULTIPASS_SECRET)
  const token = multipassify.encode(customerData);
  const multipassLink = await multipassify.generateUrl(customerData, process.env.HASBRO_URL);

  return NextResponse.json({ 
    email,
    multipass_link: multipassLink,
   });
}