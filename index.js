// let displayContent =

function displayContent(currentElement) {
  var documents =  document.querySelectorAll('.love-div');
  for (var i = 0; i < documents.length; i++) {
    documents[i].style.display = 'none';
  }
  currentElement.style.display = 'block';
}
document.getElementById('love-1').addEventListener("click", function(){displayContent(document.querySelector('.div-2'))});
document.getElementById('love-2').addEventListener("click", function(){displayContent(document.querySelector('.div-3'))});
document.getElementById('love-3').addEventListener("click", function(){displayContent(document.querySelector('.div-4'))});
document.getElementById('love-4').addEventListener("click", function(){displayContent(document.querySelector('.div-5'))});
document.getElementById('love-5').addEventListener("click", function(){displayContent(document.querySelector('.div-6'))});
document.getElementById('love-6').addEventListener("click", function(){displayContent(document.querySelector('.div-7'))});
document.getElementById('love-7').addEventListener("click", function(){displayContent(document.querySelector('.div-8'))});
