import PropTypes from 'prop-types'
// import Navbar from '../../components/ui/Navbar'
// import '../../assets/css/navbar.css'
const UserLayout=({ children })=>{
    return(
        <div className='user_container'>
            <header className='fixed-navbar'>
                {/* {<Navbar/>} */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* {/footer/} */}
            </footer>
        </div>
    )
}
UserLayout.propTypes={
    children:PropTypes.node.isRequired,
}

export default UserLayout