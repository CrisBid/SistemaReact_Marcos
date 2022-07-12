import styled from 'styled-components';

export const Pagina = styled.div`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    section{
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: url(bg.jpg)no-repeat;
        background-size: cover;
        background-position: center;
    }
    
    header{
        position: fixed;
        z-index: 1000;
        top: 0;
        width: 100%;
        padding: 30px 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.colors.bordas};
    }
    
    header .logo{
        position: relative;
        color: #000;
        font-size: 30px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
    }
    
    header .navigation a{
        color: #000;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 2px 15px;
        border-radius: 20px;
        transition: 0.3s;
        transition-property: background;
    }

    header .navigation Button{
        color: #000;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 2px 15px;
        border-radius: 20px;
        transition: 0.3s;
        transition-property: background;
    }
    
    header .navigation a:not(:last-child){
        margin-right: 30px;
    }

    header .navigation Button:not(:last-child){
        margin-right: 30px;
    }
    
    header .navigation a:hover{
        background: #fff;
    }

    header .navigation Button:hover{
        background: #fff;
    }
    
    .content{
        max-width: 650px;
        margin: 60px 100px;
        margin-top: 15%;
    }
    
    .content .info h2{
        color: #226A80;
        font-size: 55px;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 2px;
        line-height: 60px;
        margin-bottom: 30px;
    }
    
    .content .info h2 span{
        color: #fff;
        font-size: 50px;
        font-weight: 600;
    }
    
    .content .info p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
    }
    
    .content .info-btn{
        color: #fff;
        background: #226A80;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 2px;
        padding: 10px 20px;
        border-radius: 5px;
        transition: 0.3s;
        transition-property: background;
    }
    
    .content .info-btn:hover{
        background: #0C4F60;
    }
    
    .media-icons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    
    .media-icons a{
        position: relative;
        color: #111;
        font-size: 25px;
        transition: 0.3s;
        transition-property: transform;
    }
    
    .media-icons a:not(:last-child){
        margin-right: 60px;
    }
    
    .media-icons a:hover{
        transform: scale(1.5);
    }
    
    label{
        display: none;
    }
    
    #check{
        z-index: 3;
        display: none;
    }
    
    /* Responsive styles */
    
    @media (max-width: 960px){
        header .navigation{
        display: none;
        }
    
        label{
        display: block;
        font-size: 25px;
        cursor: pointer;
        transition: 0.3s;
        transition-property: color;
        }
    
        label:hover{
        color: #fff;
        }
    
        label .close-btn{
        display: none;
        }
    
        #check:checked ~ header .navigation{
        z-index: 2;
        position: fixed;
        background: rgba(114, 223, 255, 0.9);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
    
        #check:checked ~ header .navigation a{
        font-weight: 700;
        margin-right: 0;
        margin-bottom: 50px;
        letter-spacing: 2px;
        }
    
        #check:checked ~ header label .menu-btn{
        display: none;
        }
    
        #check:checked ~ header label .close-btn{
        z-index: 2;
        display: block;
        position: fixed;
        }
    
        label .menu-btn{
        position: absolute;
        }
    
        header .logo{
        position: absolute;
        bottom: -6px;
        }
    
        .content .info h2{
        font-size: 45px;
        line-height: 50px;
        }
    
        .content .info h2 span{
        font-size: 40px;
        font-weight: 600;
        }
    
        .content .info p{
        font-size: 14px;
        }
    }
    
    @media (max-width: 560px){
        .content .info h2{
        font-size: 35px;
        line-height: 40px;
        }
    
        .content .info h2 span{
        font-size: 30px;
        font-weight: 600;
        }
    
        .content .info p{
        font-size: 14px;
        }
    }
`

export const Pagina2 = styled.div`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .body{
    background: #111222;
    scroll-behavior: smooth;
    }

    section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 100px;
    color: #fff;
    }

    .container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

    .main-title{
    font-size: 4em;
    margin-bottom: 50px;
    }

    .content{
    position: relative;
    width: 1150px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .content .Image{
    position: relative;
    width: 800px;
    height: 400px;
    overflow: hidden;
    }

    .content .Image Image{
    z-index: 111;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    }

    .content .text-box{
    z-index: 222;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    padding: 40px;
    max-width: 400px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    transform: translate(-80px, 50px);
    }

    .content .text-box h3{
    font-size: 2em;
    margin-bottom: 10px;
    }

    .media-icons{
    margin-top: 100px;
    }

    .media-icons a{
    color: #fff;
    font-size: 2em;
    margin: 60px;
    }

    .section-title{
    font-size: 3em;
    margin-bottom: 80px;
    }

    .info-title{
    font-size: 1.8em;
    margin-bottom: 10px;
    }

    .info{
    width: 700px;
    margin-left: 50px;
    }

    .media-info{
    width: 400px;
    margin-left: 50px;
    }

    .media-info li{
    list-style: none;
    font-size: 1.4em;
    }

    .media-info li a{
    color: #fff;
    text-decoration: none;
    }

    .media-info li:not(:last-child){
    margin-bottom: 50px;
    }

    .media-info li:nth-child(1), .media-info li:nth-child(5){
    padding-left: 100px;
    }

    .media-info li:nth-child(2), .media-info li:nth-child(4){
    padding-left: 50px;
    }

    .sec-03{
    margin-bottom: 100px;
    }
      

`
            