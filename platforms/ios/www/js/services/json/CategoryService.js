var CategoryService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://gps-app.herokuapp.com/categories";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findAll = function() {
        return $.getJSON( url + ".json", function() {
            console.log( "success !! voici le retour de findAll" )
        });
    }

    this.create = function(categories) {
        return $.post( url + ".json", categories);
    }

    this.findById = function(id) {
        console.log("voici l'id :" + id);
        return $.getJSON( url + "/" + id + ".json", function() {
            console.log( "success" )
        });
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }

}