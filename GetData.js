var resData = '';
var records=[];
var table = document.getElementsByClassName('table')[0];

var xhr = new XMLHttpRequest();
xhr.open('GET','./data.json',true);

xhr.send();
xhr.addEventListener('load',function(){
    resData =  JSON.parse(xhr.response);
    records = resData.data.withdraw_recodes;
    /*表头*/
    var tr = document.createElement('tr');
    var keys = Object.keys(records[0]);
    keys.forEach(function (v) {
        var td = document.createElement('td');
        td.innerHTML = v;
        tr.appendChild(td);
    });
    table.appendChild(tr);
    /*内容*/
    records.forEach(function (v) {
       var tr = document.createElement('tr');
       Object.values(v).forEach(function (t) {
          var td = document.createElement('td');
          td.innerHTML = t;
          tr.appendChild(td);
       });
       table.appendChild(tr);
    });
    console.log(records)
});
