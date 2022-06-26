
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;

    return (

      <div className='my-4'>
        <div className="card" style={{ width: "18rem" }}>
          <span className="badge badge-dark " style={{ left: '90%', zIndex: '1' }}>Source: {source}</span>
          <span className="sr-only">unread messages</span>
          <img src={!imageurl ? "https://cdn.vox-cdn.com/thumbor/KvHFTwdv-wTu-ffb3iD6i8aUSrk=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23590763/acastro_5247_220526_0001.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}<span class="badge badge-success">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-danger">By {!author ? "unknown " : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem