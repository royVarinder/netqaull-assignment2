import { useNavigate } from "react-router-dom";
import { useGetAllImagesQuery } from "./redux/app.ts";

export const LandingPage = () => {
    const { isError, isLoading, isSuccess, data, error } = useGetAllImagesQuery("");
    const groupedPhotos = [];
    const navigate = useNavigate();
    if (!isLoading) {
        if (data.photos.length > 0) {
            //making group of photos === > 4 by 4
            for (let i = 0; i < data.photos.length; i += 4) {
                groupedPhotos.push(data.photos.slice(i, i + 4));
            }
        }
    }

    //fetching images from the data
    if (isError) {
        console.log('error :>> ', error);
        return <div className="somethingWentWrong">
            <h4>Something went wrong!</h4>
        </div>;
    }


    const handleOpenImage = (imageObject) => {
        try {
            navigate(`/${imageObject?.id}`)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className="container containerOverRideClass">
                {isLoading ? <div className='loadingClass'>

                </div> :


                    <div className="row">
                        <div className="col-xs-12">
                            <div id="myCarousel" className="carousel slide" data-ride="">

                                <div className="carousel-inner">
                                    {groupedPhotos.length > 0 ? groupedPhotos.map((items, index) => {
                                        const image = items;
                                        return (
                                            <div key={index} className={`item ${index === 0 ? "active" : ""}`}>
                                                <div className='row'>
                                                    {image.length > 0 &&
                                                        image.map((image, index) => {
                                                            return (
                                                                <div key={index} className="col-xs-3">
                                                                    <img src={image.url} alt="Los Angeles" title={image?.title} style={{ width: "100%" }} />
                                                                    <div className="carousel-caption">
                                                                        <h3>{image?.title}</h3>
                                                                        <p>{image?.description}</p>
                                                                        <button className="btn btn-primary"
                                                                            onClick={() => {
                                                                                handleOpenImage(image);
                                                                            }}
                                                                            type="button"
                                                                        >
                                                                            Go to image
                                                                        </button>

                                                                    </div>

                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }) : <div className='noDataFount'>No Data found</div>}
                                </div>

                                <a className="left carousel-control  carousel-control-customized" href="#myCarousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control carousel-control-customized" href="#myCarousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>

                    </div>}

                {/* applying modal component here it will fetch the single image & details &  show */}

            </div>
        </>


    );
}