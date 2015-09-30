(function(){
  var app=angular.module('creativeaControllers',[
    'creativeaServices',
    'creativeaFactories'
  ]);
  app.controller('WelcomeController',function($scope,UserService,UserFactory){
    var vm=this;
    vm.togleButton=function(){
      vm.data.canShow=!vm.data.canShow;
    }
    vm.data={
      corporate:UserService.sayCorporate(),//"<a href=\"http://bs2\"BS<sup>2</sup></a>",
      company:UserFactory.sayCompany(),//"creative<sub>A</sub>",
      quote:"ultimate creative agency",
      author:"vladimir bushuev",
      canShow:true
    };
  });
  app.controller('NavController',function(){
    var vm=this;
    vm.timeNow=new Date();
  });
  app.controller('TestController',function(){
    var vm=this;
  });
})();
