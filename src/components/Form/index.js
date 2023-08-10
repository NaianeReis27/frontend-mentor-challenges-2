import { Form } from './styles';
import { IndexComponent } from '../Index';

import { useContext } from 'react';
import { PlanContext } from '../../context/context';
export const FormComponent = () => {
  const {
    currentStep,
    steps,
    changeSteps,
    handleSubmit,
    onSubmitForm1,
    onSubmitForm2,
    onSubmitForm3,
    onSubmit,
  } = useContext(PlanContext);

  const decideOnSubmit = () => {
    if (currentStep === 0) {
      return onSubmitForm1;
    } else if (currentStep === 1) {
      return onSubmitForm2;
    } else if (currentStep === 2) {
      return onSubmitForm3;
    } else if (currentStep === 3) {
      return onSubmit;
    }
  };

  return (
    <Form onSubmit={handleSubmit(decideOnSubmit())}>
      <aside>
        {steps.map((ele, index) => (
          <IndexComponent
            key={ele.title}
            selected={index == currentStep ? true : false}
            title={ele.title}
            number={index}
          />
        ))}
      </aside>
      <div className="step-container">
        {steps[currentStep].component}

        <div className="container-buttons">
          {currentStep > 0 && (
            <button
              onClick={(e) => changeSteps(currentStep - 1, e)}
              className="back"
            >
              Go back
            </button>
          )}

          <button type="submit" className="next">
            {currentStep < 3 ? 'Next Step' : 'Confirm'}
          </button>
        </div>
      </div>
    </Form>
  );
};
