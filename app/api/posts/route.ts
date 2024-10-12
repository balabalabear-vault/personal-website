import { DateTime } from "luxon";

export async function GET() {  
    return Response.json({
        data: [
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
            // {
            //     id: 'nextjs-file-conventions',
            //     title: 'Nextjs File Conventions',
            //     content: `In Next Documentation, it listed a set of special files to create UI with specific behavior. Today, I am going to experiment how are these files can help improve our website navigate experience.`,
            //     createdAt: new Date().toISOString(),
            //     categories: ['Learning'],
            // },
        ]
    })
  }