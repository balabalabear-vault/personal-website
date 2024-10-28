import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.values();
    const projects = [
        {
            id: "concept4-limited",
            name: 'Concept 4 Limited',
            role: 'Full Stack Developer',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9lFqCxVAsO7MYZSHz757nFWo5FGDV0wwgw&s',
            duration: 'FEB 2022 - MAR 2024',
            categories: ['Work']
        },
        {
            id: "muse-labs-engineering-limited",
            name: 'Muse Labs Engineering Limited',
            role: 'Software Developer',
            image: 'https://muselabs-eng.com/wp-content/uploads/2021/08/bluelogo.png',
            duration: 'JUL 2021 - JAN 2022',
            categories: ['Work']
        },
        {
            id: "petsave-org",
            name: 'PetSave Org',
            role: 'Backend Lead',
            image: 'https://www.petsaveorg.com/save-pets-icon.jpeg',
            duration: 'APR 2024 - Current',
            categories: ['Personal']
        },
    ]

    const selectedCategories = new Set(query);
    return Response.json(
        projects.filter((project) => {
            for(const category of project.categories) {
                if(selectedCategories.has(category)) return true;
            }
            return false
        })
    )
}
