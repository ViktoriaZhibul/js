function createArray(){
    countryName = prompt("Введите название страны");
    capitalName = prompt("Введите столицу этой страны");
        while ((countryName === null)||(capitalName === null)||(countryName === "")||(capitalName === "")){
            confirm("Данные введены не корректно! Попробуйте ещe раз!");
            countryName = prompt("Введите название страны");
            capitalName = prompt("Введите столицу этой страны");
        }
    addСountry(countryName, capitalName);
} 

function infoCountry(){
    countryName = prompt("Какая страна Вас интересует?");
        while ((countryName === null)||(countryName === "")){
            confirm("Данные введены не корректно! Попробуйте ещe раз!");
            countryName = prompt("Какая страна Вас интересует?");
    }
    var result = getcountryInfo(countryName);
    console.log(result);
}

function allCountries(){
    console.log(listСountries());
}

function delCountries(){
    countryName = prompt("Какую страну Вы хотите удалить из списка?");
    while ((countryName === null)||(countryName === "")){
        confirm("Данные введены не корректно! Попробуйте ещe раз!");
        countryName = prompt("Какую страну Вы хотите удалить из списка?");
    }
        if (countryName in countries) {
            deleteСountry(countryName);
        } else {
            console.log(countryName + " не существует в списке")
        }
}