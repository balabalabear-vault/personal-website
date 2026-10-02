import { useMemo } from 'react';
import { projects } from '../lib/projects';

export default function useProjects(selectedCategories: string[]) {
    const filteredProjects = useMemo(() => {
        const selectedCategoriesSet = new Set(selectedCategories);
        return projects.filter((project) => (
            project.categories.some((category) => selectedCategoriesSet.has(category))
        ));
    }, [selectedCategories]);

    return { projects: filteredProjects };
}
