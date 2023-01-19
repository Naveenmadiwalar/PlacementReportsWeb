var usn;
var cmp;

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

window.onload = () => {

    var prms = [
        "usn",
        "name",
        "phone",
        "email",
        "branch",
        "sem",
        "cmp",
        "pkg"
    ];

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const usn1 = urlParams.get('usn')

    const cmp1 = urlParams.get('cmp')

    for(let i in prms){
        document.getElementById(tag[i]).value = urlParams.get(prms[i]);
    }
}


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

    xhttp.open("POST", "update.php");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));

}


