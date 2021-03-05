// Variables
const age = document.querySelector("#age")
const days = document.querySelector("#days")
const page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)

// Gives the document a title
function giveTitle(name) {
    document.getElementsByTagName("title")[0].innerHTML = name;
}

window.onload = function () {
    // Checks if age or days are interacted with and activates changeVal()
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
    // Code for cabins
    if (page === "cabins.php") {
        const container2 = document.getElementById("container2")
        document.querySelectorAll(".cabin").forEach(function (item) {
            item.addEventListener("click", function () {
                this.parentElement.style.display = "none"
                container2.style.display = "block"
                let cabin = capitalizeFirstLetter(this.id)
                    let xhttp = new XMLHttpRequest()
                    xhttp.onreadystatechange = function() {
                        if (this.readyState === 4 && this.status === 200) {
                            let cabinData = JSON.parse(this.responseText)[cabin]
                            document.getElementById("cabin").innerHTML = cabin
                            document.getElementById("beds").innerHTML = "Sengeplasser: " + cabinData["Sengeplasser"]
                            document.getElementById("standard").innerHTML = "Standard: " + cabinData["Standard"]
                            if (cabinData["Badstue"]) document.getElementById("sauna").innerHTML = "Badstue: Ja"
                            else document.getElementById("sauna").innerHTML = "Badstue: Nei"
                        }
                    };
                    xhttp.open("GET", "cabins.json", true)
                    xhttp.send()
            })
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
    if (age.value > 100) {
        age.value = 100
        alert("Du må være mellom 0 og 100 år!")
    }
    if (age.value < 0 && age.value !== "") {
        age.value = 0
        alert("Du må være mellom 0 og 100 år!")
    }
    if (age.value === "") ageInfo.innerHTML = ""
    else if (age.value <= 12) ageInfo.innerHTML = " (Barn)"
    else ageInfo.innerHTML = " (Voksen)"
    if (days.value > 7) {
        days.value = 7
        alert("Du kan bare bestille intill 7 dager!")
    }
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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}