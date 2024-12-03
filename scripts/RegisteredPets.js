import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (theClick)=>{
        const whatWasClickedOn=theClick.target
        const walkerId =whatWasClickedOn.dataset.walkerforeignkey

        const Walkers = getWalkers()
        for (const walker of Walkers){
            if (walker.id === parseInt(walkerId)){
                window.alert(`This pet is assigned to ${walker.name}`)
            }
        }
        
        //if(whatWasClickedOn.dataset.type==="pet"){
        //${whatWasClickedOn.dataset.walkerForeignKey}`)
        }

    
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerForeignKey="${pet.walkerId}"
                        data-type="pet">
        ${pet.name}
    </li>`
    }

    petHTML += "</ul>"

    return petHTML
}

