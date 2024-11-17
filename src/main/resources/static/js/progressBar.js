function getProgressBar() {
    var temp = new ProgressBar.Circle(progressBarElement, {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    progressBar.animate(1, {
        duration: 5000
    });

    return temp;
}