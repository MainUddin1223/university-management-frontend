 'use client'
import { Col, Row } from 'antd'
import React from 'react'
import FormInput from '../forms/FormInput'
import FormTextArea from '../forms/FormTextArea'
import FromSelectField from '../forms/FromSelectField'
import FormDatePicker from '../forms/FormDatePicker'
import { bloodGroupOptions } from '@/constants/selectOptions'


const BasicInfoForm = () => {

          const onSubmit = async (data:any) => {
    try {
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  return (
      <div>
          <h1>Basic Info Form</h1>
          <div>
                  <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom:"10px"   
                      }}>
                         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="email"
                                name="student.email"
                                label="Email"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.contactNo"
                                label="Contact Number"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.emergencyContactNo"
                                label="Emargency Contact Number"
                                size="large"
                            />
                            
                          </Col>
                                <Col className="gutter-row" span={12} style={{marginBottom:"10px"}}>
                                <FormDatePicker
                                name="student.dateOfBirth"
                                label="Date of Birth"
                                size="large"
                            />
                          </Col>
                            <Col className="gutter-row" span={12} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="student.bloodGroup"
                                  options={bloodGroupOptions}
                                  size="large"
                                  label="Blood Group"
                                  placeholder="Select"
                            />
                          </Col>
                        <Col className="gutter-row" span={12} style={{marginBottom:"10px"}}>
                            <FormTextArea
                                rows={4}
                                name="student.presentAddress"
                                label="Present Address"
                                placeholder="Present address"
                            />
                          </Col>
                        <Col className="gutter-row" span={12} style={{marginBottom:"10px"}}>
                            <FormTextArea
                                rows={4}
                                  name="student.permanentAddress"
                                label="Permanent Address"
                                placeholder="Permanent address"
                            />
                          </Col>
                   
                    </Row>
                  </div>
              </div>
    </div>
  )
}

export default BasicInfoForm