Handlebars.templates = Handlebars.templates || {};
function render(templateName,data){
  var tmpl = Handlebars.templates[templateName];
  if (!tmpl){
    tmpl = Handlebars.compile($("#" + templateName).html());
    Handlebars.templates[templateName] = tmpl;
  }
  return tmpl(data);
}

var main = main || {};
(function(){

  var defaultContact = [
    {id:"01",name:"John",address:"john@gmail.com",groupId:"01"},
    {id:"02",name:"Kim",address:"kim@gmail.com",groupId:"02"}
  ];

  var defaultGroups = [
    {id:"01",title:"Inbox"},
    {id:"02",title:"Important"}
  ];

  contactDao = brite.registerDao(new brite.InMemoryDaoHandler("Contact",defaultContact));

  groupDao = brite.registerDao(new brite.InMemoryDaoHandler("Group",defaultGroups));


})();