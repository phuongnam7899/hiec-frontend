import React from 'react'
import Loading from 'react-redux-loading-bar'
import styled from 'styled-components';

const LoadingBar = styled(Loading)`
    height : 3px;
    background-color : #37A28D;
    position : fixed;
    top: 0;
    z-index : 10000;
`

function LoadingBarFile() {
    return (<>
        <header>
            <LoadingBar updateTime={100} maxProgress={95} progressIncrease={10} />
        </header>
              <section>
              <LoadingBar scope="sectionBar"  updateTime={100} maxProgress={95} progressIncrease={10}   />
            </section>
            </>
    )
}

export default LoadingBarFile;
