import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'
import { ContainerAll } from './style'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <ContainerAll>
        <Outlet />

      </ContainerAll>
    </div>
  )
}