import { contactApi } from "../api";
import { apiConnector } from "../ApiConnector";
import { enqueueSnackbar } from "notistack";
const {
    getAllContactsAPI,
    addContactAPI,
    deleteContactAPI,
    updateContactAPI,
} = contactApi;

export async function getContacts(){
    try {
        const response = await apiConnector({method: "GET", url: getAllContactsAPI, bodyData: null, headers: null, params: null});
        // console.log(response);
        if(response.data.success){
            return response.data.contacts;
        }else{
            throw new Error(response.data.message);
        }
    } catch (error: any) {
        enqueueSnackbar(error.response.data.message, {
            variant: "error",
        });
    }
    return null;
}

export async function addContact(contact: any){    
    try {
        const response = await apiConnector({method: "POST", url: addContactAPI, bodyData: contact, headers: null, params: null});
        if(response.data.success){
            enqueueSnackbar(response.data.message, {
                variant: "success",
              });
            return response.data.contact;
        }else{
            throw new Error(response.data.message);
        }
    } catch (error: any) {
        enqueueSnackbar(error.response.data.message, {
            variant: "error",
        });
    }
}

export async function deleteContact(id: any){
    try {
        const response = await apiConnector({method: "DELETE", url: `${deleteContactAPI}/${id}`, bodyData: null, headers: null, params: null});
        if(response.data.success){
            enqueueSnackbar(response.data.message, {
                variant: "success",
              });
            return response.data.message;
        }else{
            throw new Error(response.data.message);
        }
    } catch (error: any) {
        console.log(error);
        enqueueSnackbar(error.response.data.message, {
            variant: "error",
        });
    }
}

export async function updateContact(id: any, contact: any){
    try {
        const response = await apiConnector({method: "PUT", url: `${updateContactAPI}/${id}`, bodyData: contact, headers: null, params: null});
        if(response.data.success){
            enqueueSnackbar(response.data.message, {
                variant: "success",
              });
            //   console.log(response.data.updatedContact);
            return response.data.updatedContact;
        }else{
            throw new Error(response.data.message);
        }
    } catch (error: any) {
        console.log(error);
        enqueueSnackbar(error.response.data.message, {
            variant: "error",
        });
    }
}   