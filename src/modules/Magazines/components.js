import styled from 'styled-components';
import colors from './../../config/colors';

const Wrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 1rem;
`;

const Search = styled.section`
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;
`;

const Content = styled.section`
flex: 1;
display: flex;
flex-direction: column;
width: 100%;
padding: 1rem 0;

.Collapsible {
  flex: 1;
  cursor: pointer;

  &__trigger {
    font-family: Oswald;
    color: ${colors.primary};

    &:hover {
      color: ${colors.secondary};
    }
  }

  &__contentInner {
    display: flex;
    cursor: auto;
  }
}
`;

const Cover = styled.figure`
margin: 0;
padding: .3rem;
margin: .5rem;
background: #FFF;
box-shadow: 0 0 5px #CCC;

img {
  max-width: 200px;
  max-height: 300px;
}
`;

const Description = styled.div`
font-family: Lora;
width: 40%;
padding: 1rem .5rem;

h3 {
  color: ${colors.secondary};
  margin: 0 0 .5rem 0;
}

h4 {
  font-weight: normal;
  text-indent: .5rem;
  max-height: 200px;
  color: #555;
  margin: 0 0 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export default {
  Wrapper,
  Search,
  Content,
  Cover,
  Description
};
