//var myHeading = document.querySelector('h1');
//var jsontest = JSON.parse("resources/test.json");
//console.log(jsontest);
//var mydata = jsontest;
////alert(mydata[0].name);
////alert(mydata[0].age);
////alert(mydata[1].name);
////alert(mydata[1].age);

//myHeading.textContent = mydata[0].name;

var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'resources/test.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var myArr = JSON.parse(xobj.responseText);
            //loadJSON(myArr);
            Object.keys(myArr).forEach(function(key) {
                var value = myArr[key];
                alert(key + ' - name = ' + value.name + ', age = ' + value.age);
            })
        }
    }
    xobj.send(null);

//function loadJSON(args) {
//  var out = "";
//    var i;
//    for(i = 0; i < args.length; i++) {
//        alert(args[i].name);
//    }
//}