import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

const Loading = () => {
  const classes = useStyle()
  return (
    <div>
      <Stack className={classes.root} alignItems="center">
        <CircularProgress/>
      </Stack>
    </div>
  )
}

export default Loading
