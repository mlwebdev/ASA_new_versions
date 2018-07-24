
/*
var body = document.body;
var ul = document.createElement("ul");
ul.id = "dyn_ul";
body.appendChild(ul);
*/

/*
var body = function body(p, txt) {
  document.body.appendChild(p);
  p = (function p(txt) {
    document.createElement("p");
    txt = this.txt;
  })();
}
*/

/*
let pAppend = function func1(momE, mom, sonE, son, sonIdName, sonText){
  momE = document.createElement(mom);
  sonE = document.createElement(son);

  (function func2(){ 
    son.id = sonIdName;
    son.innerHTML = sonText;
    
    (function func3(){   
      mom.appendChild(son);
    })();
  })();
}

*/

var body = document.body;

function create(el, d) {
  el.id = d;
 //  cls = el.classList.add(a)
  return document.createElement(el);
}

var p = document.createElement("p");
p.id = "newP";
p.innerHTML ="A new p tag";



function addClass(el, cls) {
  return el.classList.add(cls);
}
function addId(el, id) {
  return el.id = id;
}

function appendEl(el, chd) {
  return el.appendChild(chd);
}

function htmTxt(el, txt) {
  return el.innerHTML = txt;
}


function outer() {
  return function inner(t, p, txt) {
    p = document.createElement("p");
    txt = p.innerHTML = t;
    document.body.appendChild(p);
  }
}

function Append(son, mom) {
  this.mom = mom;
  this.son = son;
  return mom.appendChild(son);
}

var htm = {
  body: document.body,
  hr: document.createElement("hr"),
  append_: function append_(body, hr) {
    this.body.appendChild(this.hr)
  }
};


var div = document.querySelector("div");
