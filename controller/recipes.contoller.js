import {Recipe} from "../models/recipe.models.js"

export async function postRecipe(req,res){
  const recipeData = req.body;
  if(!recipeData){
    return res.status(400).send("please send the valid data to upload")
  }
  try {
    const newRecipe = await new Recipe(recipeData)
    newRecipe.save()
    .then(() => {
      return res.status(200).json({"msg" : "data uploaded"})
    })
    .catch(() => {
      return res.status(400).json({"msg" : "unable to upload please check the data and try again"})
    })    
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to upload data try again")
  }
}

export async function allRecipe(req,res){
  try {
    const recipe = await Recipe.find()
    return res.status(200).json({"All Recipes" : recipe})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to get the data try again")
  }
}

export async function getRecipe(req,res){
  const detailBy = req.query
  if(!detailBy){
    return res.status(400).send("please enter the recipe detail in query params")
  }
  try {
    const recipe = await Recipe.findOne(detailBy)
    return res.status(200).json({"recipe" : recipe})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to get the data try again")
  }
}

export async function filterRecipe(req,res){
  const filterBy = req.query
  if(!filterBy){
    return res.status(400).send("please enter the filter details in query params")
  }
  try {
    const filteredRecipe = await Recipe.find(filterBy)
    if(!filteredRecipe){
      return res.status(400).send("unable to get the data please check the filter details and try again")
    }
    return res.status(200).json({"filtered recipes" : filteredRecipe})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to get the data try again")
  }

}

export async function updateRecipe(req,res){
  const detailBy = req.query
  const updatedDetails = req.body
  if(!detailBy && !updatedDetails){
    return res.status(400).send("please enter the recipe filter in query params and details in body")
  }
  try {
    const recipe = await Recipe.findOneAndUpdate(detailBy,updatedDetails,{new:true})
    return res.status(200).json({"new data" : recipe})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to update the data try again")
  }
}

export async function deleteRecipe(req,res){
  const recipeId = req.params.recipeId;
  if(!recipeId){
    return res.status(400).send("please enter valid recipe id")
  }
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)
    if(!deletedRecipe){
      return res.status(200).json({"msg" : "recipe not found"})
    }
    return res.status(200).json({"msg" : "recipe deleted successfully"})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to delete the data try again")
  }
}