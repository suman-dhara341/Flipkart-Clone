const img = [
    { url: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/5c119bd4af44b30f.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/0830c4b817cbbd1c.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/9b3723b4819f3e61.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/7ce846f464bc367a.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/f1d238cf27cbf19f.jpg?q=20" },
    { url: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/388e46508cfc77dd.jpg?q=20" },
]
const Box2 = () => {
    return (
        <div className='m-5 rounded-sm bg-[#FFFFFF]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4'>
                {img.map((item, index) => (
                    <div key={index}
                        className="bg-black cursor-pointer"
                    >
                        <img src={item.url} alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Box2
