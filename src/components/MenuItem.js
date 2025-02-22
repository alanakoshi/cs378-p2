import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price, count, updateCart }) => {
    return (
        <div className='menu-option'>
        {/*menu item section*/}
        <div className="row">
            {/*pic*/}
            <div className="col-4 image-fluid">
                <img className='menu-option-image rounded' src={`https://alanakoshi.github.io/cs378-p2/images/${imageName}`} alt={title} />
            </div>
            {/*menu description*/}
            <div className="col">
                {/*title and description*/}
                <div className='row title-desc'>
                    <div className='menu-title'><b>{title}</b></div>
                    <div className='menu-desc'>{description}</div>
                </div>
                {/*price and button*/}
                <div className='row cart'>
                    {/*price*/}
                    <div className='col'>
                        <div className='menu-price'>${price.toFixed(2)}</div>
                    </div>
                    {/*spacing*/}
                    <div className='col-1 addition-subtract'>
                        <button className='btn btn-light' onClick={() => updateCart(id, -1)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-dash-circle' viewBox='0 0 16 16'>
                                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'/>
                                <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/>
                            </svg>
                        </button>
                    </div>
                    <div className='col-1  count' style={{textAlign: 'center', fontSize: '20px'}}>
                        <p>{count}</p>
                    </div>
                    <div className='col-1 addition-subtract'>
                        <button className='btn btn-light' onClick={() => updateCart(id, 1)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-plus-circle' viewBox='0 0 16 16'>
                                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'/>
                                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MenuItem;
