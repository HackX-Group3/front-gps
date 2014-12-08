// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    WelcomeView.prototype.template = Handlebars.compile($("#welcome-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    CategoryListView.prototype.template = Handlebars.compile($("#category-list-tpl").html());
    CategoryView.prototype.template = Handlebars.compile($("#category-tpl").html());


    var service = new CategoryService();
//  var slider = new PageSlider($('body'));  to use slider ----

    service.initialize().done(function () {

      router.addRoute('', function() {
        $('body').html(new WelcomeView().render().$el);
      });
      
      router.addRoute('lists/1', function() {
        $('body').html(new HomeView(service).render().$el);
      });

      router.addRoute('categories/:id', function(id) {
        console.log('categories/' + parseInt(id));
          //var category = service.findById(parseInt(id));
          service.findById(parseInt(id)).done(function (category) {
           // category = categoryid;
           console.log("category : ");
           console.log(category);
           $('body').html(new CategoryView(category).render().$el);
          });
      });

      router.start();
    });


    /*service.initialize().done(function () {
      router.addRoute('', function() {
        $('body').html(new HomeView(service).render().$el);
        // to use slider -----
        //slider.slidePage(new HomeView(service).render().$el);
      });
    */

      /*
      router.addRoute('categories/:id', function(id) {
        service.findById(parseInt(id)).done(function(category) {
          $('body').html(new EmployeeView(employee).render().$el);
          // to use slider -----
          //slider.slidePage(new EmployeeView(employee).render().$el);
        });
      });
  

      router.start();
    });*/

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {

      /* Take care of the overlap of the statusbar on ios 7 */
      StatusBar.overlaysWebView( false );
      StatusBar.backgroundColorByHexString('#ffffff');
      StatusBar.styleDefault();
      /*------------------------------------*/

      if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (message) {
          navigator.notification.alert(
            message,    // message
            null,       // callback
            "Workshop", // title
            'OK'        // buttonName
          );
        };
      };

      FastClick.attach(document.body);
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */

 



}());
