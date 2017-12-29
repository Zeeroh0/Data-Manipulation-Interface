$(document).ready(() => {

	// ---------- Global Variables ---------- //
	const $display = $('#d3display');
	let properties = [];

	// ---------- Event Handlers ---------- //
	$('#propSelectDropDown').on('change', handlePropSelect);

	// $('.tableHeader').on('click', sortTable());
	
	
	// ---------- Functions ---------- //
	function handlePropSelect() {
    let selectedPropertyID = $(this).val();
    getReq(selectedPropertyID);
  }

	function getReq (ID) {
	  $.get("/api/"+ID, (data) => {
	    properties = data;
	    initializeTable(ID);
	  });
	}

	function sortTable(n) {
		let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		table = $("#propTable");
		switching = true;
		dir = "asc"; 

		while (switching) {
			switching = false;
			rows = $("tr");
			for (i = 1; i < (rows.length - 1); i++) {
				shouldSwitch = false;
				x = rows[i].$("td")[n];
				y = rows[i + 1].$("td")[n];
				if (dir == "asc") {
					if (x.innerHTML.parseFloat() > y.innerHTML.parseFloat()) {
						shouldSwitch= true;
						break;
					}
				} else if (dir == "desc") {
					if (x.innerHTML.parseFloat() < y.innerHTML.parseFloat()) {
						shouldSwitch= true;
						break;
					}
				}
			}
			if (shouldSwitch) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
				switchcount ++; 
			} else {
				if (switchcount == 0 && dir == "asc") {
					dir = "desc";
					switching = true;
				}
			}
		}
	}

	function initializeTable(ID) {
    $display.empty();
    let tableBegin = 
			"<table class='table' id='propTable'>"+
				"<thead>"+
					"<tr>"+
						"<th scope='col' class='tableHeader' onclick='sortTable(0)' >#</th>"+
						"<th scope='col' class='tableHeader' onclick='sortTable(1)' >Expense Account</th>"+
						"<th scope='col' class='tableHeader' onclick='sortTable(2)' >Expense Amount</th>"+
						"<th scope='col' class='tableHeader' onclick='sortTable(3)' >Period End Date</th>"+
					"</tr>"+
				"</thead>"+
				"<tbody>";

    for (var i = 0; i < properties.length; i++) {
			let eachPropertyDisplay = 
			"<tr><th scope='row'>"+(i+1)+"</th>"+
			"<td>"+properties[i].AccountID+"</td>"+
			"<td>$"+properties[i].ExpenseAmount+",000.00</td>"+
			"<td>"+properties[i].PeriodEndData+"</td></tr>";

      tableBegin += eachPropertyDisplay;
		}

		let finishTable = "</tbody></table>";
		let totalTable = tableBegin+finishTable;
    $display.prepend(totalTable);
  }


});
