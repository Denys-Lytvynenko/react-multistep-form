import { FC } from "react";

import { FormWrapperProps } from "./types";

import "./FormWrapper.sass";

const FormWrapper: FC<FormWrapperProps> = ({ title, children }) => (
    <>
        <h2 className="form-title">{title}</h2>

        <div className="form-wrapper">{children}</div>
    </>
);

export default FormWrapper;
