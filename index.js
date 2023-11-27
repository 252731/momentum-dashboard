const imageAuthor = document.getElementById("image-author")





async function myBackground() {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=galaxy")
    const data = await res.json()
    console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    imageAuthor.textContent = `By: ${data.user.name}`

}
myBackground()
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1560740583-0664e57560e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY0Nzc5MzR8&ixlib=rb-4.0.3&q=85")`
        document.getElementById("author").textContent = `By:Guillermo Ferla`
    })

async function myBitcoins() {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    const data = await res.json()
    if (!res.ok) {
        throw Error("Something wrong")
    }
    console.log(data)
    document.getElementById("crypto-dogecoin").innerHTML = `<img src = ${data.image.small}/> <span>${data.name} </span>`
    document.getElementById("dogecoin").innerHTML += `
    <p>🎯:$${data.market_data.current_price.usd}</p>
    <p>👆:$${data.market_data.high_24h.usd}</p>
    <p>👇:$${data.market_data.low_24h.usd}</p>
    `
    setInterval(function () {
        const date = new Date()
        const time = date.toLocaleTimeString("en-us", { timeStyle: "short" })
        document.getElementById("time").innerHTML = time

    }, 1000)

}
myBitcoins()
    .catch(err => { document.getElementById("dogecoin").textContent = "No data available currently" })


 
  navigator.geolocation.getCurrentPosition(async position=>{
    const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res=> {
        if (!res.ok) {
            throw Error("Weather data not available")
        } 
        return res.json()
      })
      .then(data=> {
        console.log(data)
        const weatherIconUrl=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather-container").innerHTML=`<img src="${weatherIconUrl}" 
        <p id="temp">${Math.round(data.main.temp)}º</p>
        <p class="city">${data.name}</p>`

        console.log(data)
        
      })
    
     
    })
   .catch(err => console.error(err))