import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selectedIndex: 0
    }
  }
  componentDidMount(){
    this.setState({images: carouselData})
  }

  leftClick = () => {
    this.setState( prevState => {
      if (prevState.selectedIndex === 0) {
        return {
          selectedIndex: this.state.images.length - 1
        }  
      } else {
        return { 
          selectedIndex: prevState.selectedIndex - 1
        }
      }
    }) 
  }

  rightClick = () => {
    this.setState( prevState => {
      if (prevState.selectedIndex === this.state.images.length - 1) {
        return {
          selectedIndex: 0
        }
      } else {
        return { 
          selectedIndex: prevState.selectedIndex + 1
        }
      }

    }) 
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selectedIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}