// thanks to Mathias Bynens:
// https://mathiasbynens.be/notes/xhr-responsetype-json
var getJSON = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
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

function loadInfo(json, rootElement) {
    var oldElem = document.getElementById(rootElement);
    oldElem.innerHTML = "<div class='timer-loader'>Loading ...</div>";
    var oldElem = document.getElementById(rootElement);
    getJSON(json).then(function (data) {
        oldElem.innerHTML = "";
        for (var i in data) {
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
            for (var j in data[i]) {
                var newInfo = document.createElement('span');
                newInfo.innerHTML = j + ": " + data[i][j] + "<br/>";
                while (newInfo.firstChild) {
                    newCard.appendChild(newInfo.firstChild);
                }
            }
        }
    });
}

function init() {
    loadInfo("https://rsmm-domains.firebaseio.com/lagiacrus/domains.json", "lagiacrus__placeholder");
    loadInfo("https://rsmm-domains.firebaseio.com/shelbyville/domains.json", "shelbyville__placeholder");
    loadInfo("https://rsmm-domains.firebaseio.com/springfield/domains.json", "springfield__placeholder");
}
window.onload = init();

//
//
//
//
