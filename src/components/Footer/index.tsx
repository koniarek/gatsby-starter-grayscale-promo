import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2019 г.</NoWrap>{' '}
                <NoWrap>&laquo;Save Your Tree&raquo;</NoWrap>
            </Info>
            <Info>Our website uses no cookies :)</Info>
        </Container>
    );
};
