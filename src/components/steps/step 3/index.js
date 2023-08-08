import { Step } from './styles';
import { InputFieldComponent } from '../../InputField';

export const Step3 = () => {
  return (
    <Step>
      <div className="container-texts">
          <h3>3</h3>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className="container-inputs">
          <InputFieldComponent label={'Name'} placeholder={'Vanessa Mint'} />
          <InputFieldComponent
            label={'Email Address'}
            placeholder={'vanessamint@'}
          />
          <InputFieldComponent
            label={'Phone Number'}
            placeholder={'e.g. +1 234 567 890'}
          />
        </div>
    </Step>
  );
};
