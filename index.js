function GetPortfolio()
{
    let request = new XMLHttpRequest();
    request.open("GET",
                 "https://theterribles.github.io/Portfolio-page/resources/sources.json",
                 false);
    request.send(null);
    return JSON.parse(request.responseText);
}


const fullPortfolio = GetPortfolio();

document.getElementById("gamePortfolio").style.display = 'none';
document.getElementById("blenderPortfolio").style.display = 'none';
document.getElementById("avatarsPortfolio").style.display = 'none';

function DisplayElement(elementId, display)
{


    if (display)
    {
        if (elementId !== "gamePortfolio") document.getElementById("gamePortfolio").style.display = 'none';
        if (elementId !== "blenderPortfolio") document.getElementById("blenderPortfolio").style.display = 'none';
        if (elementId !== "avatarsPortfolio") document.getElementById("avatarsPortfolio").style.display = 'none';

        document.getElementById(elementId).style.display = 'block';
    }
    else
    {
        document.getElementById(elementId).style.display = 'none';
    }
}

function GetIsDisplaying(elementId)
{
    return document.getElementById(elementId).style.display !== 'none';
}

console.log(fullPortfolio);

for (var i = 0; i< fullPortfolio.gamePortfolio.length; i++)
{
    var projectBlock = document.createElement('div');
    projectBlock.style.backgroundColor = 'rgb(55,0,86)';

    var title = document.createElement('h2');
    title.innerHTML = "" + fullPortfolio.gamePortfolio[i].tle;

    var description = document.createElement('p');
    description.innerHTML = fullPortfolio.gamePortfolio[i].desc;

    var pic = document.createElement('img');
    pic.src = fullPortfolio.gamePortfolio[i].img;

    var redirect = document.createElement('a');
    var linkText = document.createElement('p');
    linkText.innerHTML = "Página";
    linkText.style.color = "#a643e1";
    redirect.append(linkText);
    redirect.title = "Check it out!"
    redirect.href = fullPortfolio.gamePortfolio[i].src;
    redirect.target = "_blank";

    projectBlock.append(title);
    projectBlock.append(pic);
    projectBlock.append(description);
    projectBlock.append(redirect);

    document.getElementById("gamePortfolio").append(projectBlock);

    console.log("Logged entrance " + (i +1) + ": " + title.innerHTML)
}


