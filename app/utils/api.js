import axios from 'axios'

export default {
  fetchPopularRepos: async function (language) {
    // var encodedURI = window.encodeURI(
    //   "https://api.github.com/search/repositories?q=stars:>1+language:" +
    //     language +
    //     "&sort=stars&order=desc&type=Repositories"
    // );
    var url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    const response = await axios.get(url)
    return response.data.items
  },
}
