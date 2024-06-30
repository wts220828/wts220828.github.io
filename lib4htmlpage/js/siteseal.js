var connect_protocol=window.location.protocol;
//Only Give trust on https
var connect_domain=window.location.hostname;
//Get Installed Host Domain
const accepted_domain = ["wts220828.github.io","localhost"];
connect_key=document.getElementById('1LBY_siteseal_key').value
if (connect_protocol==="https:"){
    document.write("<input type=\"hidden\" id=\"custId\" name=\"custId\" value=\"3487\">");
    alert("Connect through https");
}else{
    alert("Connect through http")
}

