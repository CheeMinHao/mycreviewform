import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="header">
            <img src="https://i.imgur.com/RoO3Gnj.png" title="source: imgur.com" />
		<nav>
			<ul className="nav__links">
				<li className="nav__bar">
                <Link href="/">
                    <a>Review</a>
                </Link>
                </li>
				<li className="nav__bar">
                <Link href="/">
                    <a>Post Review</a>
                </Link>
                </li>
			</ul>
		</nav>
        </header>
    )
}

export default Navbar