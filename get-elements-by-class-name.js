/* 
<h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>
*/

var names = []; 
var paragraphs = document.getElementsByClassName('name'); 
for (let i = 0; i < paragraphs.length; i++) { 
var text = paragraphs[i].innerText; 
names += text + ", "; 

}
alert(names); 

