import React from 'react';
import DisplayItem from '../DisplayItem';
import './index.scss';


class DisplayList extends React.Component {

  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (


      <div className="main-displaylist">

        <div className="main-displaylist__row">


          <div className="main-displaylist__row___item">

            {items.map(item => {
              return (
                <DisplayItem
                  key={item.id}
                  title={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                />
              );
            })}

          </div>
          <hr/>

          <div className="main-displaylist__row___button">

            <button
              type="button"
              className="main-displaylist__row___button____prop"
              onClick={clearList}
            >
              clear list
            </button>

          </div>



        </div>



      </div>

    );
  }

}
export default DisplayList;