import { CSSProperties, FormEvent, useState } from "react";
import AccountForm from "./hooks/components/AccountForm";
import AddressForm from "./hooks/components/AddressForm";
import UserForm from "./hooks/components/UserForm";
import { useMultistepForm } from "./hooks/useMultistepForm";

type FormData = {
    firstName: string;
    lastName: string;
    age: string;
    street: string;
    city: string;
    zip: string;
    email: string;
    password: string;
};

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
const App = () => {
    const [data, setData] = useState(INITIAL_DATA);

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

    const styles: CSSProperties = {
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (!isLastStep) return next();

        alert("Successful Account Creation");
    };

    return (
        <div style={styles}>
            <form onSubmit={submitHandler}>
                <div
                    style={{
                        position: "absolute",
                        top: ".5rem",
                        right: ".5rem",
                    }}
                >
                    {currentStepIndex + 1} / {steps.length}
                </div>

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

export default App;
