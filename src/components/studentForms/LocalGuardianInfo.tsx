 'use client'
import { Col, Row } from 'antd'
import React from 'react'
import FormInput from '../forms/FormInput'

const LocalGuardianInfo = () => {

          const onSubmit = async (data:any) => {
    try {
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  return (
      <div>
          <h1>Local Guardian Information</h1>
          <div>
                <form>
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
                                name="student.localGuardian.name"
                                label="Guardian Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.localGuardian.occupation"
                                label="Occupation"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.localGuardian.contactNo"
                                label="Contact No"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={6} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="student.localGuardian.address"
                                label="Address"
                                size="large"
                            />
                          </Col>
                    </Row>
                  </div>
              </form>
              </div>
    </div>
  )
}

export default LocalGuardianInfo