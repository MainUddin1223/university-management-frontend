'use client'

import React, { useEffect, useState } from 'react';
import { Button, message, Steps } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useRouter } from 'next/navigation';
import { IStepsProps } from '@/types';

const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
  
  const router = useRouter()
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step") ? Number(JSON.parse(getFromLocalStorage("step") as string ).step):0);

  useEffect(() => {
    setToLocalStorage('step', JSON.stringify({step:current}))
  },[current])

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleStudentOnSumbit = (data:any) => {
    submitHandler(data)
    reset()
    setToLocalStorage('step', JSON.stringify({ step: 0 }))
    navigateLink && router.push(navigateLink)
  }

  return (
    <>
      <div
      style={{margin:"15px 0"}}>
        <Steps current={current} items={items} />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSumbit)}>
          <div>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button htmlType='submit' type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;