import { useState } from "react";
export const UserForm = (steps) => {
    const [ currentStep, setCurrentStep] = useState(0);

    const changeSteps = (i,event) => {
        event.preventDefault();
        
        if(i<0 || i>= steps.length){
            console.log(currentStep)
            return
        }
        
        setCurrentStep(i)
    }
  return {
    currentStep,
    currentComponent: steps[currentStep].component,
    changeSteps
  };
};
