import { Fragment } from "react"
import  PropTypes  from "prop-types"

export const FirstApp = ({ title, subtitle }) => {

    return (
        <Fragment>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </Fragment>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: "No last name",
    title: "No first name"
}