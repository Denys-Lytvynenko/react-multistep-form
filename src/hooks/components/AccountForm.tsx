import { FC } from "react";
import FormWrapper from "./FormWrapper";

type AccountData = {
    email: string;
    password: string;
};

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void;
};

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
