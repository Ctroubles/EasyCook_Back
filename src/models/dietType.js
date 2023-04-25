const { Schema, model }= require("mongoose");

const componentSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
        },      
        dishes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    },
    {
        toJSON: {
            getters: true
        }
    },
);

const DietType = model("DietType", componentSchema)

module.exports= DietType;