import Content from "./Content";

export default async function Page() {
    const data = (await fetch('http://127.0.0.1:3000/api/categories?type=blog'));
    const { data: categories } = await data.json();
    return (
        <Content
            categories={categories}
            clickable
        />
    )
}
export const dynamic = 'force-dynamic';