import { FC } from "react";

import { UserFormProps } from "./types";

import FormWrapper from "../FormWrapper/FormWrapper";

const UserForm: FC<UserFormProps> = ({
    firstName,
    lastName,
    age,
    updateFields,
}) => (
    <FormWrapper title="User form">
        <label htmlFor="firstName">First Name</label>
        <input
            type="text"
            autoFocus
            required
            id="firstName"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
            type="text"
            required
            id="lastName"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
        />

        <label htmlFor="age">Age</label>
        <input
            type="number"
            required
            min={1}
            max={150}
            id="age"
            value={age}
            onChange={(e) => updateFields({ age: e.target.value })}
        />
    </FormWrapper>
);

export default UserForm;
