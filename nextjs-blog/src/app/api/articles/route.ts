import fs from "fs";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const GET = async () => {
    const articles = JSON.parse(fs.readFileSync("articles.json", "utf8"));
    articles.articles.sort((a: any, b: any) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });
    return NextResponse.json(articles);
}
