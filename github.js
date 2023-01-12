class Github {
    constructor() {
        this.client_id = '';
        this.cliend_secret = '';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        try {
            const profileResponse = await fetch(`https://api.github.com/users/${user}/repos
            ?client_id=${this.cliend_id}&client_secret=${this.cliend_secret}`);

            const repoResponse = await fetch(`https://api.github.com/users/${user}
            ?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}
            &client_secret=${this.cliend_secret}`);

            const profile = await profileResponse.json();
            const repos = await repoResponse.json();

            return {
                profile,
                repos
            }

        } catch (err) {
            console.error(err)
        }
        
    }
}