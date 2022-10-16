import React, { CSSProperties } from 'react';
import { TextField, FormHelperText } from '@mui/material';

interface TextInputProps {
  primary?: boolean
  size?: string
  dataTestId?: string
  type?: string
  label?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  styleArticle?: CSSProperties
  style?: CSSProperties
  helperText?: string
  error?: boolean
}

const TextInput = ({
  ...props
}: TextInputProps): any => {
  const {
    // primary = true,
    // size = 'small',
    dataTestId,
    type = 'text',
    label,
    name,
    value,
    onChange,
    styleArticle,
    style,
    helperText,
    error
  } = props

  // const matches = useMediaQuery('(min-width:600px)');

  return (
    <article style={ styleArticle }>
      <TextField
        data-testid={ dataTestId }
        type={ type }
        label={ label }
        name={ name }
        value={ value }
        onChange={ onChange }
        style={ style }
        error={ error }
        variant="outlined"
      />
      <FormHelperText
        style={ { color: 'red' } }
        error={error}
      >
        {helperText}
      </FormHelperText>
    </article>
  )
}

export default TextInput
