var ListService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://gps-app.herokuapp.com/lists";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.create = function(list_params) {
        return $.post( url + ".json", list_params);
    }

    // La fonction est prête mais je n'arrive pas à lui envoyer les bons paramètres avec
    // une catégorie et la liste concernée
    this.addCategory = function(id, category_params) {
        return $.post( url + "/" + id + "/" + "add_category_list.json", category_params);
    }


}