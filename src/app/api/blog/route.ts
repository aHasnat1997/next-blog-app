import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const result = await db.blog.findMany();
    return NextResponse.json({
      success: true,
      message: 'All blog found',
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

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await db.blog.create({ data })
    return NextResponse.json({
      success: true,
      message: 'Blog created',
      data: result
    }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong',
      error
    }, { status: 400 })
  }
};
