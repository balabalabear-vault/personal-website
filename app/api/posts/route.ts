export async function GET() {  
    return Response.json({
        data: [
            {
                id: 'the-base-of-my-blog',
                title: 'The Base of My Blog - Markdown',
                content: `I think Markdown is a brilliant tool as it is so lightweight but still be able to add formatting and be rendered in multiple palces.
Yet, I believe not every programmer knows how to use Markdown syntax to document their work, at least I don't.
Therefore, I am going to implement Markdown files throughout all my blog to let me acquire a better documentaiton skills.`,
                createdAt: new Date().toISOString(),
                categories: ['Learning'],
            }
        ]
    })
  }