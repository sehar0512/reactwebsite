import React from 'react';
import Card from './Card';
import Data from './Data';

function Blog() {
    return (
        <>
        <div className="my-5 text-center">
        <h1>Our Blogs</h1>
        </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {Data.map((val, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={val.title}
                                        imgsrc={val.imgsrc}
                                        para={val.para}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blog