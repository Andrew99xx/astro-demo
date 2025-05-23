import React, { useEffect } from 'react'

const ReviewBlock = ({reviewScript}:{reviewScript:string}) => {


    const match = reviewScript.match(/https:\/\/[^"]+/);

 
    const bodyPart = reviewScript.split("</script>")[1]


    useEffect(() => {
        // Create the script element
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =match[0]
        //   "https://birdeye.com/embed/v4/152044990161311/3/123456794821302";
        script.async = true;
    
        // Append the script to the body or specific container
        document.body.appendChild(script);
    
        // Cleanup the script on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);


      console.log(match[0],"scriptPart")

  return (
    <div dangerouslySetInnerHTML={{
        __html:bodyPart
      }}></div>
    // <div
    //   id="bf-revz-widget-123456794821302"
    //   style={{ WebkitOverflowScrolling: "touch" }}
    // >
    //   <div className="bf-dv">
    //     <span className="bf-spn">
    //       powered by{" "}
    //       <a
    //         className="bf-pwr"
    //         href="https://birdeye.com?utm_source=SRC&utm_medium=widget_review-feed&utm_campaign=birdeye_widget&utm_term=powered-by-birdeye&utm_content=scrolling-widget_#821302"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         BirdEye
    //       </a>
    //     </span>
    //   </div>
    
    // </div>
  )
}

export default ReviewBlock