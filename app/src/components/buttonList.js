import React from 'react';

class ButtonList extends React.Component{


    handleClick=(e)=>{
        e.preventDefault()
        this.props.showFavorites()
    }
    render(){
            
        return(
            <div>
                <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-info">Saved Articles</button>
            
                <li>view top news today button</li>
                <li>advaced search button</li>
               

            </div>
        )
    }
}

export default ButtonList;