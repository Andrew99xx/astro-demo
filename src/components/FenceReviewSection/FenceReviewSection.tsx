import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };

const FenceReviewSection = () => {
    const [data, setData] = useState(
        {
            items: Array.from({ length: 20 }),
            hasMore: true,
        }
    )

    const fetchMoreData = () => {
        const tempData = data
        if (data.items.length >= 500) {
            tempData.hasMore = false
          setData(tempData);
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
          tempData.items= data.items.concat(Array.from({ length: 20 }))
          setData(tempData)
        }, 500);
      };

    return (
        <div>
            <div>
                <h3 className='text-[#801302] text-[26px]'>See What Customers are Saying About Their Experience - <em>Right Now!</em></h3>
                <InfiniteScroll
                    dataLength={data.items.length}
                    next={fetchMoreData}
                    hasMore={data.hasMore}
                    loader={<h4>Loading...</h4>}
                    height={600}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {data.items.map((i, index) => (
                        <div key={index} style={style}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default FenceReviewSection