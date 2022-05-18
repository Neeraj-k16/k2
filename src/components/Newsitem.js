import React from 'react'


const Newsitem=(props)=>{

  
    let {title, description, imageurl, newsurl, author, date,source} = props;
    return (
      <div className='my-3'>

      
      
      <div className="card" >

        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-danger" > {source} </span>
        </div>

        <img src={imageurl?imageurl:"https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} 
          <p className="card-text">{description}</p></h5>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
     
    )
  
}

export default Newsitem