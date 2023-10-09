import { Button } from "antd"
import Link from "next/link"


function ManageStudent() {
  return (
    <div>
      <h1>
        ManageStudent
      </h1>
      <Link href='/super_admin/manage_student/create'>
        <Button>
          Create Student
        </Button></Link>
    </div>
  )
}

export default ManageStudent