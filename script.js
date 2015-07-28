// thanks to Mathias Bynens:
// https://mathiasbynens.be/notes/xhr-responsetype-json
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
    getJSON("https://rsmm-domains.firebaseio.com/lagiacrus/domains/bradsammonsdds-com.json").then(function(data) {
      document.getElementById("data__name").textContent = data.name;
      document.getElementById("data__cms").textContent = data.cms;
      document.getElementById("data__ip").textContent = data.ip;
      //document.getElementById("data__last_checked").textContent = data.last_checked;
      document.getElementById("data__last_checked_hr").textContent = data.last_checked_hr;
      document.getElementById("data__resolving").textContent = data.resolving;
      document.getElementById("data__size").textContent = data.size;
  }, function(status) {
    alert('Something is amiss.');
  });
};

