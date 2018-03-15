import styled from 'styled-components';

const Wrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 1rem;
`

const Search = styled.section`
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;
`

const InputGroup = styled.div`
display: flex;
flex-direction: column;
margin: 0 .5rem;
`

const InputLabel = styled.label`
font-family: Oswald;
`

const InputTitle = styled.input`
font-family: Oswald;
font-weight: 200;
text-indent: 3px;
border: 1px solid #CCC;
border-radius: 3px;

&:focus {
  outline: none;
}
`

const SelectYear = styled.select`
`

const BtnSearch = styled.button`
display: flex;
align-items: center;
background: #5F0000;
padding: .5rem;
border: none;
border-radius: 3px;
cursor: pointer;

svg path {
  fill: #FFF;
}
`

const Content = styled.section`
flex: 1;
width: 100%;
padding: 1rem 0;

.Collapsible {
  cursor: pointer;

  &__trigger {
    font-family: Oswald;
    color: #5F0000;

    &:hover {
      color: #9E0000;
    }
  }
}
`

export default {
  Wrapper,
  Search,
  InputGroup,
  InputLabel,
  InputTitle,
  SelectYear,
  BtnSearch,
  Content
}
