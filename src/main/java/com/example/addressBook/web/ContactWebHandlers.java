package com.example.addressBook.web;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;

import com.britesnow.snow.web.handler.annotation.WebActionHandler;
import com.britesnow.snow.web.handler.annotation.WebModelHandler;
import com.britesnow.snow.web.param.annotation.WebModel;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.addressBook.dao.ContactDao;
import com.example.addressBook.entity.Contact;
import com.google.inject.Singleton;


@Singleton
public class ContactWebHandlers {

    @Inject
    private ContactDao contactDao;

    @WebModelHandler(startsWith="/daoContactList")
    public void daoContactList(@WebModel Map model){
       model.put("contactList", contactDao.list());
    }

    @WebModelHandler(startsWith="/daoContactGet")
    public void daoContactGet(@WebModel Map model,@WebParam("id")Long id){
        model.put("result", contactDao.get(id));
    }

    @WebModelHandler(startsWith="/daoContactUpdate")
    public Map daoContactUpdate(@WebParam("id")Long id,@WebParam("name")String name, @WebParam("address")String address){
        Contact contact = new Contact(name, address);
        contact.setId(id);
        Contact createdContact = contactDao.update(contact);
        Map m = new HashMap();
        if (createdContact != null){
            m.put("deletedId", createdContact.getId());
        }else{
            m.put("nodelete",true);
        }
        return m;
    }

    @WebActionHandler
    public Contact daoContactCreate(@WebParam("name")String name, @WebParam("address")String address){
       Contact contact = contactDao.create(new Contact(name,address));
       return contact;

    }


    @WebActionHandler
    public Map daoContactDelete(@WebParam("id")Long contactId){
       Contact deletedContact = contactDao.delete(contactId);

       Map m = new HashMap();
       if (deletedContact != null){
           m.put("deletedId", deletedContact.getId());
       }else{
           m.put("nodelete",true);
       }

       return m;
    }



}
