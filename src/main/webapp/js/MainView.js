(function() {

	brite.registerView("MainView",{

	create: function(){
		return render("MainView");
	},
	postDisplay: function(){
		var view = this;
		view.$content = view.$el.find(".MainView-content");
		refreshInfo.call(view);
	},
	events : {
		"click; .add-group" : function(e){
			var view = this;
			brite.display("GroupPopupView","body");
		},
		"click; .delete-group" : function(e){
			var view = this;
			var ctn = $(e.currentTarget).closest(".group-ctn");
			var groupId = ctn.attr("data-entity-id");
			groupDao.remove(groupId).done(function(){
				refreshInfo.call(view);
			});
		},
		"click; .add-contact" : function(e){
			var view = this;
			var groupctn = $(e.currentTarget).closest(".group-ctn");
			var groupId = groupctn.attr("data-entity-id") || "01";
			brite.display("ContactPopupView","body",{groupId:groupId});
		},
		"click; .delete-contact" : function(e){
			var view = this;
			var contactId = $(e.currentTarget).closest(".contact-info").find(".contactId").text();
			contactDao.remove(contactId).done(function(){
				refreshInfo.call(view);
			});
		},
		"click; .edit-contact" : function(e){
			var view = this;
			var info = {};
			var ctn = $(e.currentTarget).closest(".contact-info");
			info.id = ctn.find(".contactId").text();
			info.name = ctn.find(".contactName").text();
			info.address = ctn.find(".address").text();
			brite.display("ContactPopupView","body",info);
		}
	},
	docEvents: {
		"DO_REFRESH": function () {
			var view = this;
			refreshInfo.call(view);
		}
	}
});


	function refreshInfo(){
		var view = this;
		view.$content.bEmpty();
		groupDao.list().done(function(groupList){
			for(var i=0;i<groupList.length;i++){
				var html = render("group-items",groupList[i]);
				view.$content.append(html);
			}
		});

		contactDao.list().done(function(contactList){
			for(var i=0;i<contactList.length;i++){
				view.$content.find(".group-ctn").each(function(){
					var groupId = $(this).attr("data-entity-id");
					var $contactItem = $(this).find(".contact-info");
					if(groupId == contactList[i].groupId){
						var html = render("contact-items",contactList[i]);
						$contactItem.append(html);
					}
				});
			}
		});
	}
})();