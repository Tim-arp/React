import { useParams } from 'react-router-dom'

const Username = () => {
    const params = useParams()
  return (
    <div>I am {params.username}</div>
  )
}
export default Username