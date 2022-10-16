import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import TextInput from "../components/TextInput/TextInput";
import useFormValidation from "../FormValidation/useFormValidation";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      // se tiver entra no app antes de aparecer tela pro usuario
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

interface IUser {
  email: string;
  password: string;
}

export default function Login(props: any) {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
    verifyPassword: false,
    shouldRemember: true,
  });
  const [isLogging, setIsLogging] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [verifyLogin, setVerifyLogin] = useState(false);
  const [verifyInputType, setVerifyInputType] = useState(true)

  const { validateError, handleErrorMessage } = useFormValidation<IUser>('user')

  const router = useRouter();

  const { data: session, status } = useSession();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUserLogin({
      ...userLogin,
      [name]: value
    });
  }

  const onHandleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target
    setUserLogin({
      ...userLogin,
      [name]: checked
    })
    setVerifyInputType(!verifyInputType)
    props.onHandleCheck(checked)
  }

  // const handleClick = async (): Promise<any> => {
  //   await validateError(userLogin)
  //   const { email, password } = userLogin
  //   const data = { email, password }
  //   const postAxiosInfo = await postAxiosInfoData(data)
  //   if (
  //     (Boolean((postAxiosInfo?.message?.includes('400')))) ||
  //     (Boolean((postAxiosInfo?.message?.includes('401'))))
  //   ) {
  //     setVerifyLogin(true)
  //     return
  //   }
  //   const { token, name } = postAxiosInfo.data
  //   const user = { token, name }
  //   const getAxiosInfo = await getAxiosRole(token)
  //   const { role } = getAxiosInfo.data
  //   localStorage.setItem('user', JSON.stringify(user));
  // }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    props.onSubmit(userLogin)
  }

  return (
    <section>
      <form
        data-testid="login-form"
        onSubmit={handleSubmit}
      >
        <TextInput
          dataTestId="login-input-email"
          label="Email"
          type="email"
          name="email"
          value={ userLogin.email }
          onChange={ onHandleChange }
          { ...handleErrorMessage('email', 'Insira o email') }
        />

        <TextInput
          dataTestId="login-input-password"
          label="Senha"
          type={ verifyInputType ? 'password' : 'text' }
          name="password"
          value={ userLogin.password }
          onChange={ onHandleChange }
          { ...handleErrorMessage('password') }
        />

        <article>
          <label
            htmlFor="login-input-verify-password"
          >
            <input
              data-testid="login-input-verify-password"
              name="verifyPassword"
              type="checkbox"
              checked={ userLogin.verifyPassword }
              onChange={ onHandleCheck }
            />
            Verificar password
          </label>
        </article>

        <label
          htmlFor="login-input-remember"
        >
          <input
            data-testid="login-input-remember"
            name="shouldRemember"
            type="checkbox"
            checked={ userLogin.shouldRemember }
            onChange={ onHandleCheck }
          />
          Lembrar-me
        </label>

        <Button
          type="submit"
          data-testid="login-button-submit"
          // onClick={ handleClick }
        >
          Entrar
        </Button>
        {
          verifyLogin && (
            <p>
              Email ou senha inválidos.
            </p>
          )
        }
        <article>
          <h4>Não tem uma conta?</h4>
          <Link href="/register">Cadastre-se</Link>
        </article>
      </form>
    </section>
  );
}
