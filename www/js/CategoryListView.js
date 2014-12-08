var CategoryListView = function () {

    var categories;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.submit-cat-btn', this.addCategories);
        this.render();
    };

    this.setCategories = function(list) {
        categories = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(categories));
        return this;
    };

    // Problème avec addCategories pour le moment, je n'arrive pas à récuperer les catégories cochées
    // dans le formulaire "insertCat" et à les envoyer en post grace à ListService.addCategory.
    this.addCategories = function() {
        console.log('ajout des categories ?');
        var addCategories = $("#insertContact :input").serializeArray();
        console.log("addCategories :");
        console.log(addCategories);
    }

    this.initialize();

}
