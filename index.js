
fetch('https://api.sampleapis.com/wines/reds')
.then(response => response.json())
.then(data => document.getElementById("wine").innerHTML = (data[0].wine));
fetch('https://api.sampleapis.com/wines/reds')
.then(response => response.json())
.then(data => document.getElementById("rating_average").innerHTML = (data[0].rating.average));
fetch('https://api.sampleapis.com/wines/reds')
.then(response => response.json())
.then(data => document.getElementById("location").innerHTML = (data[0].location));
fetch('https://api.sampleapis.com/wines/reds')
.then(response => response.json())
.then(data => document.getElementById("image").innerHTML = (data[0].image));


