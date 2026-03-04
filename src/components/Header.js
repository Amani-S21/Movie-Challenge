function Header(){
    return(
        <header className="container-header">
            <div>
                <h1>Movies Challenge <span></span></h1>
            </div>
            <div className="search">
                <label>Search : </label>
                <input placeholder="Type here your search" className="input"></input>
            </div>
        </header>
    )
}

export default Header;