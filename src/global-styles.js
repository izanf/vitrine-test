/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

injectGlobal`
html,
body,
#root {
  width: 100%;
  height: 100%;
}

.pagination {
  font-family: 'Dosis', sans-serif;
  display: flex;
  justify-content: center;
  width: auto;
  padding: 0;
  margin: 0;
}

.pagination li {
  list-style: none;
  cursor: pointer;
}

.pagination li a {
  display: block;
  color: #5F0000 !important;
  padding: .5rem 1rem;
}

.pagination li:first-child a {
  border-radius: 3px 0 0 3px;
}

.pagination li:last-child a {
  border-radius: 0 3px 3px 0;
}

.pagination li.selected a,
.pagination li a:hover {
  text-decoration: none !important;
  color: #FFF !important;
  background: #5F0000;
}

.pagination li a:focus {
  outline: none;
}

@import url('https://fonts.googleapis.com/css?family=Oswald:200,400,700');
`;
