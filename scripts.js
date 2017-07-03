
$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');
	$('#search').click(searchCountries);
	function searchCountries() {
 		var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
	function showCountriesList(resp) {
  		countriesList.empty();
  		resp.forEach(function(item){
   		  $('<li class="name">').html('<h3>' + item.name + '</h3>').appendTo(countriesList);
        $('<li class="info">').text('Background Information:').appendTo(countriesList);
   	    $('<li>').html('<span>Capital: </span>' + item.capital).appendTo(countriesList);
        $('<li>').html('<span>Land area: </span>' + item.area).appendTo(countriesList);
        $('<li>').html('<span>Population: </span>' + item.population).appendTo(countriesList);
        $('<li>').html('<span>Native Name: </span>' + item.nativeName).appendTo(countriesList);
        $('<li>').html('<span>Region: </span>' + item.region).appendTo(countriesList);
        //mam tutaj problem - bo regional bloc wydaje sie nie byc znajdowany mimo ze w API wystepuje???
        //$('<li>').html('<span>Regional Bloc: </span>' + item.regionalbloc).appendTo(countriesList);
        $('<li>').html('<span>Calling Code: </span>' + "+" + item.callingCodes[0]).appendTo(countriesList);
        $('<li>').html('<span>Currency: </span>' + item.currencies[0]).appendTo(countriesList);
        $('<li>').html('<span>Language: </span>' + item.languages[0]).appendTo(countriesList);
        $('<li>').html('<span>Alpha 3 Code: </span>' + item.alpha3Code).appendTo(countriesList);
        $('<li>').html('<span>Timezone: </span>' + item.timezones).appendTo(countriesList);
});
}
})