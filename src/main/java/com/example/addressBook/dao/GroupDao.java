package com.example.addressBook.dao;

import java.util.Comparator;

import com.example.addressBook.entity.Group;
import com.google.inject.Singleton;

@Singleton
public class GroupDao extends BaseDao<Group> {

    public final static Comparator<Group> SORT_BY_TITLE = new Comparator<Group>() {
        @Override
        public int compare(Group o1, Group o2) {
            return o1.getName().compareTo(o2.getName());
        }
    };

    public GroupDao(){
        defaultSort = SORT_BY_TITLE;
    }


}
