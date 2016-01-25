/*global window, Promise*/
/*jslint browser: true, white: true*/
(function () {
  'use strict';
  // thanks to Mathias Bynens:
  // https://mathiasbynens.be/notes/xhr-responsetype-json
  var getJSON = function (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        var status = xhr.status;
        if (status === 200) {
          resolve(xhr.response);
        } else {
          reject(status);
        }
      });
      xhr.send();
    });
  };

  var loadInfo = function (json, rootElement) {
    var oldElem = document.getElementById(rootElement);
    oldElem.innerHTML = "<div class='timer-loader'>Loading ...</div>";
    getJSON(json).then(function (data) {
      oldElem.innerHTML = "";
      Object.keys(data).map(function (i) {
        var newStuff = document.createDocumentFragment();
        var newCard = document.createElement("div");
        newCard.className = "card";
        newStuff.appendChild(newCard);
        oldElem.appendChild(newStuff);
        var newTitle = document.createElement('h2');
        newTitle.innerHTML = i + "<br/>";
        while (newTitle.firstChild) {
          newCard.appendChild(newTitle.firstChild);
        }
        Object.keys(data[i]).map(function (j) {
          var newInfo = document.createElement('span');
          newInfo.innerHTML = j + ": " + "<br/><span>" + data[i][j] + "</span>" + "<br/>";
          while (newInfo.firstChild) {
            newCard.appendChild(newInfo.firstChild);
          }
        });
      });
    });
  };

  var init = function () {
    loadInfo("https://rsmm-domains.firebaseio.com/lagiacrus/domains.json", "lagiacrus__placeholder");
    loadInfo("https://rsmm-domains.firebaseio.com/shelbyville/domains.json", "shelbyville__placeholder");
    loadInfo("https://rsmm-domains.firebaseio.com/springfield/domains.json", "springfield__placeholder");
  };
  window.addEventListener('load', function () {
    init();
  });

}());
