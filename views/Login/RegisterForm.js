import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import FormButton from "../../components/Button/FormButton";
import FormInput from "../../components/FormInput/FormInput";
import styles from "./Login.module.css";
import { useMutation } from "@apollo/client";
import { useForm } from "../../utilities/hooks/useForm";
import gql from "graphql-tag";
import { useRouter } from "next/router";
const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const { onSubmit, onChange, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      router.push("/");
      // context.login(userData)
      console.log(userData);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0]?.extensions?.errors);
      console.log(err);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <Grid item sm={10}>
      <form className={loading ? 'loading' : ""}>
        <FormInput
          type="text"
          placeholder="user name"
          name="username"
          label="User name"
          value={values.username}
          onChange={onChange}
        />
        <FormInput
          type="email"
          placeholder="Your email"
          name="email"
          label="Email"
          value={values.email}
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
        <FormInput
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
        />
        <div style={{ display: "flex", justifyContent: "end", marginTop: 20 }}>
          {loading && <FormButton
            onClick={onSubmit}
            className={styles.btnGrid}
            text="Register"
            disabled
          />}
          {!loading && <FormButton
            onClick={onSubmit}
            className={styles.btnGrid}
            text="Register"
          />}
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      username
      email
      createdAt
      token
    }
  }
`;

export default RegisterForm;
