import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  DialogContent,
  DialogActions,
  IconButton
} from "@mui/material";
import { Close as CloseIcon, Save as SaveIcon } from "@mui/icons-material";
import { useEffect } from "react";

type FormProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<any>;
  validationSchema: z.ZodType<any, any>;
  initialValues?: any;
  children?: any;
};

const Form: React.FC<FormProps> = ({
  open,
  onClose,
  onSubmit,
  validationSchema,
  initialValues,
  children
}) => {
  const methods = useForm<any>({
    resolver: zodResolver(validationSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit } = methods;

  useEffect(() => {
    methods.reset();
  }, [open])
  

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="cerrar"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
           
          </Typography>
          <Button autoFocus color="inherit" onClick={handleSubmit(onSubmit)}>
            <IconButton edge="start" color="inherit" aria-label="cerrar">
              <SaveIcon />
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
      <FormProvider {...methods}>
        <form>
          <DialogContent>{children}</DialogContent>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default Form;
