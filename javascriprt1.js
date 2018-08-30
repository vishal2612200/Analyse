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
    

    for(var i=0;i<params.length;++i){
        inputs[i]=unescape(params["input"+(i+1)]);
    }
  
