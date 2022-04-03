import TextField from "@material-ui/core/TextField";
import { Controller,useForm,useFormState } from "react-hook-form";
import React from "react";

export const FormInputText = ({ name, label, rules, control,errors }) => {
  const register = useForm();
    return (
      <Controller
        name={name}
        control={control}
        rules={ rules }
        defaultValue=""
        render={({ field: { onChange, value,ref } }) => (
          <div>
            <TextField
              defaultValue=""
              label={label}
              variant="filled"
              value={value}
              onChange={onChange}
              inputRef={ref}
            />
          </div>
        )}
      />
      )
}