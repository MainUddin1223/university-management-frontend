import ActionBar from '@/components/ui/ActionBar'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

function ManageFaculty() {
  return (
        <ActionBar title='Faculty List'>
          <Link href='/super_admin/manage_faculty/create'>
        <Button>
          Create Faculty
        </Button>
      </Link>
    </ActionBar>
  )
}

export default ManageFaculty