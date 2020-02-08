import React from 'react';
import {Link} from 'react-router-dom'

class Picture extends React.Component {
    state = {pics: [], currentImg: ''}

    componentDidMount() {
        this.setState({pics: this.props.location.state.pictures, currentImg: this.props.location.state.currentImg})
    }

    changePrimary = (newPic) => {
        this.props.history.push(`picture?path=<${newPic}>`)
        this.setState({currentImg: newPic})
    }

    render() {
        const {pics, currentImg} = this.state;
        return (
            <div className="PictureApp">
                <div>
                    <img src={currentImg} className="currentImg" alt="Smiley face"/>
                </div>
                <div className="slider">
                    {pics.map((pic, index) => {
                        return <img src={pic.url} key={index} alt="alt"
                                    className={` ${pic.url === currentImg ? 'currentPic' : 'picSlider'}`}
                                    onClick={() => this.changePrimary(pic.url)}/>
                    })}
                </div>
                <Link to="/home">
                    <button className="backToHome">Home</button>
                </Link>
            </div>
        );
    }
}

export default Picture;
