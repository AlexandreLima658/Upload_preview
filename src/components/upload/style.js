import styled from 'styled-components';

export const Images = styled.div`
   img{
     width: 100%;
     height: 100px;
     object-fit: cover;
     





   }
   li{
     list-style: none;
     text-align: center;
     text-overflow:  ellipsis;
     white-space: nowrap;
     overflow: hidden;
   }

`
export const Content = styled.div`
  h1{
    margin-bottom: 2vw;
  }
  p{
   
    font-size: 1.2rem;
    text-align: center;
    border: 2px dashed #eee;
    border-radius: 8px;
    padding: 8px;
  }
`

export const Galery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
    grid-gap: 10px;
    padding: 20px 10px 10px 10px;
    
    
`



  

  
    




