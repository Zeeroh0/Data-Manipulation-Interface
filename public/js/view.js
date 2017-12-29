$(document).ready(() => {

	// ---------- Global Variables ---------- //
	const $display = $('#d3display');
	let properties = [];

	// ---------- Event Handlers ---------- //
	$('#propSelectDropDown').on('change', handlePropSelect);
	
	function handlePropSelect() {
    let selectedPropertyID = $(this).val();
    getReq(selectedPropertyID);
  }

	// ---------- Functions ---------- //
	function getReq (ID) {
	  $.get("/api/"+ID, (data) => {
			console.log('Get req', data);
	    properties = data;
	    initializeTable(ID);
	  });
	}

	function initializeTable(ID) {
    $display.empty();
    let tableBegin = 
			"<table class='table'>"+
				"<thead>"+
					"<tr>"+
						"<th scope='col'>#</th>"+
						"<th scope='col'>Expense Account</th>"+
						"<th scope='col'>Expense Amount</th>"+
						"<th scope='col'>Period End Date</th>"+
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
		console.log(totalTable);
    $display.prepend(totalTable);
  }

  function showProperty (property, i) {
  	let $eachPropertyDisplay = $(
  		[
				"<tr>",
					"<th scope='row'>",
					(i+1),
					"</th>",
					"<td>",
					property.AccountID,
					"</td>",
					"<td>",
					"$"+property.ExpenseAmount+",000.00",
					"</td>",
					"<td>",
					property.PeriodEndData,
					"</td>",
				"</tr>"
  		].join("")
		);

		return $eachPropertyDisplay;
		console.log($eachPropertyDisplay);
  }

});
