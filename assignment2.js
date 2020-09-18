window.onload=function(){
  let iarr=[]
  if(localStorage.getItem("arr")==null){
    localStorage.setItem("arr", JSON.stringify(iarr));
  }
}
display();
function display(superarray=undefined){
  let tabledata="";
  let array;
  if(superarray==undefined){
    array=JSON.parse(localStorage.getItem("arr"));
  }
  else{
    array=superarray;
  }
  array.forEach(function(bus, index){
    let currentrow=`<tr>
    <td>${index+1}</td>
    <td>${bus.name}</td>
    <td>${bus.source}</td>
    <td>${bus.desti}</td>
    <td>${bus.number}</td>
    <td>${bus.capacity}</td>
    </tr>`;
    tabledata+=currentrow;
  })
  document.getElementsByClassName('tdata')[0].innerHTML =tabledata;
}

function add(event){
  let buses={};
  event.preventDefault();
  let name=document.getElementById("name").value;
  let source=document.getElementById("source").value;
  let destination=document.getElementById("dest").value;
  let number=document.getElementById("numb").value;
  let capacity=document.getElementById("capacity").value;
  buses.name=name;
  buses.source=source;
  buses.desti=destination;
  buses.number=Number(number);
  buses.capacity=Number(capacity);
  let array=JSON.parse(localStorage.getItem("arr"));
  array.push(buses);
  localStorage.setItem("arr", JSON.stringify(array));
  display();
  document.getElementById("name").value="";
  document.getElementById("source").value="";
  document.getElementById("dest").value="";
  document.getElementById("numb").value="";
  document.getElementById("capacity").value="";
}
function search(){
  let arr=JSON.parse(localStorage.getItem("arr"));
  let searc=document.getElementById("search").value;
  let newdata=arr.filter(function(bus){
    return bus.source.toUpperCase().indexOf(searc.toUpperCase())!=-1||bus.desti.toUpperCase().indexOf(searc.toUpperCase())!=-1;})
  display(newdata);
}