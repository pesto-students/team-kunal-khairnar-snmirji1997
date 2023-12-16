import React ,{Component} from "react"

const WithLogging  = (WrappedComponet) => {
    return class extends Component {
        componentDidMount(){
            console.log(`Component ${WrappedComponet.name} rendered`)
        }

        render(){
            return <WrappedComponet {...this.props}/>

        }
    }
}

export default WithLogging;