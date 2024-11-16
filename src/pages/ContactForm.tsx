import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { contactSchema } from "../lib/zod";

type ContactFormData = z.infer<typeof contactSchema>;

const Input = ({ field, label, error, helperText }: any) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-slate-200">{label}</label>
            <input
                {...field}
                type="text"
                className="mt-1 block w-full py-2 px-2 rounded-md outline-none bg-transparent focus:bg-[rgba(255,255,255,0.2)] text-white border border-[#3a3c3d] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {error && <div className="text-red-500">{helperText}</div>}
        </div>
    );
};

const ContactForm = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            company: "",
            jobTitle: "",
        },
    });

    const submitHandler = (data: ContactFormData) => {
        // onSubmit(data); // Pass data to parent or API
        reset(); // Clear the form after submission
    };

    return (
        <div className=" absolute w-full h-full flex justify-center items-center ">
            <form
                className="w-1/2 bg-[rgba(255,255,255,0.1)] border-[rgba(255, 255, 255, 0.2)] p-8 rounded-xl backdrop-blur-sm"
                onSubmit={handleSubmit(submitHandler)}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <Input 
                                    field={field}
                                    label="First Name"
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                field={field}
                                label="Last Name"
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                field={field}
                                label="Email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <Input
                                field={field}
                                label="Phone Number"
                                error={!!errors.phoneNumber}
                                helperText={errors.phoneNumber?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="company"
                            control={control}
                            render={({ field }) => (
                                <Input
                                field={field}
                                label="Company"
                                error={!!errors.company}
                                helperText={errors.company?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="jobTitle"
                            control={control}
                            render={({ field }) => (
                                <Input
                                field={field}
                                label="Job Title"
                                error={!!errors.jobTitle}
                                helperText={errors.jobTitle?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} className="text-center">
                        <Button type="submit" variant="contained"
                            sx={{
                                backgroundColor: '#3a3c3d',
                                color: '#fff',
                                borderRadius: '8px',
                                fontWeight: '500',
                                fontSize: '14px',
                                padding: '12px 24px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#4b4d4f',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    padding: '12px 24px',
                                    scale: '1.1',
                                },
                            }}
                        >
                            Add Contact
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>

    );
};

export default ContactForm;
