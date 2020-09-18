import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 700px) {
        flex-direction: row;
        max-width: 1050px;
        height: 100%;
        
    }
  
`;

export const Info = styled.div`
    padding: 1rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    p {
        color: var(--blue-medium);
    }

`;
export const Background = styled.div`
    padding: 1rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        width: min(70vw, max(350px));
        height: min(70vh, max(350px));

        @media (min-width: 700px) {
        width: min(40vw, max(512px));
        height: min(40vh, max(512px));
    }
    }

    
`;