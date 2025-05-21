function isPipeSeparated(text) {
  return /\|/.test(text) && /\n/.test(text);
}

function convertToTable(text) {
  const rows = text.trim().split('\n');
  const table = document.createElement('table');
  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid #444";
  table.style.margin = "1em 0";

  rows.forEach((rowText, i) => {
    const row = document.createElement('tr');
    rowText.split('|').forEach(cellText => {
      const cell = document.createElement(i === 0 ? 'th' : 'td');
      cell.textContent = cellText.trim();
      cell.style.border = "1px solid #444";
      cell.style.padding = "4px 8px";
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return table;
}

document.querySelectorAll('pre, div, p, span').forEach(el => {
  const text = el.textContent;
  if (isPipeSeparated(text)) {
    const table = convertToTable(text);
    el.replaceWith(table);
  }
});
