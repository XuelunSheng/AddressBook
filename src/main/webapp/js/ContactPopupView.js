(function() {

	brite.registerView("ContactPopupView",{

		create: function(data){
			return render("ContactPopupView",data);
		},
		postDisplay: function(data){
			var view = this;
			view.groupId = data.groupId
			view.contactId = data.id;
		},
		events : {
			"click; .cancel" : function(e){
				var view = this;
				view.$el.remove();
			},
			"click; .create" : function(e){
				var view = this;
				var info = {};
				info.name = view.$el.find(".name").val();
				info.address = view.$el.find(".address").val();
				if(info.name == "" || info.address == ""){
					alert("Please enter something.");
				}else{
					if(view.groupId){
						contactDao.create(view.groupId,info).done(function(){
							view.$el.trigger("DO_REFRESH");
							view.$el.remove();
						});
					}else{
						info.id = view.contactId;
						contactDao.update(info).done(function(){
							view.$el.trigger("DO_REFRESH");
							view.$el.remove();
						});
					}
				}
			}
		}
	});

})();