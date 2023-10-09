import ActionBar from '@/components/ui/ActionBar'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const SuperAdminPage = () => {
  return (
        <ActionBar title='Student List'>
          <Link href='/super_admin/manage_student/create'>
        <Button>
          Create Student
        </Button>
      </Link>
    </ActionBar>
  )
}

export default SuperAdminPage