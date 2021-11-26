import NavBar from "../nav";


export default function Layout({ children }, { props }) {
    return (
        <>
            <NavBar />
            <section>{children}</section>
            {/* <Footer /> */}
        </>
    )
}
