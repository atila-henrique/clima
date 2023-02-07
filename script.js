
let key = "cebcd482eda57fa9a6714c1c2ba91885"

//Função que é executada no clique do botão de pesquisa
function execute(){
    let cityName = document.querySelector('.inputCity').value
    if(cityName.trim() == ""){
        alert("Preencha o campo com o nome de sua cidade")
        clearInput();
        return;
    }
        searchCity(cityName)
}

function clearInput(){
    document.querySelector('.inputCity').value = ""
}

//async porque essa função irá acessar um servidor
async function searchCity(city){
    // await é para esperar a resposta do servidor
    //fetch é para acessar o servidor
    ///.then serve para pegar a resposta do servidor 

    let data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&lang=pt_br" + "&units=metric"
    ).then(response => response.json())
    
    if(data.name === undefined){
        alert("Ocorreu algum erro ao buscar o cidade, tente novamente xD")
        clearInput();
        return;
    }
    updateDisplay(data)
}
//Função para atualizar nosso display com as informações da cidade
function updateDisplay(data){
    console.log(data)

    let city = document.querySelector(".city")
    let temp = document.querySelector(".temp")
    let description = document.querySelector(".description")

    city.innerHTML = "Tempo em " + data.name + "!"
    temp.innerHTML = Math.floor(data.main.temp) + "°C"
    description.innerHTML = data.weather[0].description
    clearInput()
}