function showInfo(monument) {
    var info = document.getElementById(monument + "-info");
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
    } else {
        info.classList.add("hidden");
    }
}