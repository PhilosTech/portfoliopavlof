import styled from "styled-components";

export const Container = styled.section`
  height: 100%;

.code-editor {
  background: linear-gradient(135deg, #0c0c26, #331a5a);
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border: 1px solid #7159e1;
  max-width: 85rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.window-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

.code-block {
  background: linear-gradient(135deg, #5e5581b0, #399184b3);
  padding: 15px;
  border-radius: 6px;
  overflow: auto;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

code {
  color: #f8f8f2;
  line-height: 1.5;
}

.indent-0 {
  padding-left: 0;
}

.indent-1 {
  padding-left: 20px;
}

.indent-2 {
  padding-left: 40px;
}

code .keyword {
  color: #ff79c6;
}

code .variable {
  color: #8be9fd;
}

code .string {
  color: #f1fa8c;
}

code .boolean {
  color: #50fa7b;
}

code .function {
  color: #ffb86c;
}
  code .return {
  color: #f63535;
}

a{
  display: inline-block;
  vertical-align: middle;
  img {
    width: 3rem;
    height: 3rem;
  } 
}
`;
