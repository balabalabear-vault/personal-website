import { NextRequest } from "next/server";

export async function GET(request: NextRequest,) {  
    const type = request.nextUrl.searchParams.get('type');
    const categories = {
        blog: [
            'updates',
            'learning',
            'thoughts',
        ],
        project: [
            'work',
            'personal',
        ]
    }
    return Response.json({
        //@ts-ignore
        data: type && categories[type] || Object.values(categories).flat()
    })
  }