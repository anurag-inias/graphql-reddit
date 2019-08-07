import fetch from 'node-fetch';

export const commentResolvers = {
};

export const commentQueryResolver = {
    async comment(parent: any, args: any, context: any, info: any) {
        const response = await fetch(`https://api.reddit.com${args.permalink}`).then(res => res.json())
            .then(arr => arr[0].data.children[0].data);
        console.log(args, response);
        return response;
    }
}
