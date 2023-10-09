'use client'

import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import { useAddDepartmentMutation } from '@/redux/api/departmentApi'
import { Button, Col, Row, message } from 'antd'
import React from 'react'

const CreateDepartment = () => {

  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data:any) => {
          message.loading('Creating .......')
      try {
        await addDepartment(data)
        message.success("Department added successfully")
      } catch (error:any) {
        console.log(error)
        message.error( error.message )
      }
    }
  return (
      <div>
           <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  )
}

export default CreateDepartment