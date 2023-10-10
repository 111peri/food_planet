import { NavLink } from "react-router-dom";


export function NavBar () {
    return (
        <ul style={{display: "flex", listStyleType: "none"}}>
            <li style={{marginRight: "20px"}}>
                <NavLink to="/">main page</NavLink>
            </li>
            <li style={{marginRight: "20px"}}>
                <NavLink to="/about">about page</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">contacts page</NavLink>
            </li>
        </ul>
    )
}