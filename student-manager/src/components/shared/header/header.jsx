import propTypes from 'prop-types';

const Header = (/*props*/ { title, navElements }, param2, param3) => {
    // const { title, navElements } = props;
    // console.log(props);
    return (
        <header className="app-level-header">
            <div className="logo">
                <h1>{title}</h1>
            </div>
            <nav>
                <ul>
                    {navElements.map(navElement => {
                        return <li key={navElement}><a href="#">{navElement}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

// Header.defaultProps = {
//     title: "Default Title",
//     navElements: ["NavElem1", "NavElem2", "NavElem3"]
// }

Header.propTypes = {
    title: propTypes.string.isRequired,
    navElements: propTypes.arrayOf(propTypes.string).isRequired
}

export default Header;