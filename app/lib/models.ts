import modelsData from "../data/models.json"
import type { Model } from "@/app/types"

export async function getAllModels() {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.
  return modelsData
}

export async function getModelById (id:String) {
    const foundModel = modelsData.find((model) => model.id.toString() === id.toString())

    if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }

  return foundModel
}