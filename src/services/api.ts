const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

export const contactApi = {
    getAllContactsAPI: BASE_URL + '/api/get-all-contacts',
    addContactAPI: BASE_URL + '/api/add-contacts',
    deleteContactAPI: BASE_URL + '/api/delete-contacts',
    updateContactAPI: BASE_URL + '/api/update-contacts',
}