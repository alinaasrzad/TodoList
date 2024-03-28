let myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
// function deleteAll(){
//   var MyTag;
//   MyTag = document.getElementById("delete");
//   MyTag.remove();
//  }
// let newElement = '<div id="new-element">...</div>';
// document.getElementById('button').addEventListener('click', function(event) {
//   document.body.insertAdjacentHTML('beforeend', newElement);
// })
// document.addEventListener('click', function (event) {
// let node = document.getElementById('new-element');
// if (node && !node.contains(event.target)) {
//   document.getElementById('new-element').remove();

// }}
// )
// document.getElementById("delete").addEventListener("click", function(e) {
// 	// e.target is the clicked element!
// 	// If it was a list item
// 	if(e.target && e.target.nodeName == "li") {
// 		// List item found!  Output the ID!
// 		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
// 	}
// });

// function deleteAll() {
//   taskList.innerHTML = '';
//   Faster
//   while(taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }

// }

document.getElementById("delete").innerHTML="Delete All"
var x = document.querySelectorAll('ul')