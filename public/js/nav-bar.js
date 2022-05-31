let navHtml = `
    <div class="w3-top">
        <div class="w3-bar w3-white w3-padding w3-card">
            <span class="w3-mobile w3-bar-item w3-border-white">  <img src="img/bob-ross-navBar.png" class="img-fluid"></span>
            <a href="index.html"
                class="w3-mobile w3-bar-item w3-button w3-hover-none w3-bottombar w3-border-white w3-hover-border-black"><strong>HOME<strong></a>
            <a href="bio.html"
                class="w3-mobile w3-bar-item w3-button w3-hover-none w3-bottombar w3-border-white w3-hover-border-black"><strong>BIO<strong></a>
            <a href="all-paintings.html"
                class="w3-mobile w3-bar-item w3-button w3-hover-none w3-bottombar w3-border-white w3-hover-border-black"><strong>PAINTINGS<strong></a>
            <a href="about.html"
                class="w3-mobile w3-bar-item w3-button w3-hover-none w3-bottombar w3-border-white w3-hover-border-black"><strong>ABOUT<strong></a>
            

            <div
                class="w3-right w3-dropdown-hover w3-mobile w3-hover-none w3-bottombar w3-border-white w3-hover-border-black">
                <a href=" " class="w3-button">SEASONS<i class="fa fa-caret-down"></i></a>
                <div id="dropDown" class="w3-dropdown-content w3-bar-block" style="max-height:250px; overflow:auto">`;

                for (let i = 1; i <= 31; i++) {
    navHtml += `<a href="individual-season.html?season=` + i + `" class="w3-bar-item w3-button w3-mobile">Season ` + i + `</a>`
}

navHtml += `</div></div></div></div>`


document.getElementById("navBar").innerHTML = navHtml