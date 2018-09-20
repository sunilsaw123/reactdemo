import React from "react";

class Test extends React.Component{
    constructor(){
        super();
        this.state = {
            items:['itemA', 'itemB', 'itemC']
        }
    }
    render(){
        return(
            <div className="btn-group-vertical">
            <ul>
                {
                    this.state.items.map(function(item){
                        return <ItemList key={item} detail={item}/>
                    })
                }
                
            </ul>
            </div>
        );
    }
}


class ItemList extends React.Component{
    render(){
        return(
           
            <li className="btn btn-primary">{this.props.detail}</li>
                  
        );
    }
}
export default Test;

