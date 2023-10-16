'use client'
import { useState } from 'react'
import dayjs from "dayjs"
import ActionBar from '@/components/ui/ActionBar'
import UMTable from '@/components/ui/UMTable'
import { Button, Input, message } from 'antd'
import Link from 'next/link'
import { useDebounced } from '@/redux/hooks'
import { DeleteOutlined,EditOutlined,EyeOutlined,ReloadOutlined } from '@ant-design/icons';
import ConfirmModal from '@/components/ui/ConfirmModal'
import { useAdminsQuery } from '@/redux/api/adminApi'
import Loading from '@/app/loading'

function ManageAdmin() {
      const query: Record<string, any> = {}
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState('');
  
    query['limit'] = size
    query['page'] = page
    query['sortBy'] = sortBy
    query['sortOrder'] = sortOrder
  
    const onPaginationChange = (page: number, pageSize: number) => {
      setSize(pageSize)
      setPage(page)
  }
  
  const deleteHandler = async (departmentId: any) => {
          message.loading('Deleting .......')
      try {
            message.success("Department Deleted successfully")
      } catch (error:any) {
        console.log(error)
        message.error( error.message )
      }
    }
  
  const handleConfirm = () => {
    deleteHandler(deleteItemId)
  }
  
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay:600
  })
  if (!!debouncedTerm) {
    query['searchTerm'] = searchTerm
  }

    const onTableChange = ( pagination:any, filter:any, sorter:any ) => {
    const { field, order } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  }
  
  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const { data, isLoading } = useAdminsQuery({ ...query })
  if (isLoading) {
    return <Loading/>
  }
 const admins = data?.admins;
  const meta = data?.meta;

   const columns = [
     {
       title: 'Id',
       dataIndex: 'id',
       render: function (data: any) {
         return data && dayjs(data).format("MMM D, YYYY hh:mm A");
        },
        sorter: true,
      },
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Department',
        dataIndex: 'department',
      },
      {
        title: 'Designation',
        dataIndex: 'designation',
      },
  {
    title: 'CreatedAt',
    dataIndex: 'createdAt',
          render: function (data: any) {
          return data && dayjs(data).format("MMM D, YYYY hh:mm A");
        },
        sorter: true,
     },
      {
        title: 'Contact no',
        dataIndex: 'contactNo',
      },
  {
    title: 'Action',
    render: function (data:any) {
      return (
        <>
             <div style={{ display: "flex", gap: "5px" }}>
        <Link href={`/super_admin/department/edit/${data?.id}`}>
         <Button type="primary">
        <EditOutlined /></Button>
        </Link>
            <Button type="primary" danger onClick={() => {
              setDeleteItemId(data?.id)
              setIsModalOpen(true)
            }}>
        <DeleteOutlined /></Button>
          </div>
        
        </>
      )
   }
  },
  ];

  return (
    <>
      <ActionBar title='Admin List'>
               <Input
          type='text'
          size='large'
          placeholder='Search ... '
          style={{ width: "20%" }}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
         <div>
          <Link href='/super_admin/admin/create'>
        <Button>
          Create Admin
        </Button>
      </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
    </ActionBar>
          <UMTable
        columns={columns}
        dataSource = {admins}
        loading={false}
          pageSize= {size}
        totalPages = {meta?.total}
        showSizeChanger = {true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination = {true}
      />
      <ConfirmModal title="Are You Sure !!!" content = "Once confirmed Department will be permanently demoved" setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} handleConfirm={handleConfirm } />
    </>
  )
}

export default ManageAdmin