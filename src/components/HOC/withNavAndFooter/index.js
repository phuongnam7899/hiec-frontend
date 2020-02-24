import React from "react"
import HookNavBar from "../../NavBar"
import Footer from "../../Footer"

const withNavAndFooter = (WrappedComponent) => (props) => {
    return(
        <>
            <HookNavBar></HookNavBar>
            <WrappedComponent {...props}></WrappedComponent>
            <Footer></Footer>
        </>
    )
}
export default withNavAndFooter