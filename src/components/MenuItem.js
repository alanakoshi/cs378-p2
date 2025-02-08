import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className='menu-option'>
        {/*menu item section*/}
        <div className="row">
            {/*pic*/}
            <div className="col-4 image-fluid">
                <img className='menu-option-image rounded' src={`/images/${imageName}`} alt={title} />
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
                    <div className='col'>

                    </div>
                    {/*add*/}
                    <div className='col add'>
                        <button className='btn btn-light'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MenuItem;
