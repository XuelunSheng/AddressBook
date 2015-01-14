(function($){

    function ContactDaoHandler(entityName) {
        this._entityName = entityName;
    }

    ContactDaoHandler.prototype.entityType = function(){
        return this._entityName;
    };

    ContactDaoHandler.prototype.list = function(){
        $.ajax({type:"Get",
            url:"daoContactList.json",
            dataType: "json"}).done(function(data){
            if (typeof data.deletedId !== "undefined"){
                return data;
            }else{
                console.log("error, data unknown",data);
            }
        });
    };

    ContactDaoHandler.prototype.delete = function(contactId){
        $.ajax({type:"POST",
            url:"daoContactDelete.do",
            dataType: "json",
            data:{id:contactId}}).done(function(data){
            if (typeof data.deletedId !== "undefined"){
                return data;
            }else{
                console.log("error, data unknown",data);
            }
        });
    };

    ContactDaoHandler.prototype.get = function(contactId){
        $.ajax({type:"GET",
            url:"daoContactGet.json",
            dataType: "json",
            data:{id:contactId}}).done(function(data){
            if (typeof data.deletedId !== "undefined"){
                return data;
            }else{
                console.log("error, data unknown",data);
            }
        });
    };

    ContactDaoHandler.prototype.create = function(name,address){
        $.ajax({type:"POST",
            url:"daoContactCreate.do",
            dataType: "json",
            data:{name:name,address:address}}).done(function(data){
            if (typeof data.id !== "undefined"){
                return data;
            }else{
                console("error, data unknown",data);
            }
        });
    };

    ContactDaoHandler.prototype.update = function(id,name,address){
        $.ajax({type:"POST",
            url:"daoContactCreate.do",
            dataType: "json",
            data:{id:id,name:name,address:address}}).done(function(data){
            if (typeof data.id !== "undefined"){
                return data;
            }else{
                console("error, data unknown",data);
            }
        });
    };

    brite.ContactDaoHandler = ContactDaoHandler;
})();