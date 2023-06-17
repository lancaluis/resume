import styled from "styled-components";

import { saveAs } from "file-saver";

import { eventGA } from "../../utils/reactGA";

const DownloadBtn = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid #dd9250;
  border-radius: 7px;
  background: none;
  color: #ffffff;
  transition: background-color 0.5s ease-in-out;
  font-weight: bold;

  &&:hover {
    cursor: pointer;
    background: #dd9250;
  }
`;

const downloadFile = () => {
  eventGA("download-resume", "buttonAction");
  saveAs("/files/luis-lanca.pdf", "luis-lanca.pdf");
};

const Button = () => {
  return <DownloadBtn onClick={downloadFile}>download cv</DownloadBtn>;
};

export default Button;
