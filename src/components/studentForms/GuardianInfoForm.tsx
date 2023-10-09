'use client'
import { Col, Row } from 'antd'
import React from 'react'
import FormInput from '../forms/FormInput'

const GuardianInfoForm = () => {

          const onSubmit = async (data:any) => {
    try {
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  return (
      <div>
          <h1>Guardian Info Form</h1>
          <div>
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
                                name="student.guardian.fatherName"
                                label="Father Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.guardian.fatherOccupation"
                                label="Father Occupation"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.guardian.fatherContactNo"
                                label="Father Contact No"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.guardian.motherName"
                                label="Mother Name"
                                size="large"
                            />
                          </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.guardian.motherOccupation"
                                label="Mother Occupation"
                                size="large"
                            />
                          </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.guardian.motherContactNo"
                                label="Mother Contact No"
                                size="large"
                            />
                          </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.guardian.address"
                                label="Address"
                                size="large"
                            />
                          </Col>
                    </Row>
                  </div>
              </div>
    </div>
  )
}

export default GuardianInfoForm