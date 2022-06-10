import Header from "@bem/components/molecules/header"
import PageContent from "./page-content"

const PrivateRoute = ({children}) => {
  return (
    <>
      <Header/>
      <PageContent>
        {children}
      </PageContent>
    </>
  )
}

export default PrivateRoute
