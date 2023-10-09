'use client'
import { Layout } from 'antd';
import UMBreadCrumb from './UMBreadCrumb';
import Header from './Header';
import { usePathname } from 'next/navigation';

const { Content } = Layout;

const getCrumbs = (currentPath: string) => {
  let items: any = [];
  const paths = currentPath.split("/");
  let prevPath: string;
  
    paths.map((path) => {
      if (!path) {
        prevPath = ''
      }
      else{
        prevPath = `${prevPath}/${path}`
        items.push({
          label: path,
          link:`${prevPath}`
        })
      }
    })
  items.pop()
  return items
}

const Contents = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  const res = getCrumbs(currentPath)
 

  return (
    <Content style={{ minHeight: "100vh", color: 'black' }}>

    <Header/>
      <div style={{padding:"15px"}}>
         <UMBreadCrumb
      items={
        res
    }
    />
      {children}
   </div>
    </Content>
  )
}

export default Contents