// JavaScript Document

const video = document.getElementById('video');

    function pauseVideo(event) {
        if (event.currentTime > video.duration - 0.5) {
            video.pause();
        }
    }

const expandAbout = document.getElementById("about-button");
const expandedAbout = document.getElementById("about-content");

expandAbout.addEventListener("click", () => {
	expandedAbout.classList.toggle("expanded");
});

const expandPrograms = document.getElementById("programs-button");
const expandedPrograms = document.getElementById("programs-content");

expandPrograms.addEventListener("click", () => {
	expandedPrograms.classList.toggle("expanded");
});

const expandProjects = document.getElementById("projects-button");
const expandedProjects = document.getElementById("projects-content");

expandProjects.addEventListener("click", () => {
	expandedProjects.classList.toggle("expanded");
});

const expandPortraits = document.getElementById("portraits-button");
const expandedPortraits = document.getElementById("portraits-content");

expandPortraits.addEventListener("click", () => {
	expandedPortraits.classList.toggle("expanded");
});

const expandComic = document.getElementById("comic-button");
const expandedComic = document.getElementById("comic-content");

expandComic.addEventListener("click", () => {
	expandedComic.classList.toggle("expanded");
});


function detailView(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = "block";
}

function detailComic(imgs) {
	var expandComic = document.getElementById("expandedComic");
	expandComic.src = imgs.src;
	expandComic.parentElement.style.display = "block";
}