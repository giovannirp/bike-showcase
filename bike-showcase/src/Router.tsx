import { Routes } from "react-router-dom"
import { Route } from "react-router"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Main } from "./Main/Main"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}