import React from "react"
import HookNavBar from "../../NavBar"
import Footer from "../../Footer"

const withNavAndFooter = (WrappedComponent) => () => {
    return(
        <>
            <HookNavBar></HookNavBar>
            <WrappedComponent></WrappedComponent>
            <Footer></Footer>
        </>
    )
}
export default withNavAndFooter