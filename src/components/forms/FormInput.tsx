'use client';

import { useFormContext, Controller } from "react-hook-form"
import {Input} from 'antd'
import { getErrorMessageByPropartyName } from "@/utils/schemaValidator";

interface IInput{
    type?: string;
    name: string;
    size?: 'large' | 'small';
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: string;
    label?:string
}


const FormInput = ({
    name,
    type,
    size,
    value,
    id,
    placeholder,
    validation,
    label
    }: IInput) => {
   
    const { control, formState: { errors } } = useFormContext();

    const errorMessage = getErrorMessageByPropartyName(errors, name);

  return (
      <>
          { label ? label : null}
       <Controller
          control={control}
          name={name}
              render={({ field }) => (
                  type === 'password' ?
                       <Input.Password
                  type={type}
                  size={size}
                  placeholder={placeholder}
                  {...field}
                  value={ value ? value : field.value}
                      /> :
                       <Input
                  type={type}
                  size={size}
                  placeholder={placeholder}
                  {...field}
                  value={ value ? value : field.value}
              />
             
          )}
          />
          <small style={{ color:'red' }}>
              {errorMessage}
          </small>
      </>
  )
}

export default FormInput