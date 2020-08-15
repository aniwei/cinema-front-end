import { useState } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';
import ModalDialog, { ModalFooter, ModalTransition } from '@atlaskit/modal-dialog';

import Form, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';


import styles from './index.less';
import logo from '../../../../assets/common/logo.png';

const Username = (props) => {
  return <Field
    isRequired
    name="username"
    label="User name"
    defaultValue=""
  >
    {({ fieldProps, error }) => (
      <>
        <TextField autoComplete="off" {...fieldProps} />
        {!error && (
          <HelperMessage>
            You can use letters, numbers & periods.
          </HelperMessage>
        )}
        {error && (
          <ErrorMessage>
            This user name is already in use, try another one.
          </ErrorMessage>
        )}
      </>
    )}
  </Field>
}

const Password = () => {
  return (
    <Field
      name="password"
      label="Password"
      defaultValue=""
      isRequired
      validate={value =>
        value && value.length < 8 ? 'TOO_SHORT' : undefined
      }
    >
      {({ fieldProps, error, valid, meta }) => {
        return (
          <>
            <TextField type="password" {...fieldProps} />
            {error && !valid && (
              <HelperMessage>
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </HelperMessage>
            )}
            {error && (
              <ErrorMessage>
                Password needs to be more than 8 characters.
              </ErrorMessage>
            )}
            {valid && meta.dirty ? (
              <ValidMessage>Awesome password!</ValidMessage>
            ) : null}
          </>
        );
      }}
    </Field>
    
  );
}



export default function SignIn () {
  const [opened, openModal] = useState(false);

  const onSubmit = (data) => {
    console.log('form data', data);

    return new Promise(resolve => {
      openModal(true);
    });
  }

  return <div className={styles.signin}>
    <h1 className={styles.title}>
      Sign In
    </h1>
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Username />
          <Password />
          <CheckboxField name="remember" label="Remember me" defaultIsChecked>
            {({ fieldProps }) => (
              <Checkbox {...fieldProps} label="Always sign in on this device" />
            )}
          </CheckboxField>
          <FormFooter>
            <ButtonGroup>
              <Button appearance="subtle">Cancel</Button>
              <Button type="submit" appearance="primary" isLoading={submitting}>
                Sign In
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
    
    {
      opened ? <ModalDialog 
        heading="Google Authenticator"
        onClose={() => openModal(false)}
      >
        <p>Enter some text then submit the form to see the response.</p>
        <Field label="Google Authorcation" name="google" defaultValue="" isRequired>
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>

        <ModalFooter>
          <Button appearance="primary" type="submit">
            Submit to Console
          </Button>
        </ModalFooter>
      </ModalDialog> : null
    }
  </div>
}