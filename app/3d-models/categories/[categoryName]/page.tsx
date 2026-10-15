import type { CategoryDetailPageProps } from "@/app/types"
import {getAllCategories, getCategoryBySlug} from "@/app/lib/categories"


export default async function ByCategory({params}:CategoryDetailPageProps) {
    const{categoryName} = await params
    const categoryObj = await getCategoryBySlug(categoryName)


    return (
        <h1> {categoryObj.displayName}</h1>
    )

}