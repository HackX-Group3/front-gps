var HomeView = function (service) {

  var categoryListView;

  this.initialize = function () {
    // Define a div wrapper for the view (used to attach events)
    this.$el = $('<div/>');
    categoryListView = new CategoryListView();
    this.findAll();
    this.render();
  };

  this.render = function() {
    this.$el.html(this.template());
    //$('.search-key').on('keyup', this.findByName('.search-key'));
    $('.content', this.$el).html(categoryListView.$el);
    return this;
  };


   // function renderHomeView() {
   //     $('body').html(homeTpl());
   //     $('body').html(findAll());
        //$('.search-key').on('keyup', findByName);
   // }

  this.findAll = function() {
    service.findAll().done(function(categories) {
      categoryListView.setCategories(categories);
    });
  };

  // this.findByName = function(searchkey) {
  //   service.findByName(searchkey).done(function(categories) {
  //     categoryListView.setCategories(categories);
  //   });
  // };


    //  function findAll() {
    //     service.findAll($('.search-key').val()).done(function (categories) {
    //         $('.content').html(categoryListTpl(categories));
    //     });
    // }

  this.initialize();

}
