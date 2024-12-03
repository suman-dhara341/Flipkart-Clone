import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
    }
};

const num = [
    { url: "https://rukminim2.flixcart.com/image/340/340/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=60" },
    { url: "https://rukminim2.flixcart.com/image/400/400/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=70" },
    {
        url: "https://rukminim2.flixcart.com/image/400/400/kylvr0w0/shirt/u/p/t/m-1596-fs-maple-killer-original-imagasvf8qupbpuz.jpeg?q=70"
    }, {
        url: "https://rukminim2.flixcart.com/image/400/400/xif0q/dress/j/s/f/s-kbt-559-krati-by-tara-original-imagg9hftvfxe56u.jpeg?q=70"
    }, {
        url: "https://img.fkcdn.com/image/xif0q/t-shirt/v/c/d/xl-01overboatmgreen-rodzen-original-imah3g64vycgexuj.jpeg"
    }, {
        url: "https://rukminim2.flixcart.com/image/200/200/xif0q/t-shirt/6/r/9/l-rzw01tribalprint-rodzen-original-imah33nzh9gvuwwh.jpeg?q=90"
    }, {
        url: "https://img.fkcdn.com/image/xif0q/shirt/9/u/d/l-short-fashion-ritmo-original-imah222ajyqymfx9.jpeg"
    }, {
        url: "https://img.fkcdn.com/image/xif0q/dress/b/g/e/m-d-print-05-teal-aask-original-imah3nwzzwz4zfab.jpeg"
    }
]

const Box = () => {
    return (
        <div className='h-[22rem] m-4 rounded-sm bg-[#FFFFFF]'>
            <h1 className='font-bold text-xl p-5'>Fashion Best Sellers</h1>

            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                slidesToSlide={2}
            >
                {
                    num.map((item, index) => (
                        <div className='bg-[#FFFFFF] border border-gray-300 h-64 w-44 flex flex-col justify-center items-center p-2 mx-3 rounded-lg cursor-pointer'>
                            <div className="overflow-hidden h-44 w-full flex justify-center items-center">
                                <img
                                    src={item.url}
                                    alt=""
                                    className="h-full transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                            <div className="h-auto w-auto mt-4 text-center">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-36 text-sm">
                                    Sweatshirts, Hoodies, Jackets...
                                </p>
                                <p className="text-sm">From ₹249</p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Box