import {ReactNode} from "react";
import GlobalHeader from "../Header/GlobalHeader";
import styled from "styled-components";
import {useLayout} from "../../../hooks/layout/useLayout";
import Sidebar from "../Sidebar";

function GlobalContainer(props: {children: ReactNode}) {
    const {isAsideCollapsed} = useLayout();
    //
    return (
        <StyledGlobalContainer>
            <GlobalHeader />
            <StyledGlobalBody>
              {/*<StyledGlobalLeftAside isAsideCollapsed={isAsideCollapsed}>*/}
              {/*  <Sidebar isCollapsed={isAsideCollapsed} />*/}
              {/*</StyledGlobalLeftAside>*/}
              <StyledGlobalMain isAsideCollapsed={false}>
                  {props.children}
              </StyledGlobalMain>
            </StyledGlobalBody>
        </StyledGlobalContainer>
    )
}

export default GlobalContainer;

const StyledGlobalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledGlobalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  //flex-shrink: 0;
  //overflow-x: auto;
`;

const StyledGlobalLeftAside =styled.div<{isAsideCollapsed : boolean}>`
  position: absolute;
  z-index: 20000;
  height: 100vh;
  //width: 5rem;
`;

const StyledGlobalMain = styled.main<{isAsideCollapsed: boolean}>`
  flex-grow: 1;
  //padding: 0 2rem;
  display: flex;
  height: 100%;
  justify-content: center;
  //min-height: calc(100vh - 5.25rem);
  background-color: white;
  // width: ${props => (props.isAsideCollapsed ? "1920px" : "1670px")};
  //padding: 12px;
  overflow-y: auto;
`;