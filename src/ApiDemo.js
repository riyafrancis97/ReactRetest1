import React from 'react'
import axios from 'axios'

export default class ApiDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }


    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let data = JSON.parse(JSON.stringify(response.data));
               console.log(data)
               this.setState({
                posts:data.slice()
               })
            })

    }


    render() {
        let postlist = this.state.posts.map(p => (

            <div key={p.id}>
               
                ID: {p.id} < br />
                Title: {p.title} < br />
                Body: {p.body} < br />
                {/* <hr /> */}
              
            </div>

        ));
        return (
            <div>
                <h1>Api Demo</h1>
               
                <button onClick={this.getPosts}>Get Posts</button>&nbsp;&nbsp;&nbsp;&nbsp;
               
                {postlist}
                
               
            </div>
        )
    }


}

