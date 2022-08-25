(() => {
  const form = document.querySelector('form');
  const user = document.getElementById('user');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (user.value !== '') {
      getGithubAPI(user.value);
    }
    form.reset();
  });

  function getGithubAPI(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => {
        user = {
          username: data.login,
          avatar_url: data.avatar_url,
          followers: data.followers,
          following: data.following,
          company: getFirstCompany(data.company),
          repository: data.public_repos,
          location: data.location,
        }
        populateCard(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function getFirstCompany(data) {
    if (data != null) {
      const hasSpace = data.indexOf(' ') > 0;
      return hasSpace ? data.split(' ')[0] : data;
    }
    return data;
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

  getGithubAPI('Alice7H');
})()