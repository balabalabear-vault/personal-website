import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";

export type TBlog = {
    id: string,
    categories: string[],
    title: string,
    content: string,
    createdAt: DateTime    
}

export async function GET(request: NextRequest){ 
    try {
        const selectedCategories = request.nextUrl.searchParams.getAll('selectedCategories');
        const pageIndex = request.nextUrl.searchParams.get('pageIndex');
        const pageSize = request.nextUrl.searchParams.get('pageSize');
    
        if(
            selectedCategories === null
            || pageIndex === null
            || pageSize === null
        ) throw new Error('Invalid URL') // error.tsx in blog page
    
        const blogs: TBlog[] = [
            {
                id: 'the-base-of-my-blog',
                title: 'The Base of My Blog - Markdown',
                content: `I think Markdown is a brilliant tool as it is so lightweight but still be able to add formatting and be rendered in multiple palces.
                Yet, I believe not every programmer knows how to use Markdown syntax to document their work, at least I don't.
                Therefore, I am going to implement Markdown files throughout all my blog to let me acquire a better documentaiton skills.`,
                createdAt: DateTime.fromISO('2024-09-27'),
                categories: ['Learning'],
            },
            {
                id: 'try-catch-block',
                title: 'Better try catch block usage in TypeScript',
                content: `Recently I got a take home assigment in my job hunting process which asked for a full stack application using React and Express.
                One of the bonus points they ask for is a logging mechanism that can logs and stores logged messages for future analysis.`,
                createdAt: DateTime.fromISO('2024-10-11'),
                categories: ['Learning'],
            },
            {
                id: 'first-job-in-toronto',
                title: 'Next Goal: Terraform Associate',
                content: `Almost 7 months after I arrived Toronto, I finally got an offer as an Intermediate Frontend Developer.
                It's a start and I appreciate the one who granted me this opportunity. Thank you very much.`,
                createdAt: DateTime.fromISO('2024-11-01'),
                categories: ['Updates'],
            },
            // {
            //     id: 'nextjs-file-conventions',
            //     title: 'Nextjs File Conventions',
            //     content: `In Next Documentation, it listed a set of special files to create UI with specific behavior. Today, I am going to experiment how are these files can help improve our website navigate experience.`,
            //     createdAt: new Date().toISOString(),
            //     categories: ['Learning'],
            // },
        ];

        const selectedCategoriesSet = new Set(selectedCategories);

        const filteredBlog = blogs.filter((blog) => {
            for(const category of blog.categories) {
                if(selectedCategoriesSet.has(category)) return true;
            }
            return false
        }).reverse();

        let slicedBlog;

        if(pageIndex === '0') slicedBlog = filteredBlog.slice(0, parseInt(pageSize));
        else slicedBlog = filteredBlog.slice(
            parseInt(pageSize) * parseInt(pageIndex),
            parseInt(pageSize) * (parseInt(pageIndex) + 1)
        );

        return NextResponse.json({
            data: slicedBlog,
            length: filteredBlog.length
        });
    } catch(e: any) {
        if(e instanceof Error) {
            return NextResponse.json({ message: e.message }, {status: 404, statusText: e.message });
        }
    }
  }