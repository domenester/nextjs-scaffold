import makeStyles from '@mui/styles/makeStyles';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 10
  }
}))

export default function PageContent({children}) {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}