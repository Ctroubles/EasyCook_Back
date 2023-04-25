const { Schema, model }= require("mongoose");

const componentSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
            unique:true
        },      
        resumenDelPlato:{
            type: String,
            required: true,
        },        
        healthScore:{
            type: Number,
            required: true,
        },        
        stepByStep:{
            type: String,
            required: true,
        },        
        imgUrl:{
            type: String,
            required: true,
        },
        dietTypes: [{ type: Schema.Types.ObjectId, ref: "DietType" }],

    },
    {
        toJSON: {
            getters: true
        }
    },
);

const Recipe = model("Recipe", componentSchema)

module.exports= Recipe;