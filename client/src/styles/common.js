import { css } from "@emotion/react";

export const LiftUp = css`
    :hover {
        animation: lift-up 0.2s forwards;
    }
    
    @keyframes lift-up {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-6px);
        }
    }
`;