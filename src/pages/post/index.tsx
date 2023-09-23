import {Button, Typography} from "@mui/joy";
import {useParams, useNavigate} from "react-router-dom";
import {useGetOnePostQuery} from "../../entities/post/api";
import {useEffect, useState} from "react";
import {Post} from "../../shared/types.ts";

export const PostPage = () => {
    const [post, setPost] = useState<Post>()
    const navigate = useNavigate()
    const params = useParams()
    const { data, error, isLoading } = useGetOnePostQuery(params.id);

    useEffect(() => {
        if (!isLoading && !error) {
            // @ts-ignore
            setPost(data);
        }
    }, [data, error, isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    const goBack = () => navigate(-1)

    return (
        <div>
            <Typography>
                <h1>{post?.title}</h1>
                <h2>user#{post?.userId}</h2>
                <h3>ID:{post?.id}</h3>
                <p>
                    {post?.body}
                </p>
                <Button onClick={goBack}>Назад</Button>
            </Typography>
        </div>
    );
};
