import React,{Component} from 'react';
import './card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'State Management',
            initials:'JS',
            info:[
                {title:'React Js', description:'User Interface' },
                {title:'Redux', description:'State container for JS applications'},
                {title:'Angular JS', description:'Frontend framework'}
            ]
        }
    }
    render(){
        const {name,initials,info} = this.state;
        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                    <h1>
                        <span className='initials'>{initials}</span> 
                        {name}
                    </h1>
                </div>
                <div className='app-body'>
                    <ul>
                        <li>{info[0].title}
                        <p>{info[0].description}</p>
                        </li>
                        <li>{info[1].title}
                        <p>{info[1].description}</p>
                        </li>
                        <li>{info[2].title}
                        <p>{info[2].description}</p>
                        </li>
                    </ul>
                     </div>
            </div>
            </>
        )
    }
}

export default Card;