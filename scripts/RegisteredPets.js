import { getPets } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (theClick)=>{
        const whatWasClickedOn=theClick.target
        if(whatWasClickedOn.dataset.type==="pet"){
        window.alert(`This pet is assigned to ${whatWasClickedOn.dataset.walkerforeignkey}`)
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerforeignkey="${pet.walkerId}"
                        data-type="pet">
        ${pet.name}
    </li>`
    }

    petHTML += "</ul>"

    return petHTML
}

