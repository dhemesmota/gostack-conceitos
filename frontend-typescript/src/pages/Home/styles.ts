import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px;
  position: relative;

  display: flex;
`;

export const Form = styled.form`
  position: sticky;
  top: 80px;
  height: 300px;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  border: 2px solid ${(props) => props.theme.colors.formBorder};
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
  }

  input {
    margin-bottom: 10px;
    font-size: 15px;
    border: 1px solid ${(props) => props.theme.colors.formBorder};
    background: ${(props) => props.theme.colors.backgroundInput};
    border-radius: 10px;
    padding: 15px;
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    height: 50px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    width: 100%;
    border: none;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${(props) => darken(0.1, props.theme.colors.primary)}
    }
  }
`;

export const ProjectList = styled.ul`
  flex: 1;
  list-style: none;
  padding-right: 30px;

  p {
    position: absolute;
    top: 20px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 5px 10px;
    border: 2px solid ${(props) => props.theme.colors.backgroundInput};
    border-radius: 10px;
    background: ${(props) => props.theme.colors.backgroundInput};
    position: relative;

    img {
      border: 1px solid ${(props) => props.theme.colors.formBorder};
      border-radius: 10px;
      height: 50px;
      width: 50px;
      margin-right: 10px;
    }

    span {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #2ac117;
      color: #fff;
      border-radius: 4px;
      padding: 1px 5px;
      font-size: 11px;
    }
  }
`;
