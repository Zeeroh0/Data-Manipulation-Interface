$(document).ready(() => {

	const $userInfo = $('#userInfo');

	let users = [];
	
	getReq();

	function getReq () {
	  $.get("/users", (data) => {
	    users = data;
	    initializeRows();
	  });
	}

	function initializeRows() {
    $userInfo.empty();
    var rowsToAdd = [];
    for (var i = 0; i < users.length; i++) {
      rowsToAdd.push(showUsers(users[i]));
    }
    $userInfo.prepend(rowsToAdd);
  }

  function showUsers (users) {
  	let $eachUserDisplay = $(
  		[
  			"<p>",
  			users.firstName,
  			"</p>"
  		].join("")
		);

		return $eachUserDisplay;
  }

});
