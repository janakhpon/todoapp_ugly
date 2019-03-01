import React from 'react';
import './index.scss';


class DisplayItem extends React.Component {

   render(){
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <div className="item-container">
         
       

      <div>
        
      </div>

      <div className="item-container__main" >
            <div className="item-container__main___text">

            <h5>{title}</h5>

            </div>

            <div className="item-container__main___button">

            <button className="item-container__main___button____edit" onClick={handleEdit}>
            edit me
            </button>
            <button  className="item-container__main___button____delete" onClick={handleDelete}>
            delete me
            </button>

            </div>

      </div>


      <div>

      </div>

      
      </div>
    );
   }
}

export default DisplayItem;