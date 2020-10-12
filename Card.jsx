import React from 'react';


function Card(props) {
    return (
        <>
                        <div className="card mx-3 pl-0 pr-0" style={{ width: '24rem'}}>
                            <img src={props.imgsrc} class="card-img-top" alt="makeupBlog" style={{height:'300px'}}/>
                            <h3 className="card-title text-center pt-2 pb-0"><b>{props.title}</b></h3>
                            <hr />
                            <div className="card-body">
                                <p className="card-text">{props.para}</p>
                            </div>
                        </div>
        </>
    );
}
export default Card;