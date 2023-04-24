import { useRouter } from 'next/router'
import Link from 'next/link'
import Header12 from '@/components/layout/Header/Header12'

const Templates = () => {
  const router = useRouter()
  const { tempid } = router.query
  let link = <iframe src="https://cloud.smartdraw.com/editor.aspx?templateId=5746263d-13eb-47ca-9da3-65a5c4ba4921&flags=128" name="myiFrame" height="800px" width="1200px"></iframe>
  if(tempid == 117) {
    link = <iframe src="https://cloud.smartdraw.com/editor.aspx?templateId=403dbaf8-b4f5-4a9a-b155-a779eba0c748&flags=128" name="myiFrame" height="700px" width="1200px"></iframe>;
  } else if (tempid == 118) {
    link  =<iframe src="https://app.creately.com/d/7blqkdjUum3/edit/s/SAOZoJiVhgW" name="myiFrame" height="700px" width="1200px"></iframe>;
  }

  return (<>
  < Header12 />
  {link}
  {/* <div className="md:d-none ml-30">
    <Link href="/login" className="button -sm -green text-white">Нэвтрэх</Link>
  </div> */}
  </> )
}

export default Templates