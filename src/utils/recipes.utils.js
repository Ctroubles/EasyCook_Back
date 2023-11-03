function capitalizeFirstLetter(string){
    if(typeof(string)!== 'string') return ''
    
    const String = string[0].toUpperCase() + string.substring(1)


    return String;
}

module.exports={
    capitalizeFirstLetter: capitalizeFirstLetter
}