import React from 'react';
import moment from 'moment';

class Form extends React.Component{
    //on submit get the information and send it to the parent component to change state
    //then on state change will complete a get resquest to the nytimes site
    handleSubmit=(e)=>{
        e.preventDefault()
    //convert information into variables
            let article=this.refs.searchArticle.value;
            let start=this.refs.startDate.value;
            let end=this.refs.endDate.value;
      
                start=moment(start).format("YYYYMMDD")
                end=moment(end).format("YYYYMMDD")

            let info= {
                article:article,
                start:start,
                end:end
            }

            //send information to parent to change state
            this.props.searchRequest(info)

    }



    render(){
        return(
            <div>
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="lead"><label >Search Topic</label></div>
                  
                        <input type="text" required="required" id="searchTopic" ref="searchArticle" placeholder="Article topic"/>

                        <div className="lead"><label >Start Date</label></div>
                    
                        <input type="date" required="required" id="startDate" ref="startDate" />

                        <div className="lead"><label >End Date</label></div>

                        <input type="date" require="required" id="endDate" ref="endDate" />

                        <div className="button">
                            <button type="submit" className="btn btn-secondary">Search Article</button>
                        
                        </div>
                        
                    </form>
               
            </div>
        )
    }
}


export default Form;