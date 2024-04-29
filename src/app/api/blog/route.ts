import { db } from "@/lib/db";
import { Category, Prisma } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const conditions: Prisma.BlogWhereInput[] = [];
    const queries = req.url?.split('?')[1]?.split('&');

    const pick = (queriesArr: string[] | undefined, field: string) => (
      queriesArr?.find(q => q.split('=')[0] === field)?.split('=')[1]
    );

    const page = Number(pick(queries, 'page')) - 1 || 0;
    const limit = Number(pick(queries, 'limit')) || 20;
    const sortBy = pick(queries, 'sortBy');
    const sortOrder = pick(queries, 'sortOrder');
    const category = pick(queries, 'category');
    const searchQuery = pick(queries, 'searchQuery');

    // console.log(searchQuery);
    // const searchableFields = ['title', 'summary'];
    // if (searchQuery) {
    //   conditions.push({
    //     OR: searchableFields.map(field => ({
    //       [field]: {
    //         contents: searchQuery,
    //         mode: 'insensitive'
    //       }
    //     }))
    //   })
    // };
    if (searchQuery) {
      conditions.push({
        OR: [
          {
            title: {
              contains: searchQuery,
              mode: 'insensitive'
            }
          },
          {
            summary: {
              contains: searchQuery,
              mode: 'insensitive'
            }
          }
        ]
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
    const total = await db.blog.count({ where: { AND: conditions } })

    return NextResponse.json({
      success: true,
      message: 'All blog found',
      meta: { page: page + 1, limit, total },
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
