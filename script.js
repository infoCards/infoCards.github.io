
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

window.onload = function loadInfo() {
    var data = getJSON("https://cdn.rawgit.com/roadsidemultimedia/jsonDump/d6691ff6747be9732eb56bf84858eb08f8e538d3/infoCard1.json");
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

