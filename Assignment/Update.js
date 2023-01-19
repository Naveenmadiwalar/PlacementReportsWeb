function reset(){
    location.reload();
}

// var data=`<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE items [
// <!ELEMENT items (iname,pdate,cost,ledger,qty,dqty,pstock,location,transfered,tqty,remark)>
// <!ELEMENT iname (#PCDATA)>
// <!ELEMENT pdate (#PCDATA)>
// <!ELEMENT cost (#PCDATA)>
// <!ELEMENT ledger (#PCDATA)>
// <!ELEMENT qty (#PCDATA)>
// <!ELEMENT dqty (#PCDATA)>
// <!ELEMENT pstock (#PCDATA)>
// <!ELEMENT location (#PCDATA)>
// <!ELEMENT transfered (#PCDATA)>
// <!ELEMENT tqty (#PCDATA)>
// <!ELEMENT remark (#PCDATA)>
// ]>

// <items>

// </items>`;

// var data1=`<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE items [
// <!ELEMENT items (iname,pdate,cost,ledger,qty,dqty,pstock,location,transfered,tqty,remark)>
// <!ELEMENT iname (#PCDATA)>
// <!ELEMENT pdate (#PCDATA)>
// <!ELEMENT cost (#PCDATA)>
// <!ELEMENT ledger (#PCDATA)>
// <!ELEMENT qty (#PCDATA)>
// <!ELEMENT dqty (#PCDATA)>
// <!ELEMENT pstock (#PCDATA)>
// <!ELEMENT location (#PCDATA)>
// <!ELEMENT transfered (#PCDATA)>
// <!ELEMENT tqty (#PCDATA)>
// <!ELEMENT remark (#PCDATA)>
// ]>`

function update(){

    var data = new Object();

  var tags = [
    "id",
    "name",
    "date",
    "cost",
    "ledger",
    "itemqty",
    "dqty",
    "pstock",
    "location",
    "transfer",
    "tqty",
    "remark",
  ];

  for (var x of tags) {
    let value = document.getElementById(`${x}`).value;
    if (value.length == 0) {
      alert(`${x} this field required to filled`);
      return 0;
    } else {
      data[`${x}`] = value;
    }
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      location.reload();
    //   console.log(this.responseText);
    }
  };

  xhttp.open("POST", "update.php");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));




    // let xmlDom = new DOMParser().parseFromString(data,"application/xml");
    // var items=xmlDom.querySelectorAll("items");
    
    // // ID
    // var child=xmlDom.createElement("iid");
    // child.innerHTML=document.getElementById("iid").value;
    // items[0].appendChild(child);

    // // name
    // xmlDom.createElement("iname");
    // child.innerHTML=document.getElementById("name").value;
    // items[0].appendChild(child);

    // // date
    // child=xmlDom.createElement("date");
    // child.innerHTML=document.getElementById("date").value;
    // items[0].appendChild(child);


    // // cost
    // child=xmlDom.createElement("cost");
    // child.innerHTML=document.getElementById("cost").value;
    // items[0].appendChild(child);

    // // ledger
    // child=xmlDom.createElement("ledger");
    // child.innerHTML=document.getElementById("ledger").value;
    // items[0].appendChild(child);

    // // itemqty
    // child=xmlDom.createElement("itemqty");
    // child.innerHTML=document.getElementById("itemqty").value;
    // items[0].appendChild(child);

    // // dqty
    // child=xmlDom.createElement("dqty");
    // child.innerHTML=document.getElementById("dqty").value;
    // items[0].appendChild(child);

    // // pstock
    // child=xmlDom.createElement("pstock");
    // child.innerHTML=document.getElementById("pstock").value;
    // items[0].appendChild(child);

    // // location
    // child=xmlDom.createElement("location");
    // child.innerHTML=document.getElementById("location").value;
    // items[0].appendChild(child);

    // // transfer
    // child=xmlDom.createElement("iname");
    // child.innerHTML=document.getElementById("name").value;
    // items[0].appendChild(child);

    // // tqty
    // child=xmlDom.createElement("transfer");
    // child.innerHTML=document.getElementById("transfer").value;
    // items[0].appendChild(child);

    // // remark
    // child=xmlDom.createElement("remark");
    // child.innerHTML=document.getElementById("remark").value;
    // items[0].appendChild(child);


    // console.log(xmlDom);

    // data1=data1+JSON.stringify(items[0].childNodes);

    // console.log(JSON.stringify(items[0]));
    
}

