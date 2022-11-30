import { FC } from "react";

import { UserFormProps } from "./types";

import FormWrapper from "../FormWrapper/FormWrapper";
import Field from "../MultistepForm/components/Field/Field";

const UserForm: FC<UserFormProps> = ({
    firstName,
    lastName,
    age,
    updateFields,
}) => (
    <FormWrapper title="User form">
        <Field
            label="First name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            autoFocus
            required
        />

        <Field
            label="Last name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            required
        />

        <Field
            label="Age"
            type="number"
            name="age"
            value={age}
            onChange={(e) => updateFields({ age: e.target.value })}
            min={1}
            max={130}
            required
        />
    </FormWrapper>
);

export default UserForm;
