import { useState, createContext, useEffect } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { Step1 } from '../components/steps/step 1';
import { Step2 } from '../components/steps/step 2';
import { Step3 } from '../components/steps/step 3';
import { Step4 } from '../components/steps/step 4';
export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
 
  const [currentStep, setCurrentStep] = useState(0);
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

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    plan: { id: 1, name: 'Arcade', value: '9'},
    billing: 'monthly',
    addons: [
      { name: 'Online service', acquired: false, value: 1 },
      { name: 'Large Storage', acquired: false, value: 2 },
      { name: 'Customizable profile', acquired: false, value: 2 },
    ],
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm({ defaultValues: defaultValues });
  const { fields, append, remove } = useFieldArray({
    name: 'addons',
    control,
  });
  const onSubmitForm1 = (data, e) => {
    console.log('Form 1 data:', data);
    changeSteps(currentStep + 1, e);
  };

  const onSubmitForm2 = (data, e) => {
    console.log('Form 2 data:', data);
    changeSteps(currentStep + 1, e);
  };

  const onSubmitForm3 = (data, e) => {
    console.log('Form 3 data:', data);
    changeSteps(currentStep + 1, e);
  };

  const onSubmit = (data) => {
    console.log('Form 4 data:', data);
    console.log('finalizado');
  };

  const changeSteps = (i, event) => {
    event.preventDefault();

    if (i < 0 || i >= steps.length) {
      return;
    }

    setCurrentStep(i);
  };

  return (
    <PlanContext.Provider
      value={{
        register,
        errors,
        changeSteps,
        handleSubmit,
        onSubmitForm1,
        onSubmitForm2,
        onSubmitForm3,
        onSubmit,
        currentStep,
        steps,
        setValue,
        getValues,
        watch,
        fields,
        append,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
