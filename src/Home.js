import React from 'react';
import './App.css';
import Line from './Line'

class Home extends React.Component {
    state = {path: ['root'], mainObj: {}, data: []}

    getFolders = async (arrPath) => {
        try {
            let {data, path} = this.state
            path = arrPath
            while (data.length >= path.length) {
                data.pop();
            }
            let str = arrPath.toString()
            const replaced = str.replace(/,/gi, '/')

            const response = await fetch(`http://34.250.129.9/public/explorePictures?path=${replaced}`, {
                method: "GET",
                headers: {
                    'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456'
                }
            })
            const data1 = await response.json();
            data.push(data1);
            this.setState({data, path});

        } catch (error) {
            alert('An error occurred')
            throw error
        }
    }
    checkReverseNeeded = (path, label) => {
        let newPath = path.filter(str => {
            if (str.length >= label.length) {
                return false
            } else {
                return true
            }
        })
        return newPath;
    }

    goToPicture = (pictures, currentImg) => {
        this.props.history.push(`picture?path=<${currentImg}>`, {pictures, currentImg})// sending primary img & all images to picture component
    }

    render() {
        const {path, data} = this.state;
        return (
            <div className="App">
                <button className={`rootButton ${data.length ? 'darkGrey' : ''}`}
                        onClick={(e) => this.getFolders(['root'])}></button>
                <div>{data.map((line, index) => (
                    <Line line={line} key={index} getFolders={this.getFolders} path={path}
                          goToPicture={this.goToPicture} checkReverseNeeded={this.checkReverseNeeded}/>
                ))}</div>
            </div>
        );
    }
}

export default Home;
