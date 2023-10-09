'use client'
import StepperForm from '@/components/StepperForm.tsx/StepperForm'
import BasicInfoForm from '@/components/studentForms/BasicInfoForm';
import GuardianInfoForm from '@/components/studentForms/GuardianInfoForm';
import LocalGuardianInfo from '@/components/studentForms/LocalGuardianInfo';
import StudentInfo from '@/components/studentForms/StudentInfo';
import React from 'react'


const CreateStudent = () => {


  const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo/>,
    },
    {
      title: 'Basic Information',
      content: <BasicInfoForm />,
    },
    {
      title: 'Guardian Information',
      content: <GuardianInfoForm/>,
    },
    {
      title: 'Local Guardian Information',
      content: <LocalGuardianInfo/>,
    },
  ];

  const handleStudentSubmit = async(data: any) => {
        try {
      console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm steps={steps} submitHandler = {(value)=>handleStudentSubmit(value)} />
    </div>
  )
}

export default CreateStudent