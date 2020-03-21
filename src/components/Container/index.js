import styled from "styled-components"
import convert2vw from "../../utils/convert2vw"
import {breakpoint} from "../../styles/mixin"

export const Container = styled.div`
    margin: 0px auto;
    width: calc(100vw - ${convert2vw(300)});
    max-width: calc(100vw - ${convert2vw(300)});
    ${breakpoint.ml`
    width: 90vw;
    max-width: 90vw;
    `}
`;

export default Container