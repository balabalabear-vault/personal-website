export async function GET() {
    return Response.json({
        data: [
            {
                id: 1,
                name: 'Concept 4 Limited',
                role: 'Full Stack Developer',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9lFqCxVAsO7MYZSHz757nFWo5FGDV0wwgw&s',
                duration: 'FEB 2022 - MAR 2024',
                categories: ['work'],
                link: 'https://www.concept4.net/',
            },
            {
                id: 2,
                name: 'Muse Labs Engineering Limited',
                role: 'Software Developer',
                image: 'https://muselabs-eng.com/wp-content/uploads/2021/08/bluelogo.png',
                duration: 'JUL 2021 - JAN 2022',
                categories: ['work'],
                link: 'https://muselabs-eng.com/en/home-eng/',
            },
            {
                id: 3,
                name: 'PetSave Org',
                role: 'Backend Developer',
                image: 'https://www.petsaveorg.com/save-pets-icon.jpeg',
                duration: 'APR 2024 - Current',
                categories: ['personal'],
                link: 'https://www.petsaveorg.com/',
            },
        ]
    });
}
