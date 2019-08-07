import fetch from 'node-fetch';

export const userResolvers = {
};

export const userQueryResolver = {
    async user(parent: any, args: any, context: any, info: any) {
        return await fetch(`https://api.reddit.com/user/${args.name}/about`).then(res => res.json()).then(json => json.data);
    }
}
