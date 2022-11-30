export type UserData = {
    firstName: string;
    lastName: string;
    age: string;
};

export type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
};
