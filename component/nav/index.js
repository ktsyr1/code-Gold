
import Link from "next/link"

const Nav = () => {
    return (
        <nav className='box center pup-f w-full ui'  >
            <img src='/image/logo.svg' alt='logo site' id='logo' />
            <div className='box row' >
                <Link href={'/'}>
                    <a className='box center center-col'>
                        <p>الرئيسية</p>
                    </a>
                </Link>
                <Link href={'/services'}>
                    <a className='box center center-col'>
                        <p className='m-a'>الخدمات</p>
                    </a>
                </Link>

                <Link href={'/projects'}>
                    <a className='box center center-col' >
                        <p className=' m-a'>المشاريع</p>
                    </a>

                </Link>
                <Link href={'/about'}>
                    <a className='box center center-col m-a'>
                        <p className='m-a'>من نحن</p>
                    </a>
                </Link>
            </div>
            <Link href={'/content'}>
                <a className='box center center-col m-a btn'>
                    <p className='m-a'>   اتصل بنا  </p>
                </a>
            </Link>
        </nav>
    );
}

export default Nav;