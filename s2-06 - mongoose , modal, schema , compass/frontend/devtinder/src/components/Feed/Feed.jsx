import { useSelector } from 'react-redux';

const Feed = () => {
    const userData = useSelector(state => state.user);
    console.log(userData, "userData");

    return (
        <div>Feed</div>
    )
}

export default Feed;