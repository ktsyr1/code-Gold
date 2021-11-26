import Link from "next/link"
import projects from 'DB/projects.json'
export default function Home() {
    return (
        <>
            <div className='box col center-full home'>
                <h1>الكود الذهبي</h1>
                <p>في هذا القسم سنقدم شرحاً توضيحياً عن أهداف الشركة ورسالتها ورؤيتها.</p>
                <Link href={'/content'}>
                    <a className='box center center-col m-a btn'>
                        <p className='m-a'>   اتصل بنا  </p>
                    </a>
                </Link>
            </div>
            <div className='box left col center-full home'>
                <h2 className='UI w-full center-full box'>المشاريع</h2>
                <div className='box grid center-full home'>
                    {projects.map((project, i) => {
                        return (
                            <div className='box col center w-300 UI card' key={i}>
                                <img src={project.image} alt={'logo ' + project.title} />
                                <div>{project.title}</div>
                                <div className='box row '>

                                    <p>{project.owner}</p>
                                    <p>{project.category}</p>
                                </div>
                                <div>{project.description}</div>
                                <a href={project.URL} className='box btn center-full w-full' >معاينة</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
