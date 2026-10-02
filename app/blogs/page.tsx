import { categories } from "../lib/categories";
import Content from "./Content";

export default function Page() {
    return (
        <Content
            categories={categories.blog}
            clickable
        />
    )
}