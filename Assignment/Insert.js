function reset() {
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

function insert() {
  var data = new Object();

  var tags = [
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
      // console.log(this.responseText);
    }
  };

  xhttp.open("POST", "insert.php");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));

  // console.log(xmlDom);

  // data1=data1+JSON.stringify(items[0].childNodes);

  // console.log(JSON.stringify(items[0]));
}
