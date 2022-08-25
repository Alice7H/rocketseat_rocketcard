(() => {
  function getGithubAPI() {
    fetch('https://api.github.com/users/Alice7H')
      .then(response => response.json())
      .then(data => {
        user = {
          username: data.login,
          avatar_url: data.avatar_url,
          followers: data.followers,
          following: data.following,
          company: data.company,
          repository: data.public_repos,
          location: data.location,
        }
        populateCard(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function populateCard(user) {
    const username = document.querySelector('.username');
    const avatar_url = document.querySelector('.img-profile');
    const followers = document.querySelector('.followers');
    const following = document.querySelector('.following');
    const repository = document.querySelector('.repository');
    const company = document.querySelector('.company');
    const location = document.querySelector('.location');

    username.innerHTML = user.username;
    avatar_url.src = user.avatar_url || "https://avatars.githubusercontent.com/u/19490512?v=4";
    followers.innerHTML = `${user.followers} Seguidores`;
    following.innerHTML = `${user.following} Seguindo`;
    repository.innerHTML = `${user.repository} Repositórios`;
    company.innerHTML = user.company || "@desconhecido";
    location.innerHTML = user.location || "Desconhecido";
  }

  getGithubAPI();
})()