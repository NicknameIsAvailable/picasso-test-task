import {Button, Typography} from "@mui/joy";
import {Link, useParams} from "react-router-dom";
import {useGetOnePostQuery} from "../../entities/post/api";
import {useEffect, useState} from "react";
import {Post} from "../../shared/types.ts";

export const PostPage = () => {
    const [post, setPost] = useState<Post>()

    const params = useParams()
    const { data, error, isLoading } = useGetOnePostQuery(params.id);

    useEffect(() => {
        if (!isLoading && !error) {
            setPost(data);
        }
    }, [data, error, isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <div>
            <Typography>
                <h1>{post?.title}</h1>
                <h2>user#{post?.userId}</h2>
                <h3>ID:{post?.id}</h3>
                <p>
                    {post?.body}
                </p>
                <Link to={-1}>
                    <Button>Назад</Button>
                </Link>
            </Typography>
        </div>
    );
};
