var temp = document.querySelector(".temp").textContent;
var ph = document.querySelector(".ph").textContent;


console.log(temp);
console.log(ph);

if (temp > 60) {

    document.getElementById("temp_status").className = "status status_crit";
}

if (ph < 6.6) {

    document.getElementById("ph_status").className = "status status_warn";
}


