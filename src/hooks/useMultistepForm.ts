import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () =>
        setCurrentStepIndex((i) => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        });

    const back = () =>
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        });

    const goTo = (index: number): void => setCurrentStepIndex(index);

    const isFirstStep = currentStepIndex === 0;

    const isLastStep = currentStepIndex === steps.length - 1;
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep,
        isLastStep,
        goTo,
        next,
        back,
    };
};
