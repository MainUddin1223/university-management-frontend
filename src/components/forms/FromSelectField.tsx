// import { Select, Space } from 'antd';

// type IOptionsProps = {
//     options: {
//         value: string,
//         label:string
//     }[]
// }

// const FromSelectField = ({options}:IOptionsProps) => {

//     const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
//     return (
//       <Space wrap>
//        <Select
//       defaultValue="male"
//       style={{ width: 120 }}
//       onChange={handleChange}
//       options={options}
//     />
//         </Space>
//   )
// }

// export default FromSelectField
'use client';

import { useFormContext, Controller } from "react-hook-form"
import { Input, Select } from 'antd'
   type SelectOptions = {
        value: string,
        label:string
    }

interface ISelectFieldProps{
    name: string;
    size?: 'large' | 'small';
    value?: string | string[] | undefined;
    label?: string
    options: SelectOptions[];
    placeholder?: string;
    defaultvalues?:SelectOptions
}


const FromSelectField = ({
    name,
    options,
    size,
    value,
    placeholder,
    label,
    defaultvalues
    }: ISelectFieldProps) => {
    const {control} = useFormContext()
  return (
      <>
          { label ? label : null}
       <Controller
          control={control}
          name={name}
              render={({ field:{value,onChange} }) =>
                     <Select
                        placeholder={placeholder}
                        onChange={onChange}
                        options={options}
                        value={value}
                        style={{width:'100%'}}
                        size={size}
                        />
            }
      />
      </>
  )
}

export default FromSelectField