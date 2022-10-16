import React, { useState } from 'react'
import TextInput from '../components/TextInput/TextInput';
import { Button } from '@mui/material'
import useFormValidation from '../FormValidation/useFormValidation'
import Link from 'next/link';
// import { postAxiosInfoDataRegister } from '../../services/axios/api'

interface IUser {
  name: string;
  email: string;
  password: string;
}

export default function Register () {
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [userAlreadyExists, setUserAlreadyExists] = useState(false)

  const { validateError, handleErrorMessage } = useFormValidation<IUser>('user')

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUserRegister({
      ...userRegister,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
  }

  // const handleClick = async (): Promise<void> => {
  //   await validateError(userRegister)
  //   const { name, email, password } = userRegister
  //   const postAxiosInfo = await postAxiosInfoDataRegister({
  //     name: name,
  //     email,
  //     password,
  //     role: 'client'
  //   })
  //   if (
  //     (Boolean((postAxiosInfo?.message?.includes('400')))) ||
  //     (Boolean((postAxiosInfo?.message?.includes('401'))))
  //   ) {
  //     setUserAlreadyExists(true)
  //     return
  //   }
  //   localStorage.setItem('user', JSON.stringify(postAxiosInfo.data))
  //   navigate('/client')
  // }

  return (
    <section>
      <form
        data-testid="register-form"
        onSubmit={handleSubmit}
      >
        <TextInput
          dataTestId="register-input-name"
          label="Nome"
          type="text"
          name="name"
          value={ userRegister.name }
          onChange={ onHandleChange }
          { ...handleErrorMessage('name') }
        />
        <TextInput
          dataTestId="register-input-email"
          label="Email"
          type="email"
          name="email"
          value={ userRegister.email }
          onChange={ onHandleChange }
          { ...handleErrorMessage('email', 'Insira o email') }
        />
        <TextInput
          dataTestId="register-input-password"
          label="Senha"
          type="password"
          name="password"
          value={ userRegister.password }
          onChange={ onHandleChange }
          { ...handleErrorMessage('password') }
        />
        <Button
          type="submit"
          style={{ width: '60%' }}
          data-testid="register-button-submit"
          // onClick={ handleClick }
        >
          Entrar
        </Button>
        {
          userAlreadyExists &&
          (
            <p>Usuário já existente</p>
          )
        }
        <article>
          <h4>Já tem uma conta?</h4>
          <Link href="/login">Faça login</Link>
        </article>
      </form>
    </section>
  )
}
