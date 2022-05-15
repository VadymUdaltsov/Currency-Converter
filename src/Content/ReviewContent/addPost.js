import React from 'react';
/* eslint-disable no-useless-concat */

let addPost = () => {
    let ReviewPost = React.createRef();
    let text = ReviewPost.current.value;
    let person = document.getElementById('person').value;
    let comentBlock = document.getElementById('coment__block');
    comentBlock.innerHTML = 'Name:' + person + '<br>' + 'Review:' + text;
}

export default addPost;