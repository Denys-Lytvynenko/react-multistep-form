export type AddressData = {
    street: string;
    city: string;
    zip: string;
};

export type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void;
};
