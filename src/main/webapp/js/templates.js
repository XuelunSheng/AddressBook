Handlebars.templates = Handlebars.templates || {};


// template --- ContactPopupView ---
Handlebars.templates['ContactPopupView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"ContactPopupView\">\n	<div class=\"modal\">\n		<div class=\"modal-dialog\">\n			<div class= \"modal-content\">\n				<div class=\"modal-header\">\n					<div class=\"modal-title\">Add Contact</div>\n				</div>\n				<div class=\"modal-body\">\n					<div class=\"form-group\">\n						<label class=\"control-label\">Name:</label>\n						<input class=\"form-control name\" type=\"text\" value="
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + ">\n					</div>\n					<div class=\"form-group\">\n						<label class=\"control-label\">Address:</label>\n						<input class=\"form-control address\" type=\"text\" value="
    + escapeExpression(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + ">\n					</div>\n				</div>\n				<div class=\"modal-footer\">\n					<button type=\"button\" class=\"btn btn-default cancel\">Cancel</button>\n					<button type=\"button\" class=\"btn btn-primary create\">Save</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true}
);

// template --- GroupPopupView ---
Handlebars.templates['GroupPopupView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"GroupPopupView\">\n	<div class=\"modal\">\n		<div class=\"modal-dialog\">\n			<div class= \"modal-content\">\n				<div class=\"modal-header\">\n					<div class=\"modal-title\">Add Group</div>\n				</div>\n				<div class=\"modal-body\">\n			    	<div class=\"form-group\">\n        				<label class=\"control-label\">Name:</label>\n        				<input class=\"form-control\" type=\"text\">\n        			</div>\n				</div>\n				<div class=\"modal-footer\">\n					<button type=\"button\" class=\"btn btn-default cancel\">Cancel</button>\n					<button type=\"button\" class=\"btn btn-primary create\">Save</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
  },"useData":true}
);

// template --- MainView ---
Handlebars.templates['MainView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"MainView\">\n		<div class=\"MainView-nav\">\n			<h2>Address Book</h2>\n			<button type=\"button\" class=\"btn btn-default add-group\">Add Group</button>\n			<button type=\"button\" class=\"btn btn-default add-contact\">Add Contact</button>\n		</div>\n\n		<div class=\"MainView-content\">\n		</div>\n	</div>";
  },"useData":true}
);

// template --- group-items ---
Handlebars.templates['group-items'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"group-ctn\" data-entity=\"group\" data-entity-id="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + ">\n		<div class=\"group-title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n			<a class=\"btn btn-default delete-group\">Delete</a>\n			<a class=\"btn btn-info add-contact\">Add Contact</a>\n		</div>\n		<div class=\"contact-title\">\n			<div class=\"contactId info\">ID</div>\n			<div class=\"contactName info\">Name</div>\n			<div class=\"address info\">Address</div>\n			<div class=\"edit info\"></div>\n			<div class=\"delete info\"></div>\n		</div>\n		<div class=\"contact-info\">\n\n		</div>\n	</div>";
},"useData":true}
);

// template --- contact-items ---
Handlebars.templates['contact-items'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"contactId info\">"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "</div>\n	<div class=\"contactName info\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n	<div class=\"address info\">"
    + escapeExpression(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + "</div>\n	<a class=\"info edit\"><span class=\"edit-contact btn btn-info\">Edit</span></a>\n	<a class=\"info delete\"><span class=\"delete-contact btn btn-default\">Delete</span></a>";
},"useData":true}
);
