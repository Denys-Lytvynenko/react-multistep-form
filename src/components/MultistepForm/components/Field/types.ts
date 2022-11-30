import { InputHTMLAttributes } from "react";

export type FieldProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;
