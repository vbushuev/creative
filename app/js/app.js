(function(){
  var app=angular.module('creativea',[]);
  app.controller('PageController',function(){
    this.data={
      corporate:"<a href=\"http://bs2\"BS<sup>2</sup></a>",
      company:"creative<sub>A</sub>",
      quote:"ultimate creative agency",
      author:"vladimir bushuev",
      canShow:true
    };
  });
})();
