// Import stylesheets
import './style.css';
      //Write Javascript code!
var sortButton = document.getElementById('sorting');
var loadMore = document.getElementById('loadMore');
var arrowIcon = document.getElementById('btn-arrow');
var sortValue = document.getElementById('sortvalue');
sortButton.addEventListener('click', sortData);
loadMore.addEventListener('click', addRow);
function sortData(){
  let sortValue = document.getElementById('sortvalue');
  let tableData = document.getElementById('dataTabel').getElementsByTagName('tbody').item(0);
  let rowData = tableData.getElementsByTagName('tr'); 
  if(sortValue.value == 'asc'){
    sortValue.value = 'desc';
    arrowIcon.innerHTML = "&#x2228;";
  }else if(sortValue.value == 'desc'){
    sortValue.value = 'asc';
    arrowIcon.innerHTML = "&#x2227;";
  }
  for(let i = 0; i < rowData.length - 1; i++) {
    for(let j = 0; j < rowData.length - (i + 1); j++) { 
      if(sortValue.value == 'asc'){
        if(parseFloat(rowData.item(j).getElementsByTagName('data').item(0).innerHTML) < parseFloat(rowData.item(j+1).getElementsByTagName('data').item(0).innerHTML)) {
          tableData.insertBefore(rowData.item(j+1),rowData.item(j));
        }
        else break;
      }
      else if(sortValue.value == 'desc'){
        if(parseFloat(rowData.item(j).getElementsByTagName('data').item(0).innerHTML) > parseFloat(rowData.item(j+1).getElementsByTagName('data').item(0).innerHTML)){
          tableData.insertBefore(rowData.item(j+1),rowData.item(j));
        }
        else break;
      }     
    }
  }
}
function addRow(){
    var tbodies = document.getElementsByTagName('tr')
    var tableContent = document.getElementById('dataTabel').tBodies[0]; 
    var newRow = tableContent.rows[0].cloneNode(true);  
    tableContent.appendChild(newRow);

}

var acctData = [
         {
             "acctNum": "AAA - 1234",
             "user": "Alice"
         },
         {
             "acctNum": "AAA - 5231",
             "user": "Bob"
         },
         {
             "acctNum": "AAA - 9921",
             "user": "Alice"
         },
         {
             "acctNum": "AAA - 8191",
             "user": "Alice"
         }
    ];
    var balance = {
     "AAA - 1234": 4593.22,
     "AAA - 9921": 0,
     "AAA - 5231": 232142.5,
     "AAA - 8191": 4344
    }
  var dataArray = [];
  var data = 
  (function mergeData(){
    
        var keys = Object.keys(balance);
        var newObj = {};
          for(let i =0; i<keys.length; i++){
            var keyfind = acctData.find((item) => item.acctNum === keys[i]);
            newObj = {
                "acctNum" : keys[i],
                "user" : acctData[i].user,
                "price" : balance[keyfind.acctNum]
            }
          dataArray.push(newObj);
         }  
         dataArray.sort(function(a, b){return b.price - a.price});
         return dataArray;
    }());
  var keyfind = [];
  console.log("filtered by Bob");
  keyfind = acctData.find((item) => item.user == "Bob");
  keyfind = keyfind
  console.log(keyfind);
  console.log("filtered by Alice");
  keyfind = acctData.filter((item) => item.user == "Alice");
  console.log(keyfind);
  console.log("sorted by acctNum");
  keyfind = acctData.sort(function(a, b){return b.acctNum - a.acctNum});
  console.log(keyfind);
  console.log("filtered by Alice; sorted by balance ascending");
  keyfind = data.filter((item) => item.user === "Alice");
  console.log(keyfind);