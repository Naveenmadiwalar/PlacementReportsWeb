function addStd() {
    var tag = [
        'stdusn',
        'stdname',
        'phno',
        'email',
        'branch',
        'sem',
        'cmp',
        'pkg'
    ];

    let data = new Object();

    for (let x of tag) {
        let d = document.getElementById(x).value;

        if (d.length == 0 || d == null) {
            alert(x + " Field required");
            return;
        }
        else {
            data[x] = d;
        }
    }

    console.log(data);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            console.log(this.responseText);
        }
    };

    xhttp.open("POST", "addstd.php");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));

}