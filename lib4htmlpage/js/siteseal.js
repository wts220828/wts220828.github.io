var connect_protocol=window.location.protocol;
//Only Give trust on https
var connect_domain=window.location.hostname;
//Get Host Domain
var myHeading = document.querySelector("h1");

if (connect_protocol==="https:"){
    alert("Connect through https"+window.location.pathname);
    myHeading.textContent = "Connect through https"+window.location.pathname;
}else{
    alert("Connect through http")
}

