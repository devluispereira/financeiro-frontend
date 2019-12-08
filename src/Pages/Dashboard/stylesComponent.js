import styled from 'styled-components';


export const HeaderDrawer = styled.div`
  height:150px;
  width:100%;
  background: #fff;
  border: 1px solid silver;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
   span{
     font-size:20px;
     margin-top:20px;
     font-weight: bold;
   }
     
  div{
    display:flex;
    flex-direction:column;   
    align-items:flex-start;
    justify-content:flex-start;
    margin-bottom:30px;
  }

`;
