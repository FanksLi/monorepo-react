import React from 'react';
import styled from 'styled-components';


const ButtonWrap = styled.button`

`;
function Button(props) {
    const { children, ...rest } = props;
    return <ButtonWrap {...rest}>
        {children}
    </ButtonWrap>
}

export default Button;