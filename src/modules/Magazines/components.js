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

.magazine {
  flex: 1;
  cursor: pointer;

  &__trigger {
    font-family: Oswald;
    color: ${colors.primary};

    &:hover {
      color: ${colors.secondary};

      &:after {
        border-color: ${colors.secondary};
      }
    }

    &:after {
      content: '';
      border: solid ${colors.primary};
      border-width: 0 3px 3px 0;
      display: inline-block;
      margin: -.5rem 0 0 .5rem;
      padding: 3px;
      transition: .3s linear;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &.is-closed {
      &:after {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
  }

  &__contentInner {
    display: flex;
    cursor: auto;
  }
}

.characters {
  font-family: Lora;
  flex: 1;
  padding: 1rem .5rem;

  ul {
    max-height: 200px;
    padding-left: .5rem;
    overflow: auto;
  }

  li {
    font-weight: normal;
    color: #555;
    margin: 0;
    list-style: none;
  }

  &__trigger {
    font-family: Oswald;
    color: ${colors.primary};
    cursor: pointer;

    &:hover {
      color: ${colors.secondary};

      &:after {
        border-color: ${colors.secondary};
      }
    }

    &:after {
      content: '';
      border: solid ${colors.primary};
      border-width: 0 3px 3px 0;
      display: inline-block;
      margin: -.5rem 0 0 .5rem;
      padding: 3px;
      transition: .3s linear;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &.is-closed {
      &:after {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
  }
}

@media (max-width: 576px) {
.magazine {
  &__contentInner {
    flex-wrap: wrap;
  }
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

@media (max-width: 576px) {
width: 100%;

img {
  max-width: 100%;
  max-height: 100%;
}
}
`;

const Description = styled.div`
font-family: Lora;
width: 40%;
padding: 1rem .5rem;

h3 {
  color: ${colors.secondary};
  margin: 0 0 .5rem 0;

  span {
    font-size: 1rem;
    font-weight: normal;
    color: #555;
  }
}

h4 {
  font-weight: normal;
  text-indent: .5rem;
  max-height: 130px;
  color: #555;
  margin: 0 0 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 576px) {
width: 100%;
}
`;

const Dates = styled.div`
`;

const Characters = styled.div`
font-family: Lora;
padding: 1rem .5rem;

h3 {
  color: ${colors.secondary};
  margin: 0;
}
`;

export default {
  Wrapper,
  Search,
  Content,
  Cover,
  Description,
  Dates,
  Characters
};
