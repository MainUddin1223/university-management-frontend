import { Modal } from 'antd'
import React from 'react'

type IConfirmModal = {
  isModalOpen: boolean;
  title: string;
  content:string
  setIsModalOpen: (val: boolean) => void;
  handleConfirm:()=>void
}

const ConfirmModal = ({ isModalOpen, title,content, setIsModalOpen,handleConfirm }:IConfirmModal) => {

  const handleOk = () => {
    handleConfirm();
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      bodyStyle={{
        height:"100px"
      }}
    >
        <p>{content}</p>
      </Modal>
  )
}

export default ConfirmModal