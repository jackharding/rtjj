import styled from 'styled-components';

interface ContainerProps {
    size: 'lg' | 'md' | 'sm' | 'xs';
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: ${({ size }) => {
        if(size === 'lg') return '1296px';
        if(size === 'md') return '1152px';
        if(size === 'sm') return '864px';
        if(size === 'xs') return '684px';

        return 'none';
    }};
	margin: 0 auto;
	padding: 0 20px;
`;

Container.defaultProps = {
    size: 'md'
}

export default Container;