function addCategories() {
	console.log("je suis dans addCategories");
	var addCategories = [];
	addCategories = $('input.category:checked').map(function () {
		return $(this).val();
	});

	console.log("categories cochées :");
	console.log(addCategories);

	for (var x=0; x<addCategories.length; x++)
	{
		$.post( "http://gps-app.herokuapp.com/lists" + "/" + "3" + "/" + "add_category_list.json", {"category": {"id": addCategories[x]}});
		console.log("category ajoutée : " + addCategories[x]);
	}

}