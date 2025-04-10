//make array of all links
//look at js03, add array to li? (or look at project 3-2)
//add all li to the ul at end
//use array of links for length for the loop
//have the ul on each page, add the li, use beforeEnd

let siteMapLinks = ["index.html","about.html","projects.html","projects.html#chapter3","projects.html#chapter4","projects.html#chapter5","projects.html#chapter6",
    "projects.html#chapter7","projects.html#chapter8","projects.html#chapter9","projects.html#chapter10","projects.html#js-Chapter3","projects.html#js-Chapter4","misc.html","contact.html","changelog.html"];
let siteMapNames = ["index","about","projects","chapter 3","chapter 4","chapter 5","chapter 6",
    "chapter 7","chapter 8","chapter 9","chapter 10","js chapter 3","js chapter 4","misc","contact","changelog"];

window.addEventListener("load", addSiteMap);

function addSiteMap(){
    let map = "";

    for(var i = 0; i < siteMapLinks.length; i++){
        map += "<li><a href='"+siteMapLinks[i]+"'>"+siteMapNames[i]+"</a></li>";
    }

    document.getElementsByClassName("site-map")[0].innerHTML = map;
}