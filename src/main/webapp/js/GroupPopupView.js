(function() {

    brite.registerView("GroupPopupView",{

        create: function(){
            return render("GroupPopupView");
        },
        postDisplay: function(){
            var view = this;
        },
        events : {
            "click; .cancel" : function(e){
                var view = this;
                view.$el.remove();
            },
            "click; .create" : function(e){
                var view = this;
                var groupName = view.$el.find("input").val();
                if(groupName == ""){
                    alert("Please enter something.");
                }else{
                    groupDao.create({title:groupName}).done(function(){
                        view.$el.trigger("DO_REFRESH");
                        view.$el.remove();
                    });
                }
            }
        }
    });

})();