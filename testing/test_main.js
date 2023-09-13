console.log("Works!");

// Get references to filter inputs and the table
const filterNameInput = document.getElementById("filterName");
const filterAgeInput = document.getElementById("filterAge");
const filterCityInput = document.getElementById("filterCity");
const dataTable = document.getElementById("data-table");

// Add event listeners to the filter inputs
filterNameInput.addEventListener("input", filterTable);
filterAgeInput.addEventListener("input", filterTable);
filterCityInput.addEventListener("input", filterTable);

// Function to filter the table
function filterTable() {
  const filterName = filterNameInput.value.toLowerCase();
  const filterAge = filterAgeInput.value.toLowerCase();
  const filterCity = filterCityInput.value.toLowerCase();

  const rows = dataTable.getElementsByTagName("tr");

  // Loop through table rows and hide those that don't match the filters
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const name = row.cells[0].textContent.toLowerCase();
    const age = row.cells[1].textContent.toLowerCase();
    const city = row.cells[2].textContent.toLowerCase();

    if (
      name.includes(filterName) &&
      age.includes(filterAge) &&
      city.includes(filterCity)
    ) {
      row.style.display = ""; // Show the row
    } else {
      row.style.display = "none"; // Hide the row
    }
  }
}

// Initially, call the filterTable function to show all rows
filterTable();
