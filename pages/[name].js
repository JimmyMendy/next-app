import { useRouter } from "next/router"

const name = () => {
  const router = useRouter()
  const query = router.query
  const name = query.name;
  console.log(query);
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  )
}

export default name
