const dropdown = document.querySelectorAll(".-dropdown");
const link = document.querySelectorAll(".-dropdown > .link");


//Função para fechar o dropdown clicar em outro lugar da página
document.addEventListener("click", function (event) {
  var dropdowns = document.querySelectorAll(".-dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  }
});

// Alternar o menu dropdown quando clicar no link
var dropdownLinks = document.querySelectorAll(".-dropdown > .link");
for (var i = 0; i < dropdownLinks.length; i++) {
  var dropdownLink = dropdownLinks[i];
  dropdownLink.addEventListener("click", function (event) {
    event.preventDefault();
    var dropdown = this.parentNode;
    dropdown.classList.toggle("active");
  });
}
