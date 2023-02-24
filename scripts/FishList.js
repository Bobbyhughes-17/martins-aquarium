// Import the function that returns a copy of the fish array
import { getFish } from "/scripts/database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="getFish">'

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString +=  `
            <div><img  class="fish__image image--card" src="${singleFish.image}" /></div>
            <div class="fish__name">Name: ${singleFish.name}</div>
            <div class="fish__species">Species: ${singleFish.species}</div>
            <div class="fish__length">Length: ${singleFish.length}</div>
            <div class="fish__location">Location: ${singleFish.location}</div>
            <div class="fish__diet">Diet: ${singleFish.food}</div>
        </section>
`
    }
    htmlString += `</article`

    return htmlString
}