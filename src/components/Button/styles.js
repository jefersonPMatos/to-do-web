import styled, { css } from "styled-components";

const Container = styled.button`
  ${(props) => {
    if (props.link) {
      return css`
        font-size: 14px;
        color: #e1e1e1;
        cursor: pointer;
        position: relative;
        border: none;
        background: none;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: color;

        &:focus::after {
          width: 100%;
          left: 0%;
        }
        &:hover::after {
          width: 100%;
          left: 0%;
        }

        &:after {
          content: "";
          pointer-events: none;
          bottom: -1px;
          left: 50%;
          position: absolute;
          width: 0%;
          height: 2px;
          background-color: #00ca4e;
          transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
          transition-duration: 400ms;
          transition-property: width, left;
        }
      `;
    } else {
      return css`
        padding: 0.8em 1.8em;
        border: 1px dashed #fff;
        position: relative;
        overflow: hidden;
        background-color: transparent;
        text-align: center;
        font-size: 20px;
        transition: 0.5s ease;
        z-index: 1;
        font-family: "Space Mono", monospace;
        color: #fff;
        min-width: 200px;
        min-height: 50px;

        &:before {
          content: "";
          width: 0;
          height: 400%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: #00ca4e;
          transition: 0.8s ease;
          display: block;
          z-index: -1;
        }

        &:hover::before {
          width: 200%;
        }

        &:hover {
          color: #000;
          cursor: pointer;
          border: none;
        }
      `;
    }
  }}
`;

export { Container };
