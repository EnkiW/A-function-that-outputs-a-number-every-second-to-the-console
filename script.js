function Second(startValue, endValue) {
    console.log(startValue);
    if (startValue < endValue) {
        setTimeout(function() {
            Second(startValue + 1, endValue);
        }, 1000);
    }
}

