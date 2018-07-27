

function getParams(){
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
    for (var i=0; i<pairs.length; i++){
    nameVal = pairs[i].split('=');
    params[nameVal[0]] = nameVal[1];
    }
    }
    return params;
}

    params = getParams();
    inputone = unescape(params["inputon"]);
    input2 = unescape(params["input2"]);
    input3 = unescape(params["input3"]);
    input4 = unescape(params["input4"]);
    input5 = unescape(params["input5"]);
    input6 = unescape(params["input6"]);
   var inputone = document.getElementById("lav").innerHTML= inputone;
    document.write("lastname = " + inputone + "<br>");
  //  document.write("age = " + age + "<br>");

   localStorage.getItem("input1");
    document.getElementById("lav").innerHTML = input1;





    

