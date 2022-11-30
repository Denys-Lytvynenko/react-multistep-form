import { FC } from "react";

import { FieldProps } from "./types";

import "./Field.sass";

const Field: FC<FieldProps> = (props) => {
    const { type, name, label, value, onChange, className, required } = props;

    return (
        <div className={"form-input" + (className ? className : "")}>
            <label htmlFor={name}>{label}</label>

            <input
                {...props}
                type={type}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};
export default Field;
