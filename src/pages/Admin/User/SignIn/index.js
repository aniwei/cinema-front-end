import { connect } from 'dva';
import Button, { ButtonGroup } from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import { Redirect } from 'dva/router';

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
    label="用户名"
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
      label="密码"
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



export default connect(({ user }) => {
  return {
    ...user
  }
})(function SignIn (props) {
  const onSubmit = async (data) => {
    const { dispatch, history } = props;
    
    await dispatch({
      type: 'AdminUser/signIn',
      payload: {
        input: data
      }
    });

    history.replace('/admin/ticket/sell');
  }

  const { user } = props;

  if (user) {
    return <Redirect to="/admin" />
  }

  return <div className={styles.signin}>
    <h1 className={styles.title}>
      登陆
    </h1>
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Username />
          <Password />
          <FormFooter>
            <ButtonGroup>
              <Button appearance="subtle">Cancel</Button>
              <Button type="submit" appearance="primary" isLoading={submitting}>
                登陆
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
    
    {/* {
      opened ? <ModalDialog 
        heading="谷歌动态码"
        onClose={() => openModal(false)}
      >
        <p>请输入谷歌动态码</p>
        <Field label="谷歌动态码" name="google" defaultValue="" isRequired>
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>

        <Button appearance="primary" type="submit">
          登陆
        </Button>
      </ModalDialog> : null */}
  </div>
})