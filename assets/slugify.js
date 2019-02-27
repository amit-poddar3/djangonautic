const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

function slugify(val){
return val.toString().toLowerCase().trim()
.replace(/&/g,'-and-')   //replace & with '-and-'
.replace(/[\s\W-]+/g,'-') //replace spaces non word chars with  dashes with a single dash
}

titleInput.addEventListener('input',function(e){
 slugInput.setAttribute('value',slugify(titleInput.value));
});