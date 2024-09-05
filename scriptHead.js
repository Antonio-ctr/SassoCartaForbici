document.title = "Sasso, carta, forbici!";

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Ti aspetta il prossimo turno!";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});