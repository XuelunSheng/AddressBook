package com.example.addressBook.web;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;

import com.britesnow.snow.web.handler.annotation.WebActionHandler;
import com.britesnow.snow.web.handler.annotation.WebModelHandler;
import com.britesnow.snow.web.param.annotation.WebModel;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.addressBook.dao.GroupDao;
import com.example.addressBook.entity.Group;
import com.google.inject.Singleton;


@Singleton
public class GroupWebHandlers {

    @Inject
    private GroupDao groupDao;

    @WebModelHandler(startsWith="/daoGroupList")
    public void daoGroupList(@WebModel Map model){
        model.put("groupList", groupDao.list());
    }

    @WebModelHandler(startsWith="/daoGroupGet")
    public void daoGroupGet(@WebModel Map model,@WebParam("id")Long id){
        model.put("result", groupDao.get(id));
    }

    @WebModelHandler(startsWith="/daoGroupUpdate")
    public Map daoGroupUpdate(@WebParam("id")Long id,@WebParam("name")String name){
        Group group = new Group(name);
        group.setId(id);
        Group createdGroup = groupDao.update(group);
        Map m = new HashMap();
        if (createdGroup != null){
            m.put("deletedId", createdGroup.getId());
        }else{
            m.put("nodelete",true);
        }
        return m;
    }

    @WebActionHandler
    public Group daoGroupCreate(@WebParam("name")String name, @WebParam("address")String address){
        Group group = groupDao.create(new Group(name));
        return group;

    }


    @WebActionHandler
    public Map daoGroupDelete(@WebParam("id")Long groupId){
        Group deletedGroup = groupDao.delete(groupId);

        Map m = new HashMap();
        if (deletedGroup != null){
            m.put("deletedId", deletedGroup.getId());
        }else{
            m.put("nodelete",true);
        }

        return m;
    }



}
