import fetch from 'node-fetch';

export const userResolvers = {
    User: {
        async comments(parent: any, args: any, context: any, info: any) {
            return await fetch(`https://api.reddit.com/user/${parent.name}/comments`).then(res => res.json())
                .then(json => json.data.children).then(list => list.map((comment: { data: any; }) => comment.data));
        }
    }
};

export const userQueryResolver = {
    async user(parent: any, args: any, context: any, info: any) {
        return await fetch(`https://api.reddit.com/user/${args.name}/about`).then(res => res.json()).then(json => json.data);
    }
}
