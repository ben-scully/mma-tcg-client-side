
module.exports= (url,data,callback) =>{
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        callback(data)
      } else {
        // We reached our target server, but it returned an error
        callback(request.status)
      }
    };
    request.send(JSON.stringify(data));
}
