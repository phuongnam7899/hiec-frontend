import React from "react"
import HookNavBar from "../../NavBar"
import Footer from "../../Footer"

const withNavAndFooter = (WrappedComponent, footer = true) => (props) => {
    return(
        <>
            <HookNavBar></HookNavBar>
            <WrappedComponent {...props}></WrappedComponent>
            {footer ? <Footer></Footer> : null}
        </>
    )
}
export default withNavAndFooter