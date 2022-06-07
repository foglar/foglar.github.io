const typeWriter = document.getElementById('typewriter-text');
const text = '#welcome to SamSonSam dev';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

function copy(that){
  var inp =document.createElement('input');
  document.body.appendChild(inp)
  inp.value =that.textContent
  inp.select();
  document.execCommand('copy',false);
  inp.remove();
  }