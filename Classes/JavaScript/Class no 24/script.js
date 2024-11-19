// class Laptops{
//     constructor(company, color,touchScreen, ram){
//         this.company = company
//         this.color = color
//         this.touchScreen = touchScreen
//         this.ram = ram
//     }
// // }
// var listOfLaptops = new Laptops("dell", "green",true,16)
// console.log(listOfLaptops)



var listOfLaptops = {
    company: "dell",
    color: "green",
    RAM: "16GB"
}

for(let item in listOfLaptops){
console.log(item)
}




// for(i=0;i < Object.keys(listOfLaptops).length;i++){
//     console.log(listOfLaptops[keys])
// }











