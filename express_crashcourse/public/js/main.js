const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

//Get and show posts
async function showPosts() {

    try {
        const res = await fetch('http://localhost:8080/api/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),});

            const data = await res.json();
            console.log("Response:", data);

    if (!res.ok){
        throw new Error('data.message || "Failed to create post"');
    }

    const posts=await res.json();
    output.innerHTML ='';

    posts.forEach((post)=> {
        const postEl =document.createElement('div');
        postEl.textContent=post.title;
        output.appendChild(postEl);
    });
    } catch (error) {
        console.log('Error fetching posts: ',error);
    }
    
};

//Event listener
button.addEventListener('click', showPosts);