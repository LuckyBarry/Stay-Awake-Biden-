/* Apply basic styles to all boxes */
.box {
    background - color: darkblue;
    border: 1px solid white;
    box - sizing: border - box;
    display: flex;
    justify - content: center;
    align - items: center;
    color: white;
    padding: 10px; /* Add padding for spacing */
}

/* Set the height of the entire page to 100% */
html, body {
    height: 100 %;
    margin: 0;
}

/* Top box with 20% height and full width */
.chapterOneBox {
    width: 100 %;
    height: 20 %;
}

/* Bottom box with 10% height and full width */
.bottomBox {
    width: 100 %;
    height: 10 %;
}

/* Container for the middle boxes */
.middleContainer {
    width: 100 %;
    height: 70 %; /* Takes up the remaining height */
    display: flex;
}

/* Left column with 15% width and full height of middle container */
.midLeftCol {
    width: 15 %;
    height: 100 %;
}

/* Center column with 70% width and full height of middle container */
.centreCentreBox {
    width: 70 %;
    height: 100 %;
}

/* Right column with 15% width and full height of middle container */
.midRightCol {
    width: 15 %;
    height: 100 %;
}
