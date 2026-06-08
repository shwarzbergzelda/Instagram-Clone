import { posts } from './data.js'
const postsSection = document.getElementById('posts-section')

const postsHtml = posts.map(individualPost => {
    const { name, username, location, avatar, post, comment, likes } = individualPost

    return `
        <article class="post">
            <div class="post-header">
                <img class="post-avatar" src="${avatar}" alt="user avatar">
                
                <div class="user-info">
                    <h2 class="user-name">${name}</h2>
                    <p class="user-location">${location}</p>
                </div>
            </div>

            <div class="main-post">
                <img src="${post}" alt="post image">
            </div>

            <div class="post-footer">
                <div class="interactions">
                    <img id="like-btn" class="interaction-btn" src="./images/icon-heart.png" alt="like button">
                    <img class="interaction-btn" src="./images/icon-comment.png" alt="comment button">
                    <img class="interaction-btn" src="./images/icon-dm.png" alt="share button">
                </div>

                <div class="likes">
                    <p>${likes} likes</p>
                </div>

                <div class="post-comment">
                    <p class="username">${username}</p>
                    <p class="comment">${comment}</p>
                </div>
            </div>
        </article>
    `
}).join('')

postsSection.innerHTML = postsHtml