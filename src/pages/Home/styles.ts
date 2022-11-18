import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`





const BaseCountdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};

  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
