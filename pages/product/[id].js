import { useState,useEffect,useRef } from "react"
import Head from "next/head"
import { getData } from "../../utils/fetchData"




const DetailProduct=(props)=>{
    const [product]=useState(props.product)
    const[tab,setTab]=useState(0)
    const imgRef=useRef()
    useEffect(()=>{
        const images=imgRef.current.children
        for(let i=0;i<images.length;i++){
            images[i].className=images[i].
        }
    },[])
    return (
        <div className="row detail_page">

            <Head>
                <title>Detail Product</title>
            </Head>
           <div className="col-md-6">
               <img src={product.images[tab].url} alt={product.images[tab].url} className="d-block img-thumbnail rounded mt-4 w-100"
               style={{height:"350px"}}
               />

               <div className="row mx-0" style={{cursor:'pointer'}} ref={imgRef}>
                   {
                       product.images.map((img,index)=>(
                           <img className="img-thumbnail rounded" key={index} src={img.url} alt={img.url}
                           style={{height:"80px",width:"20%"}}
                           onClick={()=>setTab(index)}
                           />

                       ))
                   }
               </div>

           </div>
           <div className="col-md-6"></div>


        </div>
        
    )
}

export async function getServerSideProps({params:{id}}) {

    const res = await getData(`product/${id}`);
   
    return {
      props: {product:res.product}, // will be passed to the page component as props
    };
  }

export default DetailProduct
