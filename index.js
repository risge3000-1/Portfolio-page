function GetPortfolio()
{
    var request = new XMLHttpRequest();
    request.open("GET", "resources/sources.json", false);
    request.send(null);
    var parse = JSON.parse(request.responseText);
    alert(parse);
    return parse;
}




const fullPortfolio = GetPortfolio();



console.log(fullPortfolio);





//DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI-DP19KI