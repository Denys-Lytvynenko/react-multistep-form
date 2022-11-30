export type AccountData = {
    email: string;
    password: string;
};

export type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void;
};
