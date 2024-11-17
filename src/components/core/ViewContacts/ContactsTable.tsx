import React from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Typography,
    TablePagination,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Contact } from "../../../lib";

interface ContactsTableProps {
    contacts: Contact[];
    loading: boolean;
    onEdit: (contact: Contact) => void;
    onDelete: (id: string) => void;
}

const ContactsTable: React.FC<ContactsTableProps> = ({
    contacts,
    loading,
    onEdit,
    onDelete,
}) => {

    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box
            sx={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "1px solid rgba(255, 255, 255)",
                borderRadius: "10px",
            }}
        >
            <TableContainer
                component={Paper}
                sx={{
                    width: "100%",
                    maxHeight: "70vh", 
                    overflow: "auto", 
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                }}
            >
                <Typography variant="h6" sx={{ padding: 2, color: "white" }} >
                    Contact List
                </Typography>
                <Table
                    stickyHeader 
                    sx={{
                        borderCollapse: "separate",
                    }}
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                bgcolor: "rgba(255, 255, 255, 0.8)",
                                "& .MuiTableCell-head": {
                                    color: "black",
                                    fontWeight: "bold",
                                },
                            }}
                        >
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : (
                            contacts
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((contact, index) => (
                                    <TableRow
                                        key={contact._id}
                                        sx={{
                                            backgroundColor:
                                                index % 2 === 0
                                                    ? "rgba(255, 255, 255, 0.2)"
                                                    : "rgba(255, 255, 255, 0.3)",
                                            "&:hover": {
                                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                                "& .edit-icon": {
                                                    color: "primary.main",
                                                },
                                                "& .delete-icon": {
                                                    color: "red",
                                                },
                                            },
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        <TableCell>{contact.firstName}</TableCell>
                                        <TableCell>{contact.lastName}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.phone}</TableCell>
                                        <TableCell>{contact.jobTitle}</TableCell>
                                        <TableCell>{contact.company}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                className="edit-icon"
                                                onClick={() => onEdit(contact)}
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "primary.main",
                                                        "& svg": {
                                                            color: "white",
                                                        },
                                                    },
                                                }}
                                            >
                                                <Edit />
                                            </IconButton>
                                            <IconButton
                                                className="delete-icon"
                                                onClick={() => onDelete(contact._id)}
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "red",
                                                        "& svg": {
                                                            color: "white",
                                                        },
                                                    },
                                                }}
                                            >
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={contacts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    color: "#fff",
                }}
            />

        </Box>
    );
};

export default ContactsTable;