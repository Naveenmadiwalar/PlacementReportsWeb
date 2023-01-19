document.getElementById("load").onload = () => {
  // alert("Content is Loaded");
  // let xmlContent = "";

  var place = document.getElementById("tbody");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      for (let item of JSON.parse(this.responseText)) {
        let row = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = item.id;
        row.appendChild(td);

        let name = document.createElement("td");
        name.innerText = item.name;
        row.appendChild(name);

        let date = document.createElement("td");
        date.innerText = item.date;
        row.appendChild(date);

        let cost = document.createElement("td");
        cost.innerText = item.cost;
        row.appendChild(cost);

        let folio = document.createElement("td");
        folio.innerText = item.folio;
        row.appendChild(folio);

        let itemQty = document.createElement("td");
        itemQty.innerText = item.itemQty;
        row.appendChild(itemQty);

        let damageQty = document.createElement("td");
        damageQty.innerText = item.damageQty;
        row.appendChild(damageQty);

        let Stock = document.createElement("td");
        Stock.innerText = item.Stock;
        row.appendChild(Stock);

        let location = document.createElement("td");
        location.innerText = item.location;
        row.appendChild(location);

        let Transfered = document.createElement("td");
        Transfered.innerText = item.Transfered;
        row.appendChild(Transfered);

        let tqty = document.createElement("td");
        tqty.innerText = item.tqty;
        row.appendChild(tqty);

        let remarks = document.createElement("td");
        remarks.innerText = item.remarks;
        row.appendChild(remarks);

        place.appendChild(row);
      }
    }
  };
  xhttp.open("GET", "display.php", true);
  xhttp.send();

  // fetch("data.xml").then((response) => {
  //     response.text()
  //         .then((xml) => {
  //             let xmlDom = new DOMParser().parseFromString(xml, "application/xml");

  //             let items = xmlDom.querySelectorAll("items");
  //             let count = 1;

  //             for (let xmlNode of items) {
  //                 let row = document.createElement("tr");

  //                 let td = document.createElement("td");
  //                 // td.innerText=count++;
  //                 td.innerText = xmlNode.id;

  //                 row.appendChild(td);

  //                 for (var nodes of xmlNode.children) {
  //                     td = document.createElement("td");
  //                     td.innerText = nodes.innerHTML;
  //                     row.appendChild(td);
  //                     // console.log(td)
  //                 }

  //                 place.appendChild(row);

  //             }

  // items.forEach(xmlNode =>{
  //     let row=document.createElement("tr");

  //     let td=document.createElement("td");
  //     td.innerText=count++;
  //     row.appendChild(td);

  //     for(var nodes of xmlNode.children){
  //         td=document.createElement("td");
  //         td.innerText=nodes.innerHTML;
  //         row.appendChild(td);
  //         // console.log(td)
  //     }

  //     place.appendChild(row);
  // })
  // console.log(items[0].id);

  // xmlDom.childNodes[0].removeChild(xmlDom.childNodes[0].children[1]);

  // console.log(xmlDom.childNodes[0])
  // for(value of items){

  //     console.log(value);
  // }

  // console.log(JSON.stringify(xmlDom));

  //         })
  // })
};

function insert() {
  location.href = "insert.html";
}

function update() {
  location.href = "update.html";
}

// var data = `<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE ids [
// <!ELEMENT ids (id)>
// <!ELEMENT id (#PCDATA)>
// ]>
// <ids></ids>
// `;

// var data1 = `<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE id [
// <!ELEMENT id (#PCDATA)>
// ]>
// `;

function deleteData() {
  var id = prompt("Please Enter ID of the Item to Delete", "0");

  if (id != null) {
    var cn = confirm("Are you confirm to delete Item with  ID = " + id);

    if (cn) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          alert(this.responseText);
          // console.log(this.responseText);
          location.reload();
        }
      };

      xhttp.open("POST", "delete.php");
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(JSON.stringify({"id" : id}));
    }

    // if (cn) {
    //   let xmlDom = new DOMParser().parseFromString(data, "application/xml");
    //   var items = xmlDom.querySelectorAll("ids");

    //   var child = xmlDom.createElement("id");
    //   child.innerHTML = id;
    //   items[0].appendChild(child);

    //   console.log(xmlDom);
    // }
  }
}
