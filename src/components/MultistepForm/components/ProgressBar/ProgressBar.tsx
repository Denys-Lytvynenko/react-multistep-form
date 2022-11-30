import { FC, Fragment, ReactElement, useMemo } from "react";

import { ProgressBarProps } from "./types";

import "./ProgressBar.sass";

const ProgressBar: FC<ProgressBarProps> = ({ currentStep, allSteps }) => {
    const steps = useMemo(() => {
        let stepsComponents: ReactElement[] = [];

        for (let i = 1; i <= allSteps; i++) {
            stepsComponents.push(
                <Fragment key={i}>
                    {i !== 1 && (
                        <span
                            className={`progress-bar__chain ${
                                i <= currentStep ? "active" : ""
                            }`}
                        />
                    )}

                    <div
                        className={`progress-bar__step ${
                            i <= currentStep ? "active" : ""
                        }`}
                    >
                        {i}
                    </div>
                </Fragment>
            );
        }

        return stepsComponents;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    return <div className="progress-bar">{steps}</div>;
};

export default ProgressBar;
