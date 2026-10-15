import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryDetailPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryDetailPageProps) {

  const { categoryName } = await params
  const categoryname = await getCategoryBySlug(categoryName)
  const categories = await getModels({category: categoryName})
  console.log(categories)
  return (
    <ModelsGrid title={categoryname.displayName} models={categories}/>
  )
}