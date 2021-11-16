const api_url = "https://jsonplaceholder.typicode.com"


async function getData() { 
    try {
    const response1 = await fetch(`${api_url}/users`);
    const data1 = await response1.json();
    const response2 = await fetch(`${api_url}/posts`);
    const data2 = await response2.json();
    console.log('users',data1);
    console.log('posts', data2 )
    const usersDiv = document.querySelector(`#all-users`);
    let users = data1;
    users.forEach(user => {
        
        const userRow = document.createElement('tr')
        const userCell = document.createElement('td')
        const userCellId = document.createElement('td')
        
        userCell.onclick = function() {
            const postDiv = document.querySelector(`#user-posts`);
            let posts = data2.filter(post => post.userId === user.id);
            postDiv.innerHTML = ''
            posts.forEach(post => {
                const postBody = post.body
                const postTitle = post.title
                const userPostTitle = document.createElement('h3')
                const userPostBody = document.createElement('p')
                
                userPostTitle.innerText = 'Title: ' + postTitle
                userPostBody.innerHTML = 'Body:  ' + postBody
                postDiv.appendChild(userPostTitle)
                postDiv.append(userPostBody)
            })
        }
        console.log(user.name)
        userCellId.innerText = `${user.id}` 
        userCell.innerText = ` ${user.name}`
        userRow.appendChild(userCellId)
        userRow.appendChild(userCell)
        usersDiv.append(userRow)
        
    })
    if(!response1.ok) {
        throw new Error(`Failed to fetch data: ${response1.status}`);
    }
    } catch (error) {
    console.log(error); 
    }
}
getData();
