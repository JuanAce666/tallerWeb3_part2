var tabla = document.getElementById('tablaNumeros');
var contador = 1;
var tablaHTML = '';
for (var i = 0; i < 3; i++) {
  tablaHTML += '<tr>';
  for (var j = 0; j < 5; j++) {
    tablaHTML += '<td>' + contador + '</td>';
    contador++;
  }
  tablaHTML += '</tr>';
}
tabla.innerHTML = tablaHTML;