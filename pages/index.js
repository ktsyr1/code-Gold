import Link from "next/link"

export default function Home() {
  return (
    <div className='box col center-full home'>
      <h1>الكود الذهبي</h1>
      <p>في هذا القسم سنقدم شرحاً توضيحياً عن أهداف الشركة ورسالتها ورؤيتها.</p>
      <Link href={'/content'}>
        <a className='box center center-col m-a btn'>
          <p className='m-a'>   اتصل بنا  </p>
        </a>
      </Link>
    </div>
  )
}
