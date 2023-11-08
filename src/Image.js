import { useNavigate, useParams } from "react-router-dom"
import { useGetImageByIdQuery } from "./redux/app.ts";

export const Image = () => {
    const { imageId } = useParams();
    const navigate = useNavigate();
    let imageObject = {}
    const { isError, isLoading, isSuccess, data, error } = useGetImageByIdQuery(imageId);

    //api given any error it will go to the home page
    if (isError) {
        console.error(error);
        navigate("/")
    }
    if (!!data) {
        imageObject = data?.photo || {};
    } 
    return <>
        <div className="ImageContainer">
            {isLoading ? <div className="loadingContainer"> Loading... </div> : <div className="imageContainerBody">
                <img src={imageObject?.url} alt={imageObject?.title} />
                <div className="title">
                    <h3>{imageObject?.title}</h3>
                </div>
                <div className="imageDescription">
                    <p>{imageObject?.description}</p>
                </div>
                <div className="actions">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => {
                            navigate("/")
                        }}
                    >{"Back"}</button>
                </div>
            </div>}
        </div>
    </>

}