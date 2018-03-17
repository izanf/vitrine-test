import styled from 'styled-components';
import colors from './../../config/colors';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
background: url('${props => props.background}');
background-size: cover;
`;

const Container = styled.aside`
display: flex;
flex-direction: column;
width: 900px;
height: 100%;
background: #EEE;
box-shadow: 0 0 25px #000;

@media (max-width: 960px) {
  width: 680px;
}

@media (max-width: 576px) {
  width: 100%;
}
`;

const Header = styled.section`
h1 {
  font-family: Oswald;
  font-weight: 700;
  text-align: center;
  color: ${colors.primary};
}
`;

export default {
  Wrapper,
  Container,
  Header
};
