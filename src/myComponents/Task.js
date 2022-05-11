import React from 'react'
import { Taskin } from './Taskin';

export const Task = (props) => {
  return (
  <>
    <div className='container'>
        <h1 className='m-1 p-3 text-center'>Task to completed on time..</h1>
    {props.list.length===0? "Congratgulation you have completed all taskes":
    props.list.map((list)=>{
        return <Taskin list={list} key={list.sno} onDelete={props.onDelete}/>
            })
    }
</div>
        </>
  )
}
