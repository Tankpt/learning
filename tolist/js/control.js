/**
 * Created by tankpt on 14-10-26.
 */
'use strict';

phonecatApp.controller('todoCtrl', function($scope,$routeParams,$filter,todoStorage) {

    /*initial*/
    $scope.toggleAll = false;

    $scope.todos = todoStorage.get();

    var todos = $scope.todos ;

    /* globle watch */
    $scope.$watch('todos', function (newValue, oldValue) {
        $scope.unCompletedCount = $filter('filter')(todos, { completed: false }).length;
        $scope.completedCount = todos.length - $scope.unCompletedCount;
        if (newValue !== oldValue) {
            todoStorage.put(todos);
        }
    },true);

    $scope.markAll = function(_new){
        angular.forEach(todos,function(_item,_index){
            _item.completed = !_new;
        });
    };

    $scope.$on('$routeChangeSuccess', function () {
        var status = $scope.status = $routeParams.status || '';

        $scope.statusFilter = (status === 'active') ?
        { completed: false } : (status === 'completed') ?
        { completed: true } : null;
    });

    $scope.addTodo = function ($event){
        if($event.keyCode == 13){
            todos.push({
                name : $scope.todoItem ,
                completed : false
            });
            $scope.todoItem = "";
        }
    };

    /*atodo item*/
    $scope.destoryTodo = function(todo){
        var tmpArray = todos,
            i= 0,
            len=tmpArray.length;
        for(;i<len;i++){
            if(tmpArray[i] ==todo){
                break;
            }
        }
        tmpArray.splice(i,1);
    };

    /*
    * clear todos items
    * */
    $scope.clearCompletedTodos = function(){
        $scope.todos = todos =  $filter('filter')(todos, { completed: false });
    };

 });
