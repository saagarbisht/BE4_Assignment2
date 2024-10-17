import {Schema,model} from "mongoose" 

const recipeSchema =  new Schema({
  title : {
    type : String,
    required : true
  },
  author : {
    type : String,
    required : true
  },
  difficulty : {
    type : [String],
    required : true,
    enum : ['Easy', 'Intermediate', 'Difficult']
  },
  prepTime : {
    type : Number,
    required : true
  },
  cookTime : {
    type : Number,
    required : true
  },
  ingredients : {
    type : [String],
    required : true
  },
  instructions : {
    type : [String],
    required : true
  },
  imageUrl : {
    type : String,
    required : true
  },
},{timestamps : true})

export const Recipe = model("Recipe",recipeSchema)

