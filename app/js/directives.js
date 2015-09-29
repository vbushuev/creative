(function(){
  var app=angular.module('creativeaDirectives',[]);
  app.directive('corporateName',function(){
    return {
      restrict:'EA',
      //replace:true,
      //scope:true,
      controllerAs:'corporate',
      controller:function(){
        var dvm=this;
        dvm.name="BS";
        dvm.url="http://bs2";
        dvm.major="2";
      },
      //link:function($scope,$attrs){},
      //template:['<a href="{{corporate.url}}">{{corporate.name}}<sup>{{corporate.major}}</sup></a>'].join('')
      templateUrl:'views/corporateName.html'
    };
  });
  app.directive('companyName',function(){
    return {
      restrict:'EA',
      templateUrl:'views/companyName.html'
    };
  });
})();
