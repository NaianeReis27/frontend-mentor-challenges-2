import { Step } from './styles';
import { InputFieldComponent } from '../../InputField';

export const Step1 = () => {
  return (
    <Step>
      <div className="container-texts">
        <h3>Personal info</h3>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <div className="container-inputs">
        <InputFieldComponent
          label={'Name'}
          name={'name'}
          placeholder={'Vanessa Mint'}
        />
        <InputFieldComponent
          label={'Email Address'}
          name={'email'}
          placeholder={'vanessamint@'}
        />
        <InputFieldComponent
          label={'Phone Number'}
          name={'phone'}
          placeholder={'e.g. +1 234 567 890'}
        />
      </div>
    </Step>
  );
};
