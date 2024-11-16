import { apiConnector } from "../ApiConnector";

const {
    getAllContactsAPI,
    addContactAPI,
    deleteContactAPI,
    updateContactAPI,
} = require('../api');

export async function getContacts(){
    try {
        const response = await apiConnector({method: "GET", url: getAllContactsAPI, bodyData: null, headers: null, params: null});
        if(response.data.success){
            return response.data.contacts;
        }else{

        }
    } catch (error) {
        
    }
}

export async function addContact(contact: any){    
    try {
        const response = await apiConnector({method: "POST", url: addContactAPI, bodyData: contact, headers: null, params: null});
        if(response.data.success){
            return response.data.contact;
        }else{
            
        }
    } catch (error) {
        
    }
}

export async function deleteContact(id: any){
    try {
        const response = await apiConnector({method: "DELETE", url: `${deleteContactAPI}/${id}`, bodyData: null, headers: null, params: null});
        if(response.data.success){
            return response.data.message;
        }else{
            
        }
    } catch (error) {
        
    }
}

export async function updateContact(id: any, contact: any){
    try {
        const response = await apiConnector({method: "PUT", url: `${updateContactAPI}/${id}`, bodyData: contact, headers: null, params: null});
        if(response.data.success){
            return response.data.contact;
        }else{
            
        }
    } catch (error) {
        
    }
}   