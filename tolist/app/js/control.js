/**
 * Created by tankpt on 14-10-26.
 */
'use strict';

/* Controllers */

var phonecatApp = angular.module('MyApp', []);

phonecatApp.controller('todoCtrl', function($scope) {
    $scope.todos = [{
        name:"111" ,
        complete : 0
    }];

    $scope.toggleAll = function(){
        var tmpArray = $scope.todos,
            i= 0,
            len=tmpArray.length;

       for(;i<len;i++){
           tmpArray[i].complete =1;
       }
    };

    $scope.addTodo = function ($event){
        if($event.keyCode == 13){
            $scope.todos.push({
                name : $scope.todoItem ,
                complete : 0
            });
            $scope.todoItem = "";
        }
    };

    $scope.destroyTodo = function(todo){
        var tmpArray = $scope.todos,
            i= 0,
            len=tmpArray.length;
        for(;i<len;i++){
            if(tmpArray[i] ==todo){
                break;
            }
        }
        tmpArray.splice(i,1);
    };
});
