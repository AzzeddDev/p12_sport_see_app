

const Header = () => {
    return (
        <>
            <header className={"container-fluid navBar"}>
                <navbar>
                    <div className={"container d-flex justify-content-between align-items-center"}>
                        <img className={"navBar__logo"} src="../../../src/assets/img/logo.png" alt=""/>
                        <a className={"navBar__link"} href="#">Accueil</a>
                        <a className={"navBar__link"} href="#">Profil</a>
                        <a className={"navBar__link"} href="#">Réglage</a>
                        <a className={"navBar__link"} href="#">communauté</a>
                    </div>
                </navbar>
            </header>
        </>
    )
}

export default Header