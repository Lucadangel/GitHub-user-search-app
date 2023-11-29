// Octokit.js
/* https://github.com/octokit/core.js#readme
Steps:
1- check token done
2-- connect to api done
3 -create variable inside url connected to the search field
4- work each field(12)to connect them to the frontend
5-card should appear only after the search?
6- ux
7- light and dark themes
          auth: "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",

*/
      
// Octokit.js
import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
    auth: "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",
});

async function fetchUserData(username) {
    try {
        const response = await octokit.request('GET /users/{username}', {
            username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function init(username) {
    const userData = await fetchUserData(username);
    if (userData) {
        displayData(userData);
    }
}

function displayData(data) {
    document.getElementById('image').src = data.avatar_url;
    document.getElementById('name').textContent = data.name || 'Not available';
    document.getElementById('date').textContent = formatDate(data.created_at);
    document.getElementById('account').textContent = `@${data.login}` || 'N/A';
    document.getElementById('bio').textContent = data.bio || 'This profile has no bio';
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('city').textContent = data.location || 'Not available';
    document.getElementById('twitter').textContent = data.twitter_username || 'Not available';
    document.getElementById('web').textContent = data.blog || 'Not available';
    document.getElementById('agithub').textContent = data.company || 'Not available';
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}


document.getElementById('githubForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const username = document.getElementById('searchBar').value;
    if (username) {
        init(username);
    }
});


document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    console.log('Dark mode button clicked');
    let nightVision  = document.body.classList.toggle('dark-mode');
    if (nightVision == true) {
        
    document.getElementById("darkish").innerHTML = "LIGHT";
    document.getElementById("dark-mode-toggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>';
    document.getElementById("dark-mode-toggle").style.backgroundColor = "rgb(31 42 72)";
} else {
    document.getElementById("darkish").innerHTML = "DARK";
    document.getElementById("dark-mode-toggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>';
    document.getElementById("dark-mode-toggle").style.backgroundColor = "#f8f9fa";

}
});

