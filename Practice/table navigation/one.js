const table = document.querySelector('.table');
// Example usage
const rows = table.rows; // HTMLCollection of all rows
const caption = table.caption; // Caption element
const tHead = table.tHead; // Thead element
const tFoot = table.tFoot; // Tfoot element
const tBodies = table.tBodies; // HTMLCollection of tbody elements

// Accessing tbody
const tbody = tBodies[0]; // Assuming there is only one tbody
// Accessing rows in tbody
const tbodyRows = tbody.rows; // HTMLCollection of rows in tbody

// Accessing cells in a row
const firstRow = tbodyRows[0];
const cellsInFirstRow = firstRow.cells; // HTMLCollection of cells in the row

// Accessing properties of a row
const rowIndex = firstRow.rowIndex; // Position of the row in the entire table

const sectionRowIndex = firstRow.sectionRowIndex; // Position of the row in the table section


