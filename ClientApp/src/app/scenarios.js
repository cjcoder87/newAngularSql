function getScenarios() {
    var xmlHttpRequest = new XMLHttpRequest();
  
    xmlHttpRequest.onreadystatechange = function() {
        if ( xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
            document.getElementById("scenarios").innerHTML = xmlHttpRequest.responseText;
        }
    };
    xmlHttpRequest.open('GET', 'http://localhost:8080/api/scenarios', true);
    xmlHttpRequest.send();
  }