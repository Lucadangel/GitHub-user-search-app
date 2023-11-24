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
    document.getElementById('name').textContent = data.name;
    document.getElementById('date').textContent = formatDate(data.created_at);
    document.getElementById('account').textContent = data.email || 'N/A'; 
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


