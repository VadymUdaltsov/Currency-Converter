/* eslint-disable no-useless-concat */
import React from 'react';
import { ReactDOM } from 'react';
import s from './ReviewCss.module.css';

const ReviewContent = (props) => {
    let ReviewPost = React.createRef();
    let dom = React.createRef();
    let addPost = () => {
        let text = ReviewPost.current.value;
        let person = document.getElementById('person').value;
        let comentBlock = document.getElementById('comment__block');
        comentBlock.innerHTML = 'Name:' + person + '<br>' + 'Review:' + text;
        dom.style.display = 'none';
    }
    return (
        <div>
            <div className={s.form__container}>
                <form className={s.form}>
                    <div className={s.form__inner}>
                        <div className={s.form__data}>
                            <label>
                                Name:<input type="text" id='person' />
                            </label>
                        </div>
                        <div className={s.review__block}>
                            <label>
                                Review:
                                <textarea className={s.form__reviewTextarea} ref={ReviewPost}></textarea>
                            </label>
                            <button type='button' onClick={addPost} className={s.btn__send}>Send</button>
                        </div>
                    </div>
                    <p>Make a screenshot of the feedback, because I don't know how to save changes to the server</p>
                </form>
            </div>
            <div id='comment__block' ref={dom}></div>
        </div>
    )
}

export default ReviewContent;