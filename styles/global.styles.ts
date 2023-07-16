import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

    *{
        padding: 0;
        margin: 0;
    }
    
    :root{
        --total-black:${({ theme }) => theme.colors.totalBlack}; 
        --grey50:${({ theme }) => theme.colors.grey100};
        --grey50:${({ theme }) => theme.colors.grey50};
        --grey55:${({ theme }) => theme.colors.grey55};
        --grey10:${({ theme }) => theme.colors.grey10};
        --grey5:${({ theme }) => theme.colors.grey5};
        --grey15:${({ theme }) => theme.colors.grey15};
        --grey25:${({ theme }) => theme.colors.grey25};
        --grey30:${({ theme }) => theme.colors.grey30};
        --grey:${({ theme }) => theme.colors.grey};
        --withe:${({ theme }) => theme.colors.withe};
        --withe25:${({ theme }) => theme.colors.withe25};
        --total-withe:${({ theme }) => theme.colors.totalWithe};
        --green:${({ theme }) => theme.colors.green};
        --blue:${({ theme }) => theme.colors.blue};
        --colorbrand1:${({ theme }) => theme.colors.colorbrand1};
        --houver-blue:${({ theme }) => theme.colors.houverBlue}; 
        --primary: ${({ theme }) => theme.colors.primary};
        --primary25: ${({ theme }) => theme.colors.primary25};
        --primary30: ${({ theme }) => theme.colors.primary30};
        --orange: ${({ theme }) => theme.colors.orange};
        --background: var(--dusk);
        --accent: var(--white);

        --Font12: 0.75rem;
        --Font14: 0.875rem;
        --Font16: 1rem;
        --Font18: 1.125rem;
        --Font20: 1.25rem;
        --Font24: 1.5rem;
        --Font28: 1.75rem;
        --Font32: 2rem;
        --Font12: 2.25rem;

    }

    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

    body{
        background-color: var(--withe);
        color:  var(--withe);

        font-family: 'Red Hat Mono', monospace;
    };

    div,aside,body{
        ::-webkit-scrollbar-track {
            background-color: var(--grey15);
            border-radius: 3px;
        }

        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--primary30);
            border-radius: 3px;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);

            max-height: 100px;
        }
    }

    input, textarea{
        border: none;
        resize: none;
        box-shadow: none;
    }

    button{
        border: none;
    }

    html{
        scroll-behavior: smooth;
    }

    * { margin: 0; padding: 0; font-family: arial, helvetica, sans-serif; }
`;

export default StyleGlobal;
