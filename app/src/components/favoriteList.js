import React from 'react'
import OrganizeArticle from './organizeArticle';

class FavoriteList extends React.Component{

    handleClick=(e)=>{
        let articleId = e.target.dataset.id;

        this.props.handleRemove(articleId)

    }


    render(){
        let x;
        console.log(this.props.savedArticles)
        x = this.props.savedArticles.map(articles=> {
            return(
           <div>

                <div className="card">
                    <a href={articles.web_url} target="_blank">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                            <h2>{articles.headline}</h2>
                            <p>{articles.snippet}</p>
                            <footer className="blockquote-footer">{articles.byline} <cite title="Source Title">{articles.pub_date}</cite></footer>
                            </blockquote>
                        </div>
                        </a>
                        <div className="saveArticle">
                            <button type="button" data-id={articles.id} onClick={this.handleClick.bind(this)} className="btn btn-outline-danger">Remove Article</button>
                        </div>
            
                </div>
            </div>)
        })
        console.log(x)
        return(
            <div>
            {x}
            </div>
        )
    }
}

export default FavoriteList;