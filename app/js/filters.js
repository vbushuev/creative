(function(){
  var app=angular.module('creativeaFilters',[]);
  app.filter('UserFilter',function(item){
    return function(item){return item.toUpperCase();};
  });
})();
