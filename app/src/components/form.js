import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
                
                <form>
                <div className="lead"><label for='searchTopic'>Search Topic</label></div>
                  
                        <input type="text" required="required" id="searchTopic" name="searchArticle" placeholder="Article topic"/>

                        <div className="lead"><label for='startDate'>Start Date</label></div>
                    
                        <input type="date" required="required" id="startDate" name="startDate" />

                        <div className="lead"><label for='endDate'>End Date</label></div>

                        <input type="date" require="required" id="endDate" name="endDate" />

                        <div className="button">
                            <button type="submit" className="btn btn-secondary">Search Article</button>
                        
                        </div>
                        
                    </form>
               
            </div>
        )
    }
}


export default Form;