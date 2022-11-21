import './Header_user.css'

function Header_user ({ onLogout}) {
    onLogout()
    return (
        <>  <div className="Header_user-icon">
            <i class="fa fa-shopping-cart"></i>
            <i class="fa fa-user" onClick={onLogout()}></i>
        </div>
        </>
    )
}

export default Header_user