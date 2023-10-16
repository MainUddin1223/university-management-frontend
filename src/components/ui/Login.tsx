'use client'

import { Col, Row, message } from 'antd';
import loginImage from '@/assets/My password-amico.png'
import Image from 'next/image';
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import { SubmitHandler } from "react-hook-form";
import {Button} from 'antd'
import { useUserLoginMutation } from '@/redux/api/authApi';
import { getUserInfo, storeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { FormValues } from "@/types";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/schemas/authSchema';

const Login = () => {

  const [userLogin] = useUserLoginMutation();
  const router = useRouter()

  const onsubmit:SubmitHandler<FormValues> = async (data:any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push('/profile');
        message.success('User logged in successfully')
      }
      const accessToken = res?.accessToken
      storeUserInfo(accessToken)
      getUserInfo()
    } catch (error) {
    }
  }
  return (
       <Row
      justify='center'
      align='middle'
      style={{ minHeight: "100vh" }}>
       <Col  sm={12} md={16} lg={10} >
      <Image src={loginImage} width={500} alt='login_img'/>
    </Col>
    <Col  sm={12} md={8} lg={8}>
        <h1
          style={{ margin: "15px 0" }}
        >First login your account</h1>
        <div>
          <Form submitHandler={onsubmit} resolver={yupResolver(loginSchema)}>
            <div
            style={{ margin: "15px 0" }}
            >
              <FormInput
                name='id'
                type='text'
                size='large'
                label='User Id'
              />
            </div>
            <div
            style={{ margin: "15px 0" }}
            >
              <FormInput
                name='password'
                type='password'
                size='large'
                label='User Password' />
            </div>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form>
        </div>
    </Col>
  </Row>
  )
}

export default Login