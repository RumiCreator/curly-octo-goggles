const rw = {
  "executeScript": function(params) {
    eval(params)
  },
  "getBodyFromSite": function(params) {
    function returnBody(body){
      return body;
    }
    
    fetch(params.URL,{mode:"cors"})
      .then((res) => res.text()
      .then((t) => returnBody(t)))
  },
  
}


return rw
