import React, { useEffect } from "react";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { Col, Container, Row } from "react-bootstrap";
import Videos from "../../components/videos/Videos";
import { getPopularvideos } from "../../redux-toolkit/actions/videos.action";
import { useSelector,useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen=()=>{
    const dispatch=useDispatch();
    const{isVideosLoading,data}=useSelector((state)=>state.popularVideos);
    console.log("isVideo loadin????",isVideosLoading,data)
    const{isLoading,categoryVideos}=useSelector((state)=>state.videoByCategory)
    console.log("categoryvideos are:",isLoading,categoryVideos)
    
    useEffect(()=>{
console.log("content ki baarish.......")
         dispatch(getPopularvideos())
    },[dispatch])
   const fetchData=()=>{
    console.log("firse content ki baarsidh......",data)
    dispatch(getPopularvideos())
    
   }
    return(
       <Container>
        <CategoriesBar/>
        
        <Row>
            <InfiniteScroll 
            dataLength={ data.result ? data.result.length : 0 }
            next={fetchData}
            hasMore={true}
            loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
            }
            className="row"
            >
            {
               categoryVideos && categoryVideos.length > 0 ?(
                      categoryVideos.map((video)=>(
                        <Col lg={3} md={4} key={video.id}>
                        <Videos video={video} />
                        </Col>
                    ))
                ):(
                 data.result && data.result.map((video)=>(
                        <Col lg={3} md={4} key={video.id}>
                        <Videos video={video}/>
                        </Col>
                    ))  
                )
            }
            </InfiniteScroll>
        </Row>
       </Container>
    )
}
export default HomeScreen;