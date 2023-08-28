import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { TextField } from "@mui/material";

const PhoneMaskCustom = forwardRef((props, ref) => {
  const { onChange, handleValid, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+{38}(000)000-00-00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onComplete={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
export default function PhoneField(props) {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: PhoneMaskCustom,
      }}
    />
  );
}
