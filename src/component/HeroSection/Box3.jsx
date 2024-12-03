import React from 'react'
const num = [
    {
        url: "https://rukminim2.flixcart.com/image/832/832/jws547k0/aerated-drink/u/z/t/2-na-plastic-bottle-coca-cola-original-imafhdygmhjqvxdm.jpeg?q=70"
    },
    {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/n/y/l-ae-blue-teshirt-l-00-amreliya-enterprise-original-imah6ctywh3vzvxz.jpeg?q=70&crop=false"
    }, {
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/0/5/g/s-towel-aidan-paul-original-imah48xdkaga5q9v.jpeg?q=70"
    }, {
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/g/o/2/l-tgyrnfulsweat-plain-tripr-original-imah58ghyz5due9r.jpeg?q=70"
    }
]
const Box3 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='m-4 rounded-sm bg-[#FFFFFF]'>
                <div>
                    <h1 className='font-bold text-lg p-4 '>Discounts Just for You!</h1>
                    <div className='grid grid-cols-2 p-3 overflow-hidden'>
                        {
                            num.map((item, index) => (
                                <div className='bg-[#FFFFFF] border border-gray-300 h-64 w-44 flex flex-col justify-center items-center p-2 mx-3 rounded-lg cursor-pointer mb-4'>
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
                    </div>
                </div>
            </div>
            <div className='m-4 rounded-sm bg-[#FFFFFF]'>
                <div>
                    <h1 className='font-bold text-lg p-4 '>Discounts Just for You!</h1>
                    <div className='grid grid-cols-2 p-3 overflow-hidden'>
                        {
                            num.map((item, index) => (
                                <div className='bg-[#FFFFFF] border border-gray-300 h-64 w-44 flex flex-col justify-center items-center p-2 mx-3 rounded-lg cursor-pointer mb-4'>
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
                    </div>
                </div>
            </div>
            <div className='h-[40rem] w-full p-4'>
                <img src="https://rukminim2.flixcart.com/www/1060/1560/promos/15/09/2023/9c056ec4-f39c-4740-938d-33e1a6c7c108.jpg?q=60"
                    className='h-full w-full'
                />
            </div>

        </div>
    )
}

export default Box3
