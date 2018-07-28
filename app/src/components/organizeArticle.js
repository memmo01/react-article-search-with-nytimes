import React from 'react'
import $ from 'jquery'

class OrganizeArticle extends React.Component{
    handleClick=(e)=>{
        e.preventDefault();
        
        let articleId =e.target.dataset.id
        this.props.saveArticleData(articleId)
        $(`#${e.target.id}`).attr("class","btn btn-outline-danger")
        $(`#${e.target.id}`).text("Article Saved")
        $(`#${e.target.id}`).attr("disabled","disabled")
        
    }

    render(){
        
        return(
<div>

 
  <div className="card">
      <a href={this.props.organize.web_url} target="_blank">
          <div className="card-header">
            {this.props.organize.news_desk}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
            <h2>{this.props.organize.headline.print_headline}</h2>
              <p>
                {this.props.organize.snippet}
              </p>
              <footer className="blockquote-footer">{this.props.organize.byline.original} <cite title="Source Title">{this.props.organize.pub_date}</cite></footer>
            </blockquote>
          </div>
      </a>

          <div className="saveArticle">
                <button type="button" data-id={this.props.organize._id}id={this.props.organize._id} onClick={this.handleClick.bind(this)} className="btn btn-outline-success">save article</button>
          </div>
  </div>
 

</div>
        )
    }
}

export default OrganizeArticle;