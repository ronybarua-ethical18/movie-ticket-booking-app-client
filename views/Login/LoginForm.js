import { Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import FormButton from "../../components/Button/FormButton";
import FormInput from "../../components/FormInput/FormInput";
import styles from "./Login.module.css";
import { useMutation } from "@apollo/client";
import { useForm } from "../../utilities/hooks/useForm";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";
const LoginForm = () => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });
  const router = useRouter();
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      context.login(result.data.login);
      router.push("/");
    },
    onError(err) {
      if (err) setErrors(err?.graphQLErrors[0]?.extensions?.errors);
      console.log(err)
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }
  return (
    <Grid item sm={10}>
      <form>
        <FormInput
          type="text"
          placeholder="user name"
          name="username"
          label="User name"
          value={values.username}
          onChange={onChange}
        />
        <FormInput
          type="password"
          placeholder="password"
          name="password"
          label="Password"
          value={values.password}
          onChange={onChange}
        />
        <div style={{ display: "flex", justifyContent: "end", marginTop: 20 }}>
          <FormButton
            onClick={onSubmit}
            className={styles.btnGrid}
            text="Login"
          />
        </div>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className={styles.errorMessages}>
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </Grid>
  );
};

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      email
      createdAt
      token
    }
  }
`;

export default LoginForm;
