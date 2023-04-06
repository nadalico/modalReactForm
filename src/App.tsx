import { useState } from "react";
import { Box, Button } from "@mui/material";
import * as z from "zod";
import Form from "./Form";
import Input from "./Input";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const schema = z.object({
  firstName: z.string().min(2, "Too short").max(20, "Too long"),
  lastName: z.string().min(2, "Too short").max(20, "Too long"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Too short")
});

const App = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data: FormValues) => {
    console.log(data);
    alert(JSON.stringify(data));
    setFormValues(data);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Form
        //title="Agregar gastos vehículo"
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={formValues}
      >
        <Box m={2}>
          <Input
            label="First Name"
            name="firstName"
            fullWidth
            //control={methods.control}
          />
          <Input
            label="Last Name"
            name="lastName"
            fullWidth
            //control={methods.control}
          />
          <Input
            label="Email"
            name="email"
            fullWidth
            // control={methods.control}
          />
          <Input
            label="Password"
            name="password"
            fullWidth
            //control={methods.control}
          />
        </Box>
      </Form>
    </>
  );
};

export default App;
