import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';

import more from "../assets/more.svg"
import like from "../assets/like.svg"
import comment from "../assets/comment.svg"
import send from "../assets/send.svg"

class Feed extends Component {
    state = {
        feed: [],
    };

    async componentDidMount() {
        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    render() {
        return (
            <section id="post-list">
               { this.state.feed.map(post => (
                     <article >
                     <header>
                         <div className="user-info">
                             <span>Douglas Martins Santos</span>
                             <span className="place">São Paulo</span>
                         </div>
 
                         <img src={more} alt="Mais" />
                         </header>
 
                         <img src="http://localhost:3333/files/bug_autenticacao_2.jpg" alt="" />
                    
                     <footer>
                         <div className="actions">
                             <img src={like} alt=""/>
                             <img src={comment} alt=""/>
                             <img src={send} alt=""/>
                         </div>
 
                         <strong>900 curtidas</strong>
 
                         <p>
                             Olha o InstaRex ai gente
                             <span> #vraptorweek #T-Rex_Code </span>
                         </p>
                     </footer>
                 </article>              
                )) }
            </section>
        );
    }
}

export default Feed;