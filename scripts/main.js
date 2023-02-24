import { getFish } from '/scripts/database.js'
import { FishList } from '/scripts/FishList.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
};



const parentHTMLElement = document.querySelector(".FishList")

parentHTMLElement.innerHTML = FishList()