// import {useGetAllPostsQuery} from "../../entities/post/api";

import PostsList from "../../widgets/posts-list/ui";
import {Box, Button, Typography} from "@mui/joy";
import {useEffect, useState} from "react";
import {Post} from "../../shared/types.ts";
import {useGetPostsQuery} from "../../entities/post/api";

const HomePage = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [limit, setLimit] = useState<number>(10)
    const [loading, setLoading] = useState<boolean>()
    const { data, error, isLoading } = useGetPostsQuery(limit);

    useEffect(() => {
        if (!isLoading && !error) {
            setPosts(data);
            setLoading(isLoading)
        }
    }, [data, error, isLoading]);

    const getMore = () => {
        setLoading(true)
        setLimit(limit + 10);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <Box>
            <Typography>
                <h1>Домашняя страница</h1>
                <PostsList posts={posts} loading={loading} getMore={getMore}/>
            </Typography>
        </Box>
    );
};

export default HomePage;
