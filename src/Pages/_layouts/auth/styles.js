import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #009432, #006266);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

img{
  width:60px;
}

  span{
  color: #fff;
  align-self: center;
  align-items: center;
  margin: 10px;
  font-weight: bold
}
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        text-align: center
    }


  }
  button{
      margin: 5px 0 ;
      height: 44px;
      background: #009432;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.5s;
      &:hover{
        background: #009482
      }

    }

    a{
      margin: 10px;
      color: rgba(255, 255, 255, 0.7);
      font-size:16px;
      transition: 0.2s;

      &:hover{
        color:#fff;
        font-weight:bold
      }
    }
`;
