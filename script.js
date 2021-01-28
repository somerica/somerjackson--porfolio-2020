function portfolio(button) {
    var i;
    var x = document.getElementsByClassName("nav-link");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
    onclick="this.parentElement.style.display='none "
  }