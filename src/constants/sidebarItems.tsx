import type { MenuProps } from "antd"
import {
    UserOutlined,
    TableOutlined,
    AppstoreOutlined,
    FileTextOutlined,
    CreditCardOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
    const defaultSidebarItems: MenuProps["items"] = [{
        label: 'Profile',
        key: 'Profile',
        icon: <UserOutlined />,
        children: [
            {
                label: <Link href={`/${role}`}>Account Profile</Link>,
                key: `/${role}`
            },
            {
                label: <Link href={`/${role}/change_password`}>Change Password</Link>,
                key: `/${role}/change_password`
            }
        ],
    }];
    const commonAdminSidebarItems: MenuProps["items"] = [
        {
        label: <Link href={`/${role}/manage_student`}>Manage Students</Link>,
        icon:<TableOutlined/>,
        key: `/${role}/manage_student`
        },
        {
        label: <Link href={`/${role}/manage_faculty`}>Manage Faculty</Link>,
        icon:<TableOutlined/>,
        key: `/${role}/manage_faculty`
        },
    ];


    const superAdminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
        label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
        icon:<TableOutlined/>,
        key: `/${role}/admin`
        },
        {
        label: <Link href={`/${role}/user`}>Manage User</Link>,
        icon:<TableOutlined/>,
        key: `/${role}/user`
        },
       {
        label: 'Management',
        key: 'Management',
        icon: <TableOutlined/>,
        children: [
            {
                label: <Link href={`/${role}/department`}>Department</Link>,
                key: `/${role}/department`
            }
        ],
    }
    ];
    const adminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
        label: 'Manage academic',
        key: 'manage academic',
        icon: <UserOutlined />,
        children: [
            {
                label: <Link href={`/${role}/academic/faculty`}> Faculties</Link>,
                key: `/${role}/academic/faculty`
            },
            {
                label: <Link href={`/${role}/academic/department`}>Departments</Link>,
                key: `/${role}/academic/department`
            },
            {
                label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
                key: `/${role}/academic/semester`
            }
        ],
    },
        {
        label: "Management",
        icon:<AppstoreOutlined/>,
        key: `/${role}/management`,
            children: [
                {
             label: <Link href={`/${role}/department`}>Department</Link>,
             key: `/${role}/department`
                },
                 {
             label: <Link href={`/${role}/building`}>Building</Link>,
             key: `/${role}/building`
        },
                 {
             label: <Link href={`/${role}/room`}>Rooms</Link>,
             key: `/${role}/room`
        },
                 {
             label: <Link href={`/${role}/course`}>Course</Link>,
             key: `/${role}/course`
        },
        ]
        },
    ];
    const facultySidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
        label: <Link href={`/${role}/courses`}>Courses</Link>,
        icon:<TableOutlined/>,
        key: `/${role}/courses`
        }
    ];

    const studentSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
        label: <Link href={`/${role}/courses`}>Courses</Link>,
        icon:<TableOutlined/>,
        key: `/${role}/courses`
        },
        {
        label: <Link href={`/${role}/registration`}>Registration</Link>,
        icon:<ThunderboltOutlined/>,
        key: `/${role}/registration`
        },
        {
        label: <Link href={`/${role}/payment`}>Payment</Link>,
        icon:<CreditCardOutlined/>,
        key: `/${role}/payment`
        },
        {
        label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
        icon:<FileTextOutlined/>,
        key: `/${role}/academic-report`
        },
    ];


     if(role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems
     else if(role === USER_ROLE.ADMIN) return adminSidebarItems
     else if(role === USER_ROLE.FACULTY) return facultySidebarItems
     else if(role === USER_ROLE.STUDENT) return studentSidebarItems
}