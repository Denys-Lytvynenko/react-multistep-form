import { FC, FormEvent, useState } from "react";

import { useMultistepForm } from "./hooks/useMultistepForm";
import { FormData } from "./types";

import ProgressBar from "./components/ProgressBar/ProgressBar";
import AccountForm from "../AccountForm/AccountForm";
import AddressForm from "../AddressForm/AddressForm";
import UserForm from "../UserForm/UserForm";

import "./MultistepForm.sass";

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    zip: "",
    email: "",
    password: "",
};

const MultistepForm: FC = () => {
    const [data, setData] = useState<FormData>(INITIAL_DATA);

    const updateFields = (fields: Partial<FormData>) => {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    };

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        next,
        back,
    } = useMultistepForm([
        <UserForm {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields} />,
        <AccountForm {...data} updateFields={updateFields} />,
    ]);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (!isLastStep) return next();

        alert("Successful Account Creation");
    };

    return (
        <div className="multistep-form">
            <form onSubmit={submitHandler}>
                <ProgressBar
                    currentStep={currentStepIndex + 1}
                    allSteps={steps.length}
                />

                {step}

                <div
                    style={{
                        marginTop: "1rem",
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "flex-end",
                    }}
                >
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}

                    <button type="submit">
                        {isLastStep ? "Finish" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MultistepForm;
