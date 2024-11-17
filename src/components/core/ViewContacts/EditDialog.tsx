import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { Contact } from "../../../lib";
import { contactSchema } from "../../../lib/zod";
import { ZodError } from "zod";

interface EditContactDialogProps {
  open: boolean;
  contact: Contact | null;
  onClose: () => void;
  onSave: (updatedContact: Contact) => void;
}

const EditContactDialog: React.FC<EditContactDialogProps> = ({
  open,
  contact,
  onClose,
  onSave,
}) => {
  const [updatedContact, setUpdatedContact] = React.useState<Contact | null>(contact);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    setUpdatedContact(contact);
  }, [contact]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updatedContact) {
      setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
    }
  };

  // const validateContact = (): boolean => {
  //   console.log("in validation");
  //   if (updatedContact) {
  //     try {
  //       contactSchema.parse(updatedContact);
  //       setErrors({});
  //       return true;
  //     } catch (error) {
  //       console.log(error);
  //       if (error instanceof ZodError) {
  //         const fieldErrors: Record<string, string> = {};
  //         error.errors.forEach((err) => {
  //           if (err.path.length > 0) {
  //             fieldErrors[err.path[0] as string] = err.message;
  //           }
  //         });
  //         setErrors(fieldErrors);
  //       }
  //       return false;
  //     }
  //   }
  //   return false;
  // };

  const handleSave = () => {
    // const isvalid = validateContact();
    // console.log(isvalid);
    if ( updatedContact) {
      onSave(updatedContact);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        {updatedContact && (
          <>
            <TextField
              margin="dense"
              label="First Name"
              name="firstName"
              value={updatedContact.firstName}
              onChange={handleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Last Name"
              name="lastName"
              value={updatedContact.lastName}
              onChange={handleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              value={updatedContact.email}
              onChange={handleInputChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              value={updatedContact.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Job Title"
              name="jobTitle"
              value={updatedContact.jobTitle}
              onChange={handleInputChange}
              error={!!errors.jobTitle}
              helperText={errors.jobTitle}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Company"
              name="company"
              value={updatedContact.company}
              onChange={handleInputChange}
              error={!!errors.company}
              helperText={errors.company}
              fullWidth
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditContactDialog;
