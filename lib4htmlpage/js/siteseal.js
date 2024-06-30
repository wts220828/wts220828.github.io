var connect_protocol=window.location.protocol;
//Only Give trust on https
var connect_domain=window.location.hostname;
//Get Host Domain
if (connect_protocol==="https:"){
    alert("Connect through https"+window.location.pathname);
}else{
    alert("Connect through http")
}

