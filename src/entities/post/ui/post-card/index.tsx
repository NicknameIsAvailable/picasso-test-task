import Card from '@mui/joy/Card'
import {Post} from "../../../../shared/types.ts";
import {Button} from "@mui/joy";
import {Link} from "react-router-dom";

export const PostCard = ({post, loading}: {post: Post, loading: boolean | undefined}) => {
    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return  text.substring(0, maxLength) + '...'
        }
        return text
    }

    return (
        <Card>
            {
                loading ? <h1>Загрузка...</h1>
                    :
                    <>
                        <h1>#{post.id} {post.title}</h1>
                        <p>{truncateText(post.body, 150)}</p>
                        {post.body.length > 150 ?
                            <Link to={`/post/${post.id}`}>
                                <Button>Посмотреть</Button>
                            </Link>
                            : ""}
                    </>
            }
        </Card>
    );
};
