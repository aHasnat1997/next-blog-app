import { db } from "@/lib/db";
import { Category, Prisma } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const conditions: Prisma.BlogWhereInput[] = [];
    const queries = req.url?.split('?')[1]?.split('&');
    const page = Number(queries?.find(q => q.split('=')[0] === 'page')?.split('=')[1]) - 1 || 0;
    const limit = Number(queries?.find(q => q.split('=')[0] === 'limit')?.split('=')[1]) || 30;
    const sortBy = queries?.find(q => q.split('=')[0] === 'sortBy')?.split('=')[1];
    const sortOrder = queries?.find(q => q.split('=')[0] === 'sortOrder')?.split('=')[1];
    const category = queries?.find(q => q.split('=')[0] === 'category')?.split('=')[1];

    // to-do: FIX: searchQuery not working
    const searchQuery = queries?.find(q => q.split('=')[0] === 'searchQuery')?.split('=')[1];
    const searchableFields = ['title', 'summary'];
    // console.log(searchQuery);
    if (searchQuery) {
      conditions.push({
        OR: searchableFields.map(key => ({
          [key]: {
            contents: searchQuery,
            mode: 'insensitive'
          }
        }))
      })
    };


    if (category) {
      conditions.push({
        category: {
          equals: category as Category,
        }
      })
    };


    const result = await db.blog.findMany({
      skip: page * limit,
      take: limit,
      orderBy: sortBy && sortOrder ? {
        [sortBy]: sortOrder
      } : {
        createdAt: 'desc'
      },
      where: { AND: conditions }
    });
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

export async function POST(req: NextRequest) {
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
