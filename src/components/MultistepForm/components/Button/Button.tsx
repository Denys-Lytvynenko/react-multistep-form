import { FC } from "react";

import { ButtonProps } from "./types";

import "./Button.sass";

const Button: FC<ButtonProps> = (props) => {
    const { className, children } = props;

    return (
        <button
            {...props}
            className={"form-button" + (className ? className : "")}
        >
            {children}
        </button>
    );
};

export default Button;
