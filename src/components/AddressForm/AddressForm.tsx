import { FC } from "react";

import { AddressFormProps } from "./types";

import FormWrapper from "../FormWrapper/FormWrapper";
import Field from "../MultistepForm/components/Field/Field";

const AddressForm: FC<AddressFormProps> = ({
    street,
    city,
    zip,
    updateFields,
}) => (
    <FormWrapper title="Address form">
        <Field
            label="Street"
            type="text"
            name="street"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
            autoFocus
            required
        />

        <Field
            label="City"
            type="text"
            name="city"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            required
        />

        <Field
            label="Zip"
            type="number"
            name="zip"
            value={zip}
            onChange={(e) => updateFields({ zip: e.target.value })}
            required
        />
    </FormWrapper>
);

export default AddressForm;
