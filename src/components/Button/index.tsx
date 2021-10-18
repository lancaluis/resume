import styled from "styled-components"

import { saveAs } from "file-saver"

const DownloadBtn = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid #7b78ff;
  border-radius: 7px;
  background: none;
  color: #ffffff;
  transition: background-color 0.5s ease-in-out;
  font-weight: bold;
  margin-left: 3rem;

  &&:hover {
    cursor: pointer;
    background: #7b78ff;
  }
`

const downloadFile = () => {
  saveAs("/files/luis_lanca.pdf", "luis_lanca.pdf")
}

const Button = () => {
  return <DownloadBtn onClick={downloadFile}>download cv</DownloadBtn>
}

export default Button
