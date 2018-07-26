import React from 'react';

class IndividualHero extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.person.name}</h1>
                <h2>{this.props.person.specialty}</h2>
                </div>
        )
    }
}
export default IndividualHero;