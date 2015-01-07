package com.example.addressBook.entity;

public class Contact extends BaseEntity {

    private String name;
    private String address;
    
    public Contact(){};
    
    public Contact(String name, String address){
        this.name = name;
        this.address = address;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    
    
}
