const Recipes = require('../models/Recipe');
const DietType = require('../models/dietType');
const { getRecipesFromApi, getRecipeDetail,getDataApi} = require('../helpers/recipeUtils.js')



const buscarPorNombre = async(name)=>{
  let bd = await Recipes.find().populate('dietTypes');
  let api = await getRecipesFromApi();
  if (name) {
    bd = bd.filter((recipe) =>
      recipe.name.toLowerCase().includes(name.toLowerCase())
    );
    api = api.filter((recipe) =>
      recipe.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  return [...bd, ...api];

}



const buscarPorId = async (id)=>{
  let info;

    const respBD = await   Recipes.findById(id);
    if (respBD) {
      info = respBD;
    } else {
      info =  await getRecipeDetail(id)

    }

    !info? info="No existe ninguna receta con ese id." : null


    return info;
 
}



const obtainDiets = async()=>{
    
  const apiData = await getDataApi();

  dietsRaw = apiData.map(el=> el.diets)

  diets = dietsRaw.reduce((acc,el)=>Array.from(new Set([...acc,...el])),[])

  diets = diets.map(e=> e =  e[0].toUpperCase() + e.substring(1)) 


  diets.forEach(async (diet) => {
    const existingDiet = await DietType.findOne({ name: diet });
    if (existingDiet) return;

    const dietType = new DietType({ name: diet });
    await dietType.save();
  });

  const allDiets = await DietType.find()

  return allDiets;

}




const spawnRecipe = async(body) => {
  try {
   
    const dietTypes = body.dietTypes;

    const dietTypeDocs = await DietType.find({ _id: { $in: dietTypes } });
    const dietTypeIds = dietTypeDocs.map(dietType => dietType._id);
  
    const recipe = new Recipes({
      name: body.name,
      description: body.description,
      imgUrl:body.imgUrl,
      stepByStep:body.stepByStep,
      healthScore:body.healthScore,
      resumenDelPlato:body.resumenDelPlato,
      dietTypes: dietTypeIds,
    });
    await recipe.save();
    
    return recipe;


  } catch (error) {

    if (error.message.includes('duplicada')) {
        const error = new Error('Ya existe esta receta');
        error.status= 406;
        throw error
    } else{
        throw error
    }
  }
}








module.exports = {
  buscarPorNombre,
  buscarPorId,
  spawnRecipe,
  obtainDiets,
}