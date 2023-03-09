// document.getElementById("count-el").innerText = 5

// basic arithemetic test
// let myAge = 1
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// draft from me on how to run the people counter project

// let count = document.getElementById("count-el").innerText 
//     count = count + 1
//     console.log(count)

let startVal = 0

function increment() {
    
    // startVal = startVal + 1
    startVal += 1
    document.getElementById("count-el").innerText = startVal
    // console.log(startVal)
    // console.log("The button was clicked") 
}


let saveEl = document.getElementById("save-el")

function save() {
    
    let newCount = document.getElementById("count-el").textContent
    document.getElementById("count-el").textContent = 0
    startVal = 0
    let saveVal = newCount + " - " 
    // saveEl.innerText += saveVal   apparently innerText won't let the extra space show, i still don't really understand the reason why YET

    // using Node.textContent to make the spacing of the - sign to show
    
    saveEl.textContent += saveVal 
}
