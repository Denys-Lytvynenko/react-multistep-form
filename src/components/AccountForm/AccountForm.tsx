import { FC } from "react";

import { AccountFormProps } from "./types";

import FormWrapper from "../FormWrapper/FormWrapper";
import Field from "../MultistepForm/components/Field/Field";

const AccountForm: FC<AccountFormProps> = ({
    email,
    password,
    updateFields,
}) => (
    <FormWrapper title="Account form">
        <Field
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            autoFocus
            required
        />

        <Field
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
            required
        />
    </FormWrapper>
);

export default AccountForm;
