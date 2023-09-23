import {Post} from "../../../shared/types.ts";
import {PostCard} from "../../../entities/post/ui/post-card";
import {Stack} from "@mui/joy";
import {useEffect, useRef, useState} from "react";

const PostsList = ({posts, loading, getMore}: {posts: Post[], loading: boolean | undefined, getMore: () => void}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef.current) {
                const targetElement = targetRef.current;
                const targetTop = targetElement.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;

                if (targetTop < viewportHeight && !isScrolled && posts.length !== 100) {
                    console.log(1)
                    setIsScrolled(true);
                    getMore()
                } else {
                    console.log(2)
                    setIsScrolled(false)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    return (
        <Stack spacing={1}>
            {posts.map((post: Post) => <PostCard post={post} loading={loading} />)}
            <div ref={targetRef}/>
        </Stack>
    );
};

export default PostsList;