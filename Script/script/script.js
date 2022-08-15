//add dark navbar when scrolling//

const header = document.querySelector('.navbar');

window.onscroll = function()
{
    var top = window.scrollY;
    if(top >=100)
    {
        header.classList.add('navbarDark');
    }
    else
    {
        header.classList.remove('navbarDark');
    }
}

//Detect if user is dark mode 

const isDarkMode = () =>
{
return window.matchMedia('(prefers-color-scheme: dark').matches;
}   