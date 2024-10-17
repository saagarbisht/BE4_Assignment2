import {Router} from "express"
import {postRecipe,allRecipe,getRecipe,filterRecipe,updateRecipe,deleteRecipe} from "../controller/recipes.contoller.js"

const route = Router()

route.post("/",postRecipe)
route.get("/all",allRecipe)
route.get("/recipe",getRecipe)
route.get("/filter",filterRecipe)
route.put("/update",updateRecipe)
route.delete("/delete/:recipeId",deleteRecipe)


export{route}