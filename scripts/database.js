
/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "https://www.pngmart.com/files/22/Magikarp-Pokemon-PNG-Pic.png",
            species: "Blue",
            name: "Bart",
            food: "crustaceans",
            length: 9,
            location:"Texas"
        },
        {
            image: "https://www.pngmart.com/files/22/Magikarp-Pokemon-PNG-Isolated-Pic.png",
            species: "Red",
            name: "Bernie",
            food: "philly cheesesteak",
            length: 500,
            location: "Outside in water"
        },
        {
            image: "https://www.pngfind.com/pngs/m/305-3051312_shiny-magikarp-pokemon-lets-go-shiny-magikarp-transparent.png",
            species: "Pink",
            name: "Boo",
            food: "hot dog",
            length: 6,
            location: "wvu"
        }
    ]

};

export const getFish = () => {

    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

