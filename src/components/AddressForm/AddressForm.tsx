import { FC } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { AddressFormProps } from "./types";

const AddressForm: FC<AddressFormProps> = ({
    street,
    city,
    zip,
    updateFields,
}) => (
    <FormWrapper title="Address form">
        <label htmlFor="street">Street</label>
        <input
            type="text"
            autoFocus
            required
            id="street"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
        />

        <label htmlFor="city">City</label>
        <input
            type="text"
            required
            id="city"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
        />

        <label htmlFor="zip">Zip</label>
        <input
            type="text"
            required
            id="zip"
            value={zip}
            onChange={(e) => updateFields({ zip: e.target.value })}
        />
    </FormWrapper>
);

export default AddressForm;
