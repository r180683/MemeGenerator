// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding-right: 60px;
  padding-left: 60px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const LabelElement = styled.label`
  color: #7e858e;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`
export const InputElement = styled.input`
  width: 90%;
  color: #5a7184;
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Roboto';
  cursor: pointer;
  color: #ffffff;
  border: 0px;
  border-radius: 12px;
  width: 120px;
  height: 40px;
`
export const ImageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  width: 400px;
  height: 300px;
`
export const Text = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: ${props => {
    console.log(`parseInt(${props.fontSize})px`)
    return `${parseInt(props.fontSize)} px`
  }};
  font-family: 'Roboto';
`
