let frcontr = document.getElementById("code")
let tocontr= document.getElementById("code1")
let drp = document.querySelectorAll("select")
let btn = document.getElementById("conv")
let frm = document.getElementById("frm")
let to = document.getElementById("to")
let ans = document.getElementById("ans")
let input = document.getElementById("input")
let img1 = document.getElementById("img")
let img2 = document.getElementById("img2")
let bck = document.getElementById("back")
let rate = document.getElementById("rate")
let amt = document.getElementById("amt")
let response;
let data;
let from;
for (let sel of drp) {
    for (let i in countryList) {
        let newop = document.createElement('option')
        newop.innerText = i
        newop.id = "nop";
        newop.value = i
        sel.appendChild(newop)
        if (i === 'USD') {
            tocontr.value = i
        }
        if (i === 'INR') {
            frcontr.value = i
        }
    }
    sel.addEventListener("change", async (eve) => {
        upflag(eve.target)
    })
}

let upflag = () => {
    let frc = countryList[frcontr.value]
    let toc = countryList[tocontr.value]
    let frsrc = `https://flagsapi.com/${frc}/flat/64.png`
    let tosrc = `https://flagsapi.com/${toc}/flat/64.png`
    img1.src = frsrc
    img2.src = tosrc
}


async function fun() {
    let api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    response = await fetch(api)
    data = await response.json()
}

btn.addEventListener("click", async () => {
    frm.style.display = "none";
    to.style.display = "none";
    btn.style.display = "none";
    input.style.display = "none";
    from = frcontr.value.toLowerCase();
    let t = tocontr.value.toLowerCase();
    await fun()
    if (amt.value === "") {
        console.error("NO INPUT IS GIVEN");
        ans.innerText = "ERROR"
    }
    else {
        ans.innerText = `${amt.value} ${frcontr.value} = ${(data[from][t] * amt.value).toFixed(5)} ${tocontr.value}`;
        rate.innerText = `CONVERSION RATE\n${data[from][t]}`;
        rate.style.display = "flex"
    }
    ans.style.display = "block";
    bck.style.display = "block"
})
bck.addEventListener("click", () => {
    frm.style.display = "block";
    to.style.display = "block";
    btn.style.display = "block";
    input.style.display = "block";
    ans.style.display = "none";
    bck.style.display = "none"
    rate.style.display = "none"
})
