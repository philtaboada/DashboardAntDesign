import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import { Space } from 'antd'
import SideMenu from './components/SideMenu/SideMenu'
import PageContent from './components/PageContent/PageContent'
import AppFooter from './components/AppFooter/AppFooter'

function App() {


  return (
    <div className="App">
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <SideMenu />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  )
}

export default App
