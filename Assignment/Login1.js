

// var data = `<?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE users [
// <!ELEMENT users (username,password)>
// <!ELEMENT username (#PCDATA)>
// <!ELEMENT password (#PCDATA)>
// ]>
// <users></users>
// `

function login() {
    let usr = document.getElementById("username").value;
    let psw = document.getElementById("password").value;


    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // alert(this.responseText);
          console.log(this.responseText);

          let dt = JSON.parse(this.responseText);

          if(dt.error == "true"){
            alert(dt.Message);
          }else{
            if(dt.status == "false"){
              alert(dt.Message);
            }else{
              location.href = dt.location;
            }
          }
        }
      };

      xhttp.open("POST", "login.php");
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(JSON.stringify({"user" : usr, "password" : psw}));



    // if (usr === "Sahil" && psw === "Sahil") {
    //     // let xmlDom = new DOMParser().parseFromString(data, "application/xml");
    //     // var users = xmlDom.querySelectorAll("users");

    //     // var child = xmlDom.createElement("username");
    //     // child.innerHTML = usr;
    //     // users[0].appendChild(child);

    //     // child = xmlDom.createElement("password");
    //     // child.innerHTML = psw;
    //     // users[0].appendChild(child);
        
    //     // console.log(xmlDom);

    //     // location.href = "table.html";
    // } else {
    //     alert("Please Enter Valid Information...!");
    // }
}