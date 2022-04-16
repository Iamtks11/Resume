var projectsSection=document.getElementById("projects");
var projectsOffset=projectsSection.getBoundingClientRect();
var projectsY=projectsOffset.top;
var projectsLink = document.getElementById('projects-link');

function scrolly(Y)
{
    var countY=0;
    
    var interval = setInterval(function() {
        if(countY<=Y)
        {
            scrollBy(0, 100);
        }
        else{
            clearInterval(interval);
        }
        countY+=100;
    }, 30);
}

projectsLink.addEventListener("click", function(){
    scrolly(projectsY);
});

var contactY=document.getElementById('contact').getBoundingClientRect().top;
var contactLink=document.getElementById('contact-link');

contactLink.addEventListener("click", function(){
    scrolly(contactY);
})

//skill bar auto fill
var skillBars = document.querySelectorAll('.empty-box div');
console.log(skillBars);
var skillSectionY=document.getElementById('skills-box').getBoundingClientRect().top;
window.addEventListener('scroll', fillBars);
var animDone=false;
function fillBars()
{
    console.log(window.pageYOffset);
    var vh=document.documentElement.clientHeight;
    if(skillSectionY-vh<=window.pageYOffset)
    {
        for(var i=0;i<skillBars.length;i++)
        {
            fillBar(skillBars[i]);
        }
    }
}

function fillBar(bar)
{
    let barY = bar.getBoundingClientRect().top;
    let isFilled = bar.getAttribute("is-Filled");
    if(barY<window.innerHeight && isFilled == "false")
    {
        let level = bar.getAttribute('level');
        bar.style.width = level+"%";
        bar.setAttribute("is-Filled", "true");
    }
    else if( barY>window.innerHeight)
    {
        bar.style.width = "0%";
        bar.setAttribute("is-Filled", "false");
    }
}

