
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

window.onload = function loadInfo() {
    getJSON("https://cdn.rawgit.com/roadsidemultimedia/jsonDump/a9a92a7ea14c444e615bf9fc9c2b99da52a1cc08/infoCard4.json").then(function(data) {
      document.getElementById("data__name").textContent = data.name;
      document.getElementById("data__id").textContent = data.id;
      document.getElementById("data__htype").textContent = data.htype;
      document.getElementById("data__cms").textContent = data.cms;
      document.getElementById("data__ip").textContent = data.ip;
      document.getElementById("data__resolving").textContent = data.resolving;
      document.getElementById("data__size").textContent = data.size;
      document.getElementById("data__name_server").textContent = data.name_server;
      document.getElementById("data__whois_admin_contact").textContent = data.whois_admin_contact;
  }, function(status) {
    alert('Something is amiss.');
  });
};

