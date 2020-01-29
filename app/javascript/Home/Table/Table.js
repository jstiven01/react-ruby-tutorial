import React from 'react';
import Item from './Item';

class Table extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render(){
        const {courseModules } = this.props;
        const items = courseModules.map(module => 
            <Item key={module.id} title={module.title} desc={module.description} />)
        return (
            <div className="pt-5 pb-5">
            <div className="container">
                <div className="text-center">
                    <div className="pt-4 pb-4">
                        <h2> React For Rails Developers - Videos </h2>
                    </div>
                {items}
                </div>
            </div>
            </div>

        )
    }
}

export default Table;