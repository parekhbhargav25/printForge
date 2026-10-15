import Form from "next/form"
import { getAllModels } from "@/app/lib/models"
import type { Model } from "@/app/types"
import ModelCard from "@/app/components/ModelCard"


type ModelsPageProps = {
  searchParams: Promise<{ query?: string }>
}

export default async function ModelsPage({searchParams} :ModelsPageProps) {
  const {query} = await searchParams
  // console.log("query is ",query)
  const models = await getAllModels()
  // console.log(models)

  const filteredmodels = query?
                          models.filter((model)=> (model.name.toLowerCase()).includes(query.toLowerCase()) || (model.description.toLowerCase()).includes(query.toLowerCase())) 
                          :models
  console.log(filteredmodels)

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">All Models</h1>
       <div className="flex justify-end p-4">
        <Form action="/3d-models"> 
        <input
          className="w-64 rounded-lg border border-gray-300 bg-amber-50 px-4 py-2 text-gray-800 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Enter your search..."
        />
        <button
          type="submit"
          className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
        >
          Search
        </button>

        {query && (
          <a
            href="/3d-models"
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Clear
          </a>
        )}
        </Form>
      </div>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="3D Models Gallery"
      >
        {filteredmodels.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  )
}
