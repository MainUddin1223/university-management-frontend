'use client';

import { useFormContext, Controller } from "react-hook-form"
import { DatePicker, DatePickerProps, Input } from 'antd'
import dayjs,{Dayjs} from 'dayjs';

interface IFormDatePickerProps{
    onChange?:(valOne:any,valTwo:any)=>void
    name: string;
    value?:Dayjs
    label?: string
    size:"large" | 'small'
}


const FormDatePicker = ({ name,label,onChange,size }: IFormDatePickerProps) => {
    const { control,setValue } = useFormContext();
    const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
       onChange ? onChange(date,dateString) : null
        setValue(name, dateString);
    };
  return (
      <div className={`flex flex-col w-full`}>
          {label ? label : null}
          <br />
       <Controller
              control={control}
              name={name}
              render={({ field }) => (
                  <DatePicker
                      value={dayjs(field.value) || ''}
                      size={size}
                      onChange={handleOnChange}
                      style={{ width: "100%" }}
                  />
          )}
      />
    </div>
  )
}

export default FormDatePicker