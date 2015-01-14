var app = app || {};

(function(){
    app.contactDao = brite.registerDao(new brite.ContactDaoHandler("Contact"));
    app.groupDao = brite.registerDao(new brite.GroupDaoHandler("Group"));
})();