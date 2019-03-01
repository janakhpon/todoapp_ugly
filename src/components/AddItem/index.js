import React from 'react';
import './index.scss';


class AddItem extends React.Component {
    
   

    render(){
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (

            <nav>
                <div className="search-container">
                    <div>
    
                    </div>
                    <div className="search-container__main-display">
                        <form onSubmit={handleSubmit}>
    
    
                            <input className="search-container__main-display___input" type="text" placeholder="new note here" value={item}
                                onChange={handleChange} />
    
                            <button className="search-container__main-display___button" type="submit" >
    
                                {editItem ? "update me" : "save me"}
    
                            </button>
    
                        </form>
    
    
    
                    </div>
                    <div>
    
                    </div>
    
    
                </div>
            </nav>
        );
    }
}

export default AddItem;