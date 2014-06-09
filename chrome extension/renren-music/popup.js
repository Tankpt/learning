  var app =  {},
  	  _audioPlayer  = document.getElementById("audioPlayer");
    //model---------------------------------------------
    app.item = Backbone.Model.extend({
        default : {
           title : '',
           url : ''
        }
    });
    //collections---------------------------------------------
    app.itemLists = Backbone.Collection.extend({
        model : app.item
    });

    app.items = new app.itemLists();
    //view  every li view
    app.liView = Backbone.View.extend({
        tagName : 'li',
        template: _.template($('#item-template').html()),
        initialize : function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'remove',this.disappear);
        },
        events :{
            'click .tryPlay': 'tryPlayAudio'
        },
        tryPlayAudio : function(){
            _audioPlayer.src = this.audioUrl;
            _audioPlayer.load(); 
            _audioPlayer.play();
        },
        render : function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.audioUrl = this.$el.find(".audioUrl").val();
            return this;
        },
        disappear : function(){
        	this.remove();
        }
    });

    //view List
    app.appView = Backbone.View.extend({
        el : '#audioLists',
        initialize : function () {
            this.listContent = $("#audioLists");
            this.listenTo(app.items, 'add', this.addOne);
        },
        events :{
            'keypress #new-todo' : 'createOnEnter'
        },
        addOne : function (_tmpModel) {
            var view = new app.liView({ model: _tmpModel });
            this.listContent.append(view.render().el);
        }

    });
    var a = new app.appView();

$(document).ready(function(){
	$("#mybutton").on("click",function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  
		  chrome.tabs.sendMessage(tabs[0].id, {search: "true"}, function(response) {  
		    console.log(response.result);
		    //app.items.reset();
		    for(var i=0,len=app.items.length;i<len;i++){
		    	app.items.pop();
		    }
		    _.each(response.result,function(_item,_index){
		        var _tmpModal = {
		            title : "暂无名字",
		            url : _item
		        };
		        app.items.add(_tmpModal);
		    });
		  });  
		});  
	});
});