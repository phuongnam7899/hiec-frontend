import React from "react"
import HookNavBar from "../../NavBar"
import Footer from "../../Footer"

const withNavAndFooter = (WrappedComponent, footer = true, nav = true) => (props) => {
    return(
        <>
            {nav ? <HookNavBar></HookNavBar> : null}
            <WrappedComponent {...props}></WrappedComponent>
            {footer ? <Footer></Footer> : null}
        </>
    )
}
export default withNavAndFooter