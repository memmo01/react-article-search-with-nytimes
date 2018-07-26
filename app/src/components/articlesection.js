import React from 'react';
import OrganizeArticle from './organizeArticle'

class ArticleSection extends React.Component{
    render(){
        let o;
            if(this.props.articles){
            o=this.props.articles.map(articles=>{return <OrganizeArticle  organize ={articles}/>})
            }
        return(
            <div>
                 {o}
                </div>
        )
    }
}

export default ArticleSection;