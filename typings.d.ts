type Comments = {
    username: string
    text: string
    post_id: number
    id: number
    created_at: string
}

type Vote = {
    username: string
    upvote: boolean
    post_id: number
    id: number
    created_at: number
}

type Subreddit = {
    topic: string
    id: number
    created_at: string
}

type Post = {
    username: string
    tittle: string
    subreddit_id: number
    image: string
    id: number
    created_at: string
    body: string
    comments: Comments[]
    votes: Vote[]
    subreddit: Subreddit[]
}
