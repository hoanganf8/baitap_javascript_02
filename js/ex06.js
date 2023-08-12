var columnHtml = "";

for (var rows = 1; rows <= 8; rows++) {
  columnHtml += `<tr>`;
  for (cols = 1; cols <= 8; cols++) {
    var total = cols + rows;
    columnHtml += `<td ${total % 2 !== 0 ? 'class="black"' : ""}></td>`;
  }
  columnHtml += `</tr>`;
}

var html = `<table border="1" width="100%" cellpadding="0" cellspacing="0">${columnHtml}</table>`;

document.write(html);
