import React from 'react'

const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }

        increament = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        } 
        
        render(){
            return(
                <WrappedComponent
                    count={this.state.count}
                    increament={this.increament}  
                    color="red"    
                    align='left'              
                />
            )        
        }
    }

  return WithCounter
}

export default withCounter