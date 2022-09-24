var index = 0;
function changeColors() {
    var color = ["#ffb3ba","#ffd1d1", "#ffdfba", "#fffcb3", "#fafdc7", "#aeffa2", "#caf9c5", "#b9fffd", "#cffffe", "#f7cbff"];
    document.getElementsByTagName("body")[0].style.background = color[index++];
    if (index > color.length - 1)
        index = 0;
}