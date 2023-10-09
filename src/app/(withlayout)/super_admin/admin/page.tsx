import ActionBar from '@/components/ui/ActionBar'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

function ManageAdmin() {
  return (
    <ActionBar title='Admin List'>
          <Link href='/super_admin/admin/create'>
        <Button>
          Create Admin
        </Button>
      </Link>
    </ActionBar>
  )
}

export default ManageAdmin