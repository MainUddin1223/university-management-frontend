'use client'

import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput';
import { ChangePasswordSchema } from '@/schemas/changePasswordSchema'
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from 'antd';
import React from 'react'

function ChangePassword() {
        const onSubmit = async (data:any) => {
    try {
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  return (
<div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
        <Form submitHandler={onSubmit} resolver={yupResolver(ChangePasswordSchema)}>
        <h1>Change Password</h1>
        <div style={{ margin: "5px 0" }}>
                          <FormInput
                                type="password"
                                name="oldPassword"
                                label="Old Password"
                            />
                          </div>
                          <div style={{ margin: "5px 0" }}>
                          <Col className="gutter-row" style={{marginBottom:"10px"}}>
                            <FormInput
                                type="password"
                                name="newPassword"
                                label="New Password"
                            />
          </Col>
          </div>
          <Button htmlType="submit" type="primary">Create</Button>
        </Form>

    </div>
  )
}

export default ChangePassword