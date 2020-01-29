import React from 'react';
import ActiveItem from './ActiveItem'
import Item from './Item';

class Table extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render(){
        const {courseModules, handlerVideoChange } = this.props;
        const items = courseModules.map(module => {
            if (module.active){
                return <ActiveItem handlerVideoChange={handlerVideoChange} key={module.id} id={module.id} title={module.title} desc={module.description} />
            }else {
                return <Item handlerVideoChange={handlerVideoChange} key={module.id} id={module.id} title={module.title} desc={module.description} />
            }
        });
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