function login() {
    let usr = document.getElementById("username").value;
    let psw = document.getElementById("password").value;

    if(usr.length == 0 || usr == null || psw.length == 0 || psw == null ){
        alert("Please enter Data...!");
        return;
    }


    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          
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

}


function reset(){
    location.reload();
}