'use client'

import Form from "@/components/forms/Form"
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import FromSelectField from "@/components/forms/FromSelectField";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, departmentOptions, genderOptions } from "@/constants/selectOptions";
import { useAddAdminMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { IDepartment } from "@/types";
import { contentQuotesLinter } from "@ant-design/cssinjs/lib/linters";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd"

const CreateAdmin = () => {
  const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });
  const [addAdmin] = useAddAdminMutation()
  if (isLoading) {
     return <p>Loading.....</p>
  }

  // const onSubmit = async (values: any) => {
  //   const obj = { ...values };
  //   const file = obj['file'];
  //   delete obj['file']
  //   const data = JSON.stringify(obj);
  //   const formData = new FormData();
  //   formData.append("file", file as Blob);
  //   formData.append('data',data)
  //   message.loading("Creating ...")
  //   try {
  //         console.log(formData)
  //         await addAdmin(formData);
  //         message.success("Admin created successfully")
  //     console.log(data)
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }
    const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      await addAdmin(formData);
      message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

    //@ts-ignore
  const departments: IDepartment[] = data?.departments;
  const departmentsOptions = departments.map((dep: IDepartment) => {
    return {
      label: dep.title,
      value:dep._id
    }
  })
  return (
      <div>
          <h1>Create Admin</h1>
          <div>
              <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
                  <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom:"10px"   
                      }}>
                      <p style={{fontSize:"18px",marginBottom:"10px"}}>
                        Admin Information
                      </p>
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="admin.name.firstName"
                                label="First Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="admin.name.middleName"
                                label="Middle Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="admin.name.lastName"
                                label="Last Name"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="password"
                                name="password"
                                label="Password"
                                size="large"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="admin.gender"
                                  options={genderOptions}
                                  size="large"
                                  label="Gender"
                                  placeholder="Select"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="admin.managementDepartment"
                                  options={departmentsOptions}
                                  size="large"
                                  label="Department"
                                  placeholder="Select"
                            />
                            
                          </Col>
                          <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                              <UploadImage name="file"/>
                          </Col>
                    </Row>
                  </div>

                  {/* basic info */}

                  <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom:"10px"   
                      }}>
                      <p style={{fontSize:"18px",marginBottom:"10px"}}>
                        Basic Information
                      </p>
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="email"
                                name="admin.email"
                                label="Email"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="admin.contactNo"
                                label="Contact Number"
                                size="large"
                            />
                            
                        </Col>
                        <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="admin.emergencyContactNo"
                                label="Emargency Contact Number"
                                size="large"
                            />
                            
                          </Col>
                                <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                                <FormDatePicker
                                name="admin.dateOfBirth"
                                label="Date of Birth"
                                size="large"
                            />
                          </Col>
                            <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FromSelectField
                                  name="admin.bloodGroup"
                                  options={bloodGroupOptions}
                                  size="large"
                                  label="Blood Group"
                                  placeholder="Select"
                            />
                          </Col>
                               <Col className="gutter-row" span={8} style={{marginBottom:"10px"}}>
                            <FormInput
                                type="text"
                                name="admin.designation"
                                label="Designation"
                                size="large"
                            />
                            
                          </Col>
                        <Col className="gutter-row" span={12} style={{marginBottom:"10px"}}>
                            <FormTextArea
                                rows={4}
                                name="admin.presentAddress"
                                label="Present Address"
                                placeholder="Present address"
                            />
                          </Col>
                        <Col className="gutter-row" span={12} style={{marginBottom:"10px"}}>
                            <FormTextArea
                                rows={4}
                                  name="admin.permanentAddress"
                                label="Permanent Address"
                                placeholder="Permanent address"
                            />
                          </Col>
                   
                    </Row>
                  </div>
                  <Button htmlType="submit" type="primary">Create</Button>
              </Form>
          </div>
    </div>
  )
}

export default CreateAdmin