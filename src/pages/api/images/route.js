// app/api/images/route.ts
import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";

// type ResponseData = {
//  url: string,
// }

export async function GET() {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: 'troika/tacommodity/phagro/customtest.png',
    });

    const { Bucket, Key } = (command).input; 
    const url = `https://${Bucket}.s3.amazonaws.com/${Key}`;

    return new NextResponse(url)
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    return new NextResponse('Error fetching image from S3');
  }
}
