import {Component} from 'react'
import {
  Container,
  FormContainer,
  Heading,
  InputContainer,
  LabelElement,
  InputElement,
  GenerateButton,
  ImageConatiner,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    showImage: false,
  }

  updateImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({showImage: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, showImage} = this.state
    return (
      <Container data-testid="meme">
        <FormContainer onSubmit={this.submitForm}>
          <Heading>Meme Generator</Heading>
          <InputContainer>
            <LabelElement htmlFor="image">Image URL</LabelElement>
            <InputElement
              lue={imageUrl}
              onChange={this.updateImageUrl}
              id="image"
              type="text"
              placeholder="Enter the Image URL"
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              vlue={topText}
              onChange={this.updateTopText}
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              value={bottomText}
              onChange={this.updateBottomText}
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
            />
          </InputContainer>
          <LabelElement htmlFor="fontSize">Font Size</LabelElement>
          <InputContainer>
            <InputElement id="fontSize" name="fontSize" as="select">
              {fontSizesOptionsList.map(each => {
                const {optionId, displayText} = each
                const updateOption = () => {
                  this.setState({fontSize: optionId})
                }
                return (
                  <InputElement
                    onChange={updateOption}
                    as="option"
                    value={optionId}
                  >
                    {displayText}
                  </InputElement>
                )
              })}
            </InputElement>
          </InputContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        {showImage === true ? (
          <ImageConatiner as="container" imageUrl={imageUrl}>
            <Text fontSize={fontSize}>{topText}</Text>
            <Text fontSize={fontSize}>{bottomText}</Text>
          </ImageConatiner>
        ) : (
          ''
        )}
      </Container>
    )
  }
}

export default MemeGenerator
