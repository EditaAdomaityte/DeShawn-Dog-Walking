import { getWalkers,getCities } from "./database.js"


const cities = getCities()

document.addEventListener(
   "click",
   (theClick)=>{
        const cityClickedOn=theClick.target
        const cityId=cityClickedOn.dataset.citynamekey

        const walkers = getWalkers()
        for (const walker of walkers)
        if(walker.cityid === parseInt(cityId)){
         window.alert(` ${walker.name} works in this city.`)
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
      // if (citiesHTML.includes(walker.city)){} else {} <- works but shows only one walker
      citiesHTML += `<li    data-cityNameKey=${city.id}
                            data-type="city"
                    >${city.name}</li>`
    

    citiesHTML += "</ul>"}

    return citiesHTML
}

