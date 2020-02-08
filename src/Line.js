import React from 'react';

class Line extends React.Component {

    changeColorAndFolders = (e, label) => {
        let {getFolders, path, checkReverseNeeded} = this.props;
        path = checkReverseNeeded(path, label)// check if need to open previous folders
        path.push(label);
        getFolders(path, e)

        let btnsArr = Array.prototype.slice.call(e.target.parentNode.children)// convert html collection to array- the array is all the buttons at the line
        btnsArr.forEach(btn => {
            if (btn.className === 'btn darkGrey') {
                btn.className = 'btn'
            }
        })
        e.target.className = 'btn darkGrey'
    }

    apiClick = (btn, line, e, index) => {
        const {goToPicture} = this.props
        if (btn.type) {
            let onlyImagesArr = line.data.children.filter(button => button.type)// filter only images from current folder
            goToPicture(onlyImagesArr, btn.url)
        } else {
            this.changeColorAndFolders(e, btn.label, index)
        }
    }

    render() {
        const {line} = this.props;
        return (
            <div>
                {line.data.children && line.data.children.map((btn, index) => {
                    return <button className={btn.type ? 'btn green' : 'btn'} key={index}
                                   onClick={(e) => this.apiClick(btn, line, e, index)
                                   }
                    ></button>
                })}
                <div></div>
            </div>
        );
    }
}

export default Line;
