import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
   static defaultProps= {
       country: 'in',
       pageSize: 6,
       category: 'general'

   }
   static propTypes = {
       country: PropTypes.string,
       pageSize: PropTypes.number,
       category: PropTypes.string
   }
    capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    constructor(props){
        super(props);
        console.log('hello i am constructor from news component');
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsHub.Co`;
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac0fabc81be14311a6ef782b3aa91b4f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false})
    }
    async componentDidMount(){
        
        this.updateNews();
    }

    handleNextClick = async ()=>{
        
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    handlePrevClick = async ()=>{
       
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    render() {
    return (
    <div className='container my-4'>
      
        <h1 className="text-center text-dark" style={{margin: '40px'}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}> 
                <NewsItem  title = {element.title?element.title:""} description={element.description?element.description: ""} imageurl={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} source = {element.source.name}/>
            </div>
             })}
               
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
            </div>
        
    </div>
    )
  }
}

export default News