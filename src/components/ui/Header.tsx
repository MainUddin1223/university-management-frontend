import { Layout, Button, Dropdown, Avatar, Space, Row } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUserInfo, removeUserToken } from '@/services/auth.service';
import { AuthKey } from '@/constants/storage';
import { useRouter } from 'next/navigation';

const { Header: AntHeader } = Layout;


const Header = () => {
  
  const router = useRouter();
  const { role } = getUserInfo() as any;

    const logout = () => {
        removeUserToken(AuthKey);
        router.push('/login')
    }
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: <Button type='text' danger onClick={logout}>Logout</Button>
      }
    ];
  return (
     <AntHeader style={{ background:"#fff" }}>
          <Row
              justify="end"
              align="middle"
              style={{height : "100%"}}
      >
        <p style={{padding:"0 10px"}}>{role }</p>
               <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
       </Row>
      </AntHeader>
  )
}

export default Header