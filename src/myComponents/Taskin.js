import React from 'react'

export const Taskin = ({list, onDelete}) => {
  return (
    <div className="card m-3">
  <h5 className="card-header">Counnt  {list.sno} </h5>
  <div className="card-body">
    <h5 className="card-title">{list.Task}</h5>
    <p className="card-text">{list.desc}</p>
    <button className="btn btn-sm btn-dark" onClick={()=>{onDelete(list)}}>Delete</button>
  </div>
      </div>
  )  
}
