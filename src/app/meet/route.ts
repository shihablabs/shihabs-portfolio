import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://meet.google.com/ejy-pvpw-xwe", {
    status: 307, // Temporary redirect (can be changed to 308 for permanent)
  });
}
