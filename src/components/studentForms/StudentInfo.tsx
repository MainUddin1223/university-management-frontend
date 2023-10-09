
 'use client'
import { Col, Row } from 'antd'
import Form from "@/components/forms/Form"
import React from 'react'
import FormInput from '../forms/FormInput'
import FromSelectField from '../forms/FromSelectField'
import {genderOptions } from '@/constants/selectOptions'
import UploadImage from '../ui/UploadImage'

const StudentInfoForm = () => {

          const onSubmit = async (data:any) => {
    try {
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  return (
      <div>
          <h1>Student Info Form</h1>
          <div>
                <Form submitHandler={onSubmit}>
                  <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom:"10px"   
                      }}>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.name.firstNname"
                                label="First Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.name.middleName"
                                label="Middle Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.name.lastName"
                                label="Last Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="password"
                                name="password"
                                label="Password"
                                size="large"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="student.gender"
                                  options={genderOptions}
                                  size="large"
                                  label="Gender"
                                  placeholder="Select"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="student.academicDepartment"
                                  options={genderOptions}
                                  size="large"
                                  label="Academic Department"
                                  placeholder="Select"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="student.academicFaculty"
                                  options={genderOptions}
                                  size="large"
                                  label="Academic Faculty"
                                  placeholder="Select"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="student.academicSemester"
                                  options={genderOptions}
                                  size="large"
                                  label="Academic Semester"
                                  placeholder="Select"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <UploadImage/>
                          </Col>
                    </Row>
                  </div>
              </Form>
              </div>
    </div>
  )
}

export default StudentInfoForm