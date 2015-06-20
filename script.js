var oReq = new XMLHttpRequest();

window.onload = function loadInfo() {
    info = oReq.open("GET", "http://ix.io/iZK");
    data = JSON.parse(info);
    document.getElementById("data__name").textContent = data.name;
    document.getElementById("data__id").textContent = data.id;
    document.getElementById("data__htype").textContent = data.htype;
    document.getElementById("data__cms").textContent = data.cms;
    document.getElementById("data__ip").textContent = data.ip;
    document.getElementById("data__resolving").textContent = data.resolving;
    document.getElementById("data__size").textContent = data.size;
    document.getElementById("data__name_server").textContent = data.name_server;
    document.getElementById("data__whois_admin_contact").textContent = data.whois_admin_contact;
};
