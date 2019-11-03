import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin: 0;
  padding:0;
  outline:0;
  box-sizing:border-box;

}

 *:focus{
   outline:0;
 }

 html, body, #root{
   height:100%;
 }

 body{
   -webkit-font-smoothing: antialiased ;
 }

 body, input, button{
   font: 14px 'Roboto', sans-serif;
 }

 a{
   text-decoration: none;

 }
 ul{
   list-style: none
 }
 button{
   cursor: pointer;
 }
 #submitDialog {
  margin: 10px;
      height: 30px;
      width: 80px;
      border: solid 1px #777;
      border-radius: 5px;
    background-color: #27ae60;
    color: #fff;
    font-weight: bold;
    &:hover {
      background-color: green;
    }


`;
