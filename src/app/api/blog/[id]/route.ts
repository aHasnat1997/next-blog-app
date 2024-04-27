import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const blogId = params.id;
    const result = await db.blog.findUniqueOrThrow({
      where: {
        id: blogId
      },
      include: {
        user: true
      }
    });
    return NextResponse.json({
      success: true,
      message: 'Single blog found',
      data: result
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong',
      error
    }, { status: 400 });
  }
};