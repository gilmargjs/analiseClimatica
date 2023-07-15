//cahve da api
const apikey = 'KPlXEfU7IcuUAtyYaTUUuSwlji3HYTeA'

const cityFrom = document.querySelector('[data-js="change-location"]')
//url da api para buscar os dados da cidade
const getcityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${cityName}`

//função que busca os dados da cidade
const getCityData = async (cityName) => {
  try {
      const cityUrl = getcityUrl(cityName)
      const response = await fetch(cityUrl)

    if(!response.ok){
      throw new Error("dados não encontrado")
    }
    
    const [cityData] = await response.json()
    console.log(cityData)
}catch({ name, message }){
    alert(`${name}, ${message}`)
  }

}

getCityData('São Paulo')