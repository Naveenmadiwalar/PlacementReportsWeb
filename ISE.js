window.onload = () => {
    var place = document.getElementById("tbody");

    var tag = ["USN", "Name", "Phone no", "Email", "Branch", "Semester", "Company", "Package"];

    let counter = 1;

    var place = document.getElementById("tbody");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log(this.responseText);
            for (let item of JSON.parse(this.responseText)) {

                let row = document.createElement("tr");
                row.setAttribute('id',counter);
                row.setAttribute('onclick','rowChange(this)');

                let count = document.createElement("td");
                count.innerText = counter;
                row.appendChild(count);

                for (let x of tag) {
                    let td = document.createElement("td");
                    td.innerText = item[x];
                    row.appendChild(td);
                }

                place.appendChild(row);

                counter++;
            }
        }
    };
    xhttp.open("GET", "display.php?name=ise", true);
    xhttp.send();

}
function rowChange(node){

    location.href = "update.html?usn="+node.childNodes[1].childNodes[0].nodeValue
    +"&name="+node.childNodes[2].childNodes[0].nodeValue
    +"&phone="+node.childNodes[3].childNodes[0].nodeValue
    +"&email="+node.childNodes[4].childNodes[0].nodeValue
    +"&branch="+node.childNodes[5].childNodes[0].nodeValue
    +"&sem="+node.childNodes[6].childNodes[0].nodeValue
    +"&cmp="+node.childNodes[7].childNodes[0].nodeValue
    +"&pkg="+node.childNodes[8].childNodes[0].nodeValue;
    
    
    
    ;
   }


function Delete() {
    var usn = prompt("Please Enter USN of the Student to Delete", "0");
    var cmp = prompt("Please Enter Company of the Student to Delete", "xyz");

    if (usn != null && cmp != null) {
        var cn = confirm("Are you confirm to delete studen data with  USN = " + usn+" Company = "+cmp);

        if (cn) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert(this.responseText);
                    location.reload();
                }
            };

            xhttp.open("POST", "delete.php");
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify({ "usn": usn,"cmp":cmp, "table":"ise" }));
        }
    }
}
