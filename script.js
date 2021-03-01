// Variables
const age = document.querySelector("#age")
const days = document.querySelector("#days")
const page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)

// Gives the document a title
function giveTitle(name){
    document.getElementsByTagName("title")[0].innerHTML = name;
}

// Checks if age or days are interacted with and activates changeVal()
window.onload = function () {
    if (page === "lift-pass.php") {
        document.querySelectorAll("input").forEach(function (item) {
            item.addEventListener("keyup", changeVal)
            item.addEventListener("change", changeVal)
            item.addEventListener("propertychange", changeVal)
            item.addEventListener("click", changeVal)
            item.addEventListener("input", changeVal)
            item.addEventListener("paste", changeVal)
        })
    }
}
// Takes the values from the inputs and calculates prices and shows information about it
function changeVal() {
    // Variables
    const age = document.querySelector("#age")
    const ageInfo = document.querySelector("#ageInfo")
    const days = document.querySelector("#days")
    const priceOut = document.querySelector("#priceOut")
    const discount = document.querySelector("#discount")
    // Checks if age and days are within the boundaries
    if (age.value > 100) age.value = 100
    if (age.value < 0 && age.value !== "") age.value = 0
    if (age.value === "") ageInfo.innerHTML = ""
    else if (age.value <= 12) ageInfo.innerHTML = " (Barn)"
    else ageInfo.innerHTML = " (Voksen)"
    if (days.value > 7) days.value = 7
    if (days.value < 0 && days.value !== "") days.value = 0
    // Calculates price
    if (age.value === "") var price = ""
    else if (age.value > 12) price = 200
    else price = 100
    if (price !== "" && days.value !== "") {
        let totalPrice = price * days.value
        if (days.value > 5){
            let oldTotalPrice = totalPrice
            totalPrice = 5 * price
            discount.innerHTML = Math.round((1- (totalPrice/oldTotalPrice))*100) + "% avslag!"
        }
        else discount.innerHTML = ""
        priceOut.innerHTML = totalPrice
    }
    else {
        priceOut.innerHTML = ""
        discount.innerHTML = ""
    }
}