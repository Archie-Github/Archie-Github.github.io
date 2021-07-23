


function goto_page(filename) {
	//window.location.href = URL;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}


function open_game(URL) {
	//window.location.href = URL;
	//document.getElementById("game_div").innerHTML = "<iframe src="https://html5.gamedistribution.com/rvvASMiM/6e8bacb1a63a4565bd29bd5bfc3ebceb/?gp=1%3Fgp%3D1&siteid=79&channelid=2&siteLocale=en-US&spilStorageId=38370380962&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5hZ2FtZS5jb20vIiwicGFyZW50RG9tYWluIjoiYWdhbWUuY29tIiwidG9wRG9tYWluIjoiYWdhbWUuY29tIiwiaGFzSW1wcmVzc2lvbiI6dHJ1ZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNC4wIn0%253D";
	var myWindow = window.open(URL, "", "width=1080,height=580,left=300,top=200");
}



