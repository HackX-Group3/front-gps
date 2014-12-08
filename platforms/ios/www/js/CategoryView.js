var CategoryView = function(category) {

  this.initialize = function() {
      this.$el = $('<div/>');
  };

  this.render = function() {
  	console.log(category);
      this.$el.html(this.template(category));
      return this;
  };

  this.initialize();

}