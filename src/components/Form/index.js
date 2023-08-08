import { Form } from './styles';
import { IndexComponent } from '../Index';
import { Step1 } from '../steps/step 1';
import { Step2 } from '../steps/step 2';
import { Step3 } from '../steps/step 3';
import { Step4 } from '../steps/step 4';
import { UserForm } from '../../hooks/form';

export const FormComponent = () => {
  const steps = [
    {
      title: 'your info',
      component: <Step1 />,
    },
    {
      title: 'select plan',
      component: <Step2 />,
    },
    {
      title: 'add-ons',
      component: <Step3 />,
    },
    {
      title: 'summary',
      component: <Step4 />,
    },
  ];

  const { currentStep, currentComponent, changeSteps } = UserForm(steps);

  return (
    <Form>
      <aside>
        {steps.map((ele, index) => (
          <IndexComponent key={ele.title} selected={index == currentStep? true : false} title={ele.title} number={index} />
        ))}
      </aside>
      <div className="step-container">
        {currentComponent}

        <div className="container-buttons">
          {
            currentStep>0 && <button type="submit" onClick={(e) => changeSteps(currentStep - 1, e)} className='back'>Go back</button>
          }
          
          <button type="submit" onClick={(e) => changeSteps(currentStep + 1, e)}  className='next'>Next Step</button>
        </div>
      </div>
    </Form>
  );
};
