package com.example.addressBook.entity;

public class Group extends BaseEntity {

    private String name;

    public Group(String name){
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

}
