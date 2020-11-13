import  API  from "../util/API";
import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        races: [],
        human: ''
      };
    }

    componentDidMount() {
      API.getRace()
        // .then(res => console.log(res))
        
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              races: result,
              human: result.data[0].race
            });
            console.log(this.state.races.data[0].race);
            
          },
          
        //   Note: it's important to handle errors here
        //   instead of a catch() block so that we don't swallow
        //   exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        
    }
    render() {
        return (
            <div>
                {this.state.human}
            </div>
        );
    //   const { error, isLoaded, items } = this.state;
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    //     return (
    //       <ul>
    //         {items.map(item => (
    //           <li key={item.id}>
    //             {item.race} 
    //           </li>
    //         ))}
    //       </ul>
    //     );
      }
    }


  export default MyComponent;