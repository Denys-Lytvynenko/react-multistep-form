import { FC } from "react";

import { AccountFormProps } from "./types";

import FormWrapper from "../FormWrapper/FormWrapper";

const AccountForm: FC<AccountFormProps> = ({
    email,
    password,
    updateFields,
}) => (
    <FormWrapper title="Account form">
        <label htmlFor="email">Email</label>
        <input
            type="text"
            autoFocus
            required
            id="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
        />

        <label htmlFor="password">Password</label>
        <input
            type="text"
            required
            id="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
        />
    </FormWrapper>
);

export default AccountForm;
