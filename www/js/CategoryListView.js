var CategoryListView = function () {

    var categories;

    this.initialize = function() {
        this.$el = $('<div/>');
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

    this.initialize();

}
