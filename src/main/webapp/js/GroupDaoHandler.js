(function($){

    function GroupDaoHandler(entityName) {
        this._entityName = entityName;
    }

    GroupDaoHandler.prototype.entityType = function(){
        return this._entityName;
    };

    GroupDaoHandler.prototype.list = function(){alert(2);
        $.ajax({type:"Get",
            url:"daoGroupList.json",
            dataType: "json"}).done(function(data){
            if (typeof data !== "undefined"){
                return data;
            }else{
                console.log("error, data unknown",data);
            }
        });
    };

    GroupDaoHandler.prototype.delete = function(groupId){
        $.ajax({type:"POST",
            url:"daoGroupDelete.do",
            dataType: "json",
            data:{id:groupId}}).done(function(data){
            if (typeof data.deletedId !== "undefined"){
                return data;
            }else{
                console.log("error, data unknown",data);
            }
        });
    };

    GroupDaoHandler.prototype.get = function(groupId){
        $.ajax({type:"GET",
            url:"daoGroupGet.json",
            dataType: "json",
            data:{id:groupId}}).done(function(data){
            if (typeof data !== "undefined"){
                return data;
            }else{
                console.log("error, data unknown",data);
            }
        });
    };

    GroupDaoHandler.prototype.create = function(name,address){
        $.ajax({type:"POST",
            url:"daoGroupCreate.do",
            dataType: "json",
            data:{name:name,address:address}}).done(function(data){
            if (typeof data.id !== "undefined"){
                return data;
            }else{
                console("error, data unknown",data);
            }
        });
    };

    GroupDaoHandler.prototype.update = function(id,name,address){
        $.ajax({type:"POST",
            url:"daoGroupCreate.do",
            dataType: "json",
            data:{id:id,name:name,address:address}}).done(function(data){
            if (typeof data.id !== "undefined"){
                return data;
            }else{
                console("error, data unknown",data);
            }
        });
    };

    brite.GroupDaoHandler = GroupDaoHandler;
})();