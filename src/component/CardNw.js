import React from 'react'

export default function CardNw(props) {
  return (
    <div>
      <div className="card" >
  <img src={props.obj.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.obj.title}</h5>
    <p className="card-text">{props.obj.description}</p>
    <p className="card-text">{props.obj.publishedAt}</p>
    <h6 className="card-text">{props.obj.author}</h6>
    <a href={props.obj.url} className="btn btn-primary" target='_blank' rel="noreferrer noopener">Link</a>
  </div>
</div>
    </div>
  )
}
