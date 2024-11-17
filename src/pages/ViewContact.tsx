import React, { useState, useEffect } from "react";
import ContactsTable from "../components/core/ViewContacts/ContactsTable";
import EditContactDialog from "../components/core/ViewContacts/EditDialog";
import { getContacts, deleteContact, updateContact } from "../services/operations/contactOperations";
import { enqueueSnackbar } from "notistack";
import { Contact } from "../lib";

const ViewContact: React.FC = () => {

  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleEdit = async (contact: Contact) => {
    setSelectedContact(contact);
    setOpenDialog(true);
  };

  const handleDelete = async(id: string) => {
    const response = await deleteContact(id);
    if (response) {
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    }
    // else {
    //   enqueueSnackbar("Failed to delete contact", {
    //     variant: "error",
    //   });
    // }
  };
  // console.log(contacts)

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedContact(null);
  };

  const handleSaveContact = async(updatedContact: Contact) => {
    const response = await updateContact(updatedContact._id, updatedContact);
    console.log("response ?:", response);
    if (response) {
      setContacts((prev) =>
        prev.map((contact) => (contact._id === updatedContact._id ? response : contact))
      );
      handleCloseDialog();
    }
    else {
      enqueueSnackbar("Failed to update contact", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    ; (async () => {
      setLoading(true);
      const response = await getContacts();
      if (response) {
        setContacts(response);
        setLoading(false);
      }
      else {
        enqueueSnackbar("No Contact Found", {
          variant: "error",
        });
      }
    })();
  }, [])

  return (
    <div className="h-full flex flex-col items-center justify-start mt-5 px-4 sm:px-10">
      <ContactsTable contacts={contacts} loading={loading} onEdit={handleEdit} onDelete={handleDelete} />
      <EditContactDialog
        open={openDialog}
        contact={selectedContact}
        onClose={handleCloseDialog}
        onSave={handleSaveContact}
      />
    </div>
  );
};

export default ViewContact;
