var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function layer(a){
    l=getElementsByClass('layer',null,'div');
    for(var i=0;i<l.length;i++)l[i].style.display=(i==a?'block':'none');
    l=getElementsByClass('layer',null,'span');
    for(var i=0;i<l.length;i++){
        l[i].className=(i==a?'layer act':'layer');
    }
}

/* универсальная функция получения всех DOM объектов заданного класса */


function getElementsByClass(searchClass,node,tag){
    var classElements=new Array();
    if ( node == null ) node=document;
    else if(typeof(node)!="object")node=document.getElementById(node); if(!node)return;
    if ( tag == null ) tag='*';
    var els=node.getElementsByTagName(tag);
    var elsLen=els.length;
    var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i=0, j=0; i < elsLen; i++) {
           if ( pattern.test(els[i].className) ) {
                classElements[j]=els[i];
               j++;
          }
    }
    return classElements;
}