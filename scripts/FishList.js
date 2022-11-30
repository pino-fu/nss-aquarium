import { getFish } from './database.js'

export const FishList = () => {
    
    const fishes = getFish()

    
    let htmlString = '<article class="fishList">'

    
    for (const fish of fishes) {

        
        htmlString += `<section class="fishCard">
            <div><img  class="fishImage" src="${fish.image}" /></div>
          <div class="fishSpecs">  <div class="fish__name">${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Size: ${fish.length}</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div></div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}