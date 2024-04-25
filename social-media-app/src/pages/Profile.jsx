import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import  Post  from "../components/posts";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";


function Profile() {
    const { profileId } = useParams();


    const user = useSWR(`/user/${profileId}/`, fetcher);

    const posts = useSWR(`/post/?author__public_id=${profileId}`, fetcher, {
        refreshInterval: 20000
    });

    return (

    );
}

export default Profile;