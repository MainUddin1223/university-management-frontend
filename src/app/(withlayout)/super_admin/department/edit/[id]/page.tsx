'use client'
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import ActionBar from '@/components/ui/ActionBar'
import { useDepartmentQuery, useUpdateDepartmentMutation } from '@/redux/api/departmentApi'
import { Button, Col, Row, message } from 'antd'
import React from 'react'

type IDProps = {
    params:any
}

const EditDepartmentPage = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation();

    const onSubmit = async (values: any) => {
          message.loading('Creating .......')
      try {
            await updateDepartment({ id, body: values });
            message.success("Department updated successfully")
      } catch (error:any) {
        console.log(error)
        message.error( error.message )
      }
    }

    const defaultValues = {
        title:data?.title || ''
    }

  return (
      <div>
          <ActionBar title='Update Department'>
        <Form submitHandler={onSubmit}  defaultValues={defaultValues}>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput name="title" label="Title" />
            </Col>
            </Row>
            <Button type="primary" htmlType="submit">
            Update
            </Button>
          </Form>
          </ActionBar>

      </div>
  )
}

export default EditDepartmentPage