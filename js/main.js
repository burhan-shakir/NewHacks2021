import Timer from "./Timer.js";

new Timer(
    document.querySelector(".timer")
);


document.querySelector(".blocked").addEventListener("click", (function() {
    return chrome.tabs.create({
        url: "../html/blockedWebsites.html"
})
}))

