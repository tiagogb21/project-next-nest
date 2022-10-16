import * as yup from 'yup';

import user from './Schemas/userSchema';

interface IUser {
  name?: string;
  email: string;
  password: string;
}

const listSchemas = {
  user
}

export type FormName = keyof typeof listSchemas;

export type FormValues = IUser;

const testSchema = async (
  schema: FormName,
  value: FormValues
): Promise<true | yup.ValidationError[]> => {
  try {
    const formSchema = listSchemas[schema]
    await formSchema.validate(value, { abortEarly: false })
    return true
  } catch (err: any) {
    return err.inner
  }
}

export default testSchema
