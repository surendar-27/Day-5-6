let arr=[
  {
    name: "rajavel",
    age:22,
    city:"Gingee",
    salary:18000
  },,
  {
    name: "Ram",
    age: 29,
    city: "villupuram",
    salary: 38000
  },
  {
    name: "santhosh",
    age: 32,
    city: "Chennai",
    salary: 20000
  },
  {
    name:"Fathima",
    age:45,
    city:"Tindivanam",
    salary:34000
  },
  {
    name:"Remo",
    age:48,
    city:"villupuram",
    salary:48000
  }
]
display(arr);
function display(array){
  let tabledata="<tr>";
  let sino=1;
  array.forEach(function(person, index){
    let currentrow=`<tr>
    <td>${sino}</td>
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td>${person.city}</td>
    <td>${person.salary}</td>
    <td><button onclick="delet(${index})">delete</button>
    </td>
    </tr>`;
    tabledata+=currentrow;
    sino++;
  })
  document.getElementsByClassName('tdata')[0].innerHTML =tabledata;
}

function search(){
  let searc=document.getElementById("search").value;
  let newdata=arr.filter(function(person){
    return person.city.toUpperCase().indexOf(searc.toUpperCase())!=-1||person.name.toUpperCase().indexOf(searc.toUpperCase())!=-1;})
  display(newdata);
}
function delet(index){
  arr.splice(index,1);
  display(arr);
}