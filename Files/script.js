class Flower {
    constructor(flower,color,bloomSeason,isFragrant){
    this.flower =flower;
    this.color = color;
    this.bloomSeason = bloomSeason;
    this.isFragrant = isFragrant;

}
bloom(){
    console.log("The " + this.flower+" blooms in "+ this.bloomSeason);
}
fragrance(){
   if(true){
    console.log("The "+this.flower+" is Fragrant")
   } else {
    console.log("The "+this.flower+" is not Fragrant")
   }
}
colorDisplay(){
    console.log("The "+this.flower+" has a beautiful "+this.color+" color")
}
}
const flower1 = new Flower("Tulip","Yellow","Spring",true)
flower1.bloom();
flower1.fragrance();
flower1.colorDisplay();