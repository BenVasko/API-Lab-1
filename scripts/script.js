"use strict";
$(document).ready(() => {

        $.get(`https://www.reddit.com/r/aww.json`).then((data) => {
            for (let post of data.data.children) {
                $(".posts").append(`
                <section class="object">
                    <section class="picture">
                        <img src="${post.data.thumbnail}">
                    </section>
                    <section class="title">
                        <a href='https://reddit.com${post.data.permalink}'>${post.data.title}</a>
                    </section>
                </section>
                `);
            }
        });
});