import styled from "styled-components";
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
`;

const Title = styled.h1`
    color: #005eb8;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;
`;

const Subtitle = styled.p`
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`;
const AccessDeny = () => (
    <Container>
        <Title>Anda tidak punya akses untuk fitur ini.</Title>
        <Subtitle>
            Kembali ke <a href="/">Beranda</a>
        </Subtitle>
    </Container>
);

export default AccessDeny;
